import { useEffect, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { GoogleTagManager } from '@next/third-parties/google'
import { ThemeProvider } from 'next-themes'

import { inter, mulish } from '@/modules/design-system/theme/fonts'

import '@/styles/globals.css'


import { createApolloClient } from '@/modules/api/apollo-client'
import { ApiTokenProvider } from '@/modules/docs/parts/api-token-context'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
  theme?: string
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// Moved outside of the component to prevent the client from being recreated on every render
export const client = createApolloClient()

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  const withLayout = getLayout(<Component {...pageProps} />)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class" enableSystem={false} forcedTheme={Component.theme}>
        <ApiTokenProvider>

        <style jsx global>{`
          body {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>


          <div className={mulish.variable}>{withLayout}</div>
        </ApiTokenProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}
