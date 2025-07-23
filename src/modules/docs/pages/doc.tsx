// pages/docs.tsx
import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import PayvaImage from '../../../../public/payva-light.svg';

import Integration from '../parts/integration';
import CheckoutAPIReference from '../parts/api-reference';
import Environments from '../parts/environments';
import { ApiTokenProvider, useApiToken } from '../parts/api-token-context';
import { Button } from '@/modules/design-system/components/button';
import { Input } from '@/modules/design-system/components/input';
import { usePlatformTokenMutation } from '@/modules/api/generated/graphql';

const SIDEBAR_LINKS = [
  { title: 'Intro', hash: '#intro' },
  { title: 'Create Token', hash: '#create-checkout' },
  { title: 'SDK Setup', hash: '#javascript-sdk' },
  { title: 'Trigger Checkout', hash: '#trigger-checkout' },
  { title: 'Handle Webhooks', hash: '#webhooks' },
  {
    title: 'API Reference',
    hash: '#api-reference',
    subLinks: [
      { title: 'Checkout API', hash: '#checkout-api' },
      { title: 'Webhooks API', hash: '#webhooks-api' },
    ],
  },
];

const ALL_LINKS = SIDEBAR_LINKS.flatMap(link => [link, ...(link.subLinks || [])]);

const Doc: React.FC = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(SIDEBAR_LINKS[0]!.hash);

  const [platformToken] = usePlatformTokenMutation();

  const {token, setToken, clearToken} = useApiToken();
  
  const [tempToken, setTempToken] = useState(token)

  const handleSetToken = async (newToken: string) => {
     const response =await platformToken({
      variables: { token: newToken },
      context: {
        headers: {
          'x-api-key': newToken,
        },
      },
    });
    const valid = response.data?.platformToken?.valid || false;

    console.log('Token validation result:', valid);
    if (valid) {
      setToken(newToken);
    } else {
      console.error('Invalid token provided');
      alert('Invalid API Key. Please check and try again.');
    }
  };

  useEffect(() => {
    console.log('Current token:', token)
    setTempToken(token)
  }, [token])
  // Scrollspy: update activeHash on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offsets = ALL_LINKS.map(({ hash }) => {
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (!el) return null;
        return { hash, top: el.getBoundingClientRect().top };
      }).filter(Boolean) as { hash: string; top: number }[];

      if (offsets.length) {
        const past = offsets.filter(o => o.top <= 100);
        const nearest = past.length
          ? past.sort((a, b) => b.top - a.top)[0]
          : offsets.sort((a, b) => a.top - b.top)[0];
        if (nearest) {
          setActiveHash(nearest.hash);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.asPath]);

  // Initialize from URL hash
  useEffect(() => {
    const { hash } = window.location;
    if (hash) setActiveHash(hash);
  }, []);

  const isApiPage = router.pathname.startsWith('/docs/api');
  const isEnvPage = router.pathname.startsWith('/docs/environments');
  const isIntegrationPage = router.pathname.startsWith('/docs/integration') || (!isApiPage && !isEnvPage);

  const renderSidebar = (isMobile = false) => (
    <nav
      className={`bg-white h-full p-6 w-64 flex flex-col shadow-lg ${
        isMobile ? 'rounded-r-xl' : 'border-r border-gray-200'
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <Link
          href={
            isApiPage
              ? '/docs/api#api-reference'
              : isEnvPage
              ? '/docs/environments'
              : '/docs/integration#intro'
          }
          onClick={() => isMobile && setMobileOpen(false)}
          className="text-2xl font-bold text-payva-purple-600"
        >
          <Image
            className="ml-6 block sm:ml-[37px]"
            src="/payva-light.svg"
            alt="Logo"
            width={115}
            height={80}
          />
      
        </Link>
        {isMobile && (
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} className="text-payva-purple-600" />
          </button>
        )}
      </div>

      <ul className="space-y-2 flex-1 overflow-y-auto">
        {SIDEBAR_LINKS.map(({ title, hash, subLinks }) => {
          const hasSubs = Array.isArray(subLinks) && subLinks.length > 0;
          const isActive = activeHash === hash;
          const isExpanded =
            hasSubs && (isApiPage || isActive || subLinks!.some(sl => sl.hash === activeHash));
          const basePath = hasSubs ? '/docs/api' : '/docs/integration';

          return (
            <li key={hash}>
              <Link
                href={`${basePath}${hash}`}
                onClick={() => isMobile && setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ${
                  isActive
                    ? 'bg-payva-purple-100 text-payva-purple-800 font-semibold'
                    : 'text-payva-purple-600 hover:bg-payva-purple-50 hover:text-payva-purple-700'
                }`}
              >
                <span>{title}</span>
                {hasSubs && (
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                )}
              </Link>

              {isExpanded && hasSubs && (
                <ul className="mt-1 space-y-1 pl-6">
                  {subLinks!.map(({ title: subTitle, hash: subHash }) => {
                    const isSubActive = activeHash === subHash;
                    return (
                      <li key={subHash}>
                        <Link
                          href={`/docs/api${subHash}`}
                          onClick={() => isMobile && setMobileOpen(false)}
                          className={`block px-4 py-1 rounded-lg transition-colors duration-200 ease-in-out ${
                            isSubActive
                              ? 'bg-payva-purple-200 text-payva-purple-900 font-semibold'
                              : 'text-payva-purple-600 hover:bg-payva-purple-50 hover:text-payva-purple-700'
                          }`}
                        >
                          {subTitle}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <Button
      variant={'outline'}
        onClick={() => clearToken()}
      >
        Clear API Key
      </Button>
    </nav>
  );

  return (
      <>
      {token? <div className="flex bg-gray-50 min-h-screen text-gray-900">
        <aside className="hidden sm:block fixed top-0 left-0 h-full">{renderSidebar()}</aside>

        <button
          className="sm:hidden fixed top-4 left-4 p-2 bg-white rounded-full shadow-md z-30"
          onClick={() => setMobileOpen(v => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {mobileOpen && (
          <>
            <div className="fixed inset-0 bg-opacity-50 z-20" onClick={() => setMobileOpen(false)} />
            <aside className="sm:hidden fixed inset-y-0 left-0 z-30">{renderSidebar(true)}</aside>
          </>
        )}

        <main className="flex-1 p-8 sm:pl-72">
          <Integration />
          <CheckoutAPIReference />
        </main>
      </div> : <div className="flex bg-gray-50 min-h-screen text-gray-900">
        <div className="flex-1 flex items-center justify-center">
          <div className='flex flex-col  items-center gap-4 mb-6'>
          <h1 className="text-2xl font-bold text-gray-800">API Key Required</h1>
          <p className="text-gray-600">Please set your API key to access the documentation.</p>
          <Input
            type="text"
            placeholder='Your API Key'
            onChange={(e) => setTempToken(e.target.value)}
            value={tempToken || ""}
          />
          <Button
          disabled={!tempToken}
            onClick={() => handleSetToken(tempToken ?? '')}
          >
            Set API Key
          </Button>
        </div>
        </div>
      </div>}
      </>
  );
};

export { Doc };