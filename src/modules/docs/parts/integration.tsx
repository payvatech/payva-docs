// /parts/Integration.tsx
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { CodeBlock } from './code-block'
import MockWebhookButton from '../parts/mock-webhook-button'
import { useApiToken } from './api-token-context'
import { Button } from '@/modules/design-system/components/button'
import { Input } from '@/modules/design-system/components/input'
import { to } from 'react-spring'
import { set } from 'date-fns'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/modules/design-system/components/select'
import { PlatformWebhooksType } from '@/modules/api/generated/graphql'

// Smooth‐scroll to section on hash change
export function useScrollToHash(offset = 16) {
  useEffect(() => {
    const { hash } = window.location
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (!el) return
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }, [offset])
}

// Static webhook definitions
export const CONTRACT_STATUS = {
  ACTIVE: 'ACTIVE',
  ACTIVE_MODIFIED_PAYMENT: 'ACTIVE_MODIFIED_PAYMENT',
  CANCELED: 'CANCELED',
  CHARGEBACK: 'CHARGEBACK',
  DEFAULTED: 'DEFAULTED',
  DECLINED: 'DECLINED',
  DUPLICATE: 'DUPLICATE',
  FAILED_PAYMENT: 'FAILED_PAYMENT',
  IN_COLLECTIONS: 'IN_COLLECTIONS',
  IN_COLLECTIONS_PAUSED_PAYMENT: 'IN_COLLECTIONS_PAUSED_PAYMENT',
  IN_COLLECTIONS_PENDING_PAYMENT: 'IN_COLLECTIONS_PENDING_PAYMENT',
  PAID: 'PAID',
  REQUESTING_CANCELLATION: 'REQUESTING_CANCELLATION',
  UNKNOWN: 'UNKNOWN',
} as const;

export type ContractStatus = typeof CONTRACT_STATUS[keyof typeof CONTRACT_STATUS];

const WEBHOOKS = [
  {
    title: '🛒 New Purchase',
    event: 'NEW_PURCHASE' as const,
    description: 'Triggered when a new purchase is completed and the contract becomes active.',
    sample: `{
    "event_type": "NEW_PURCHASE",
    "checkout_id": "12345",
    "order_id": "order_12345",
    "status": "ACTIVE",
    "event_date": "2025-07-21T15:30:00.000Z",
    "sales_tax": "400",
    "total_before_sales_tax": "9500",
    "merchant_id": "merchant_67890",
    "plan": {
      "period_payment_amount": "100",
      "payment_frequency": "MONTHLY",
      "number_of_payments": "12",
      "total_amount": "1200"
    }
  }`,
  },
   {
    title: '🚫 Customer Application Declined',
    event: 'APPLICATION_DECLINED' as const,
    description: 'Triggered when a customers application for a payment plan is declined.',
    sample: `{
    "event_type": "APPLICATION_DECLINED",
    "merchant_id": "merchant_67890",
    "status": "DECLINED",
    "level": "Prime" | "Premium" | "Pro",
    "order_id": "order_12345",
    "platform_id": "platform_id_value",
    "platform_url": "https://platform.url"
  }`
  },
  {
    title: '💳 Payment Success',
    event: 'PAYMENT_SUCCESS' as const,
    description: 'Fired when a payment is captured successfully.',
    sample: `{
  "event_type": "PAYMENT_SUCCESS",
  "merchant_id": "merchant_67890",
  "event_date": "2025-07-21T15:30:00.000Z",
  "order_id": "order_12345",
  "checkout_id": "12345",
  "payment_amount": "10000",
  "payment_date": "2025-07-21T15:30:00.000Z"
}`,
  },
  {
    title: '❗ Payment Failed',
    event: 'PAYMENT_FAILED' as const,
    description: 'Emitted when a payment fails (e.g. card declined).',
    sample: `{
  "event_type": "PAYMENT_FAILED",
  "merchant_id": "merchant_67890",
  "event_date": "2025-07-21T15:30:00.000Z",
  "order_id": "order_12345",
  "checkout_id": "12345",
  "payment_amount": "10000",
  "payment_date": "2025-07-21T15:30:00.000Z"
}`,
  },
  {
    title: '💰 Payout',
    event: 'PAYOUT' as const,
    description: 'Triggered when a payout is issued to the merchant.',
    sample: `{
  "event_type": "PAYOUT",
  "order_id": "order_12345",
  "checkout_id": "12345",
  "payment_amount": "9500",
  "payment_date": "2025-07-21T15:30:00.000Z",
  "transaction_id": "mock_transaction_id-abc123",
  "merchant_id": "merchant_67890"
}`,
  },
  {
    title: '🔄 Contract Status Change',
    event: 'CONTRACT_STATUS_CHANGE' as const,
    description: 'Emitted when a contract’s status changes (e.g. funded, paid off).',
    sample: `{
  "event_type": "CONTRACT_STATUS_CHANGE",
  "event_date": "2025-07-21T15:30:00.000Z",
  "order_id": "order_12345",
  "checkout_id": "12345",
  "plan_id": "1",
  "old_status": "PENDING",
  "status": ${Object.values(CONTRACT_STATUS).map(status => `"${status}"`).join(' | ')},
  "merchant_id": "merchant_67890"
}`,
  },
  {
    title: '📦 Merchant Status',
    event: 'MERCHANT_STATUS' as const,
    description:
      'Sent when a merchant’s onboarding status changes (approved, suspended, etc.).',
    sample: `{
  "event_type": "MERCHANT_STATUS",
  "event_date": "2025-07-21T15:30:00.000Z",
  "merchant_id": "merchant_67890",
  "status": "APPROVED" | "SUSPENDED" | "DECLINED" | "APPLICATION_STARTED" | "APPLICATION_SUBMITTED",
  "external_merchant_id": "EXTERNAL_MID",
  "level": "Premium"
}`,
  },
 
  
];

type WebhookEvent = typeof WEBHOOKS[number]['event']

// Flip-card component
const WebhookCard: React.FC<{
  title: string
  event: WebhookEvent
  description: string
  sample: string
}> = ({ title, event, description, sample }) => {
  // these two hooks are ALWAYS called, so hook count never changes
  const [flipped, setFlipped] = useState(false)
  const [orderId, setOrderId] = useState('')
  const [paymentAmount, setPaymentAmount] = useState('')
  const [merchantId, setMerchantId] = useState('')
  const [status, setStatus] = useState('')
  const { token, setToken } = useApiToken()

  const hasRequiredFields = () => {
    if (event === 'PAYMENT_SUCCESS' || event === 'PAYMENT_FAILED' || event === 'PAYOUT') {
      return (!!orderId && orderId != '') && (!!paymentAmount && paymentAmount != '')
    } else if ( event === 'CONTRACT_STATUS_CHANGE') {
      return (!!orderId && orderId != '') && (!!status && status != '')
    } else if (event === 'MERCHANT_STATUS') {
      return (!!merchantId && merchantId != '') && (!!status && status != '')
    }
    return true
  }

  return (
    <div
      className="relative w-full overflow-hidden min-h-[450px]"
      style={{ perspective: 1000 }}
    >
      <div
        className="w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-white rounded-2xl p-6  flex flex-col"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-payva-purple-700">{title}</h3>
            {(event !== 'NEW_PURCHASE' && event !== 'APPLICATION_DECLINED') && (
              <Button
                onClick={() => setFlipped(true)}
                variant="outline"
              >
                Test
              </Button>
            )}
          </div>
          <p className="text-base text-nuetral-700 my-4 flex-1">{description}</p>
          <div className="flex-1 overflow-auto  min-h-[300px] ">
            <CodeBlock filename="payload.json" language="json" code={sample.trim()} />
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 bg-white rounded-2xl p-6  flex flex-col gap-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <Button
            onClick={() => setFlipped(false)}
            className='w-fit self-end'
            variant={'outline'}
          >
            Back
          </Button>
          <div className="space-y-4">
            {(event === 'PAYMENT_SUCCESS' || event === 'PAYMENT_FAILED' || event === 'PAYOUT' || event === 'CONTRACT_STATUS_CHANGE' || event === 'MERCHANT_STATUS') ? (
              <>
                {(event === 'PAYMENT_SUCCESS' || event === 'PAYMENT_FAILED' || event === 'PAYOUT' || event === 'CONTRACT_STATUS_CHANGE' ) &&<Input
                  type="text"
                  placeholder="Order ID"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full border border-nuetral-300 p-2 rounded"
                />}
                {(event === 'PAYMENT_SUCCESS' || event === 'PAYMENT_FAILED' || event === 'PAYOUT') && (
                  <Input
                    type="number"
                    placeholder="Payment Amount"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="w-full border border-nuetral-300 p-2 rounded"
                />)}

                {(event === 'MERCHANT_STATUS') && (
                  <>
                  <Input
                    type="text"
                    placeholder="Merchant ID"
                    value={merchantId}
                    onChange={(e) => setMerchantId(e.target.value)}
                    className="w-full border border-nuetral-300 p-2 rounded"
                  />
                  <Select
                    value={status}
                    onValueChange={(value) => setStatus(value)}
                  >
                    <SelectTrigger className="w-full border border-nuetral-300 p-2 rounded">
                      <SelectValue placeholder="Select Merchant Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="APPROVED">Approved</SelectItem>
                      <SelectItem value="SUSPENDED">Suspended</SelectItem>
                      <SelectItem value="DECLINED">Declined</SelectItem>
                      <SelectItem value="APPLICATION_STARTED">Application Started</SelectItem>
                      <SelectItem value="APPLICATION_SUBMITTED">Application Submitted</SelectItem>
                    </SelectContent>
                  </Select> 
                  </>
                )}

                { event === 'CONTRACT_STATUS_CHANGE' && (
                  <Select
                    value={status}
                    onValueChange={(value) => setStatus(value)}
                  >
                    <SelectTrigger className="w-full border border-nuetral-300 p-2 rounded">
                      <SelectValue placeholder="Select Contract Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ACTIVE">Active</SelectItem>
                      <SelectItem value="ACTIVE_MODIFIED_PAYMENT">Active Modified Payment</SelectItem>
                      <SelectItem value="CANCELED">Canceled</SelectItem>
                      <SelectItem value="CHARGEBACK">Chargeback</SelectItem>
                      <SelectItem value="DEFAULTED">Defaulted</SelectItem>
                      <SelectItem value="DECLINED">Declined</SelectItem>
                      <SelectItem value="DUPLICATE">Duplicate</SelectItem>
                      <SelectItem value="FAILED_PAYMENT">Failed Payment</SelectItem>
                      <SelectItem value="IN_COLLECTIONS">In Collections</SelectItem>
                      <SelectItem value="IN_COLLECTIONS_PAUSED_PAYMENT">In Collections Paused Payment</SelectItem>
                      <SelectItem value="IN_COLLECTIONS_PENDING_PAYMENT">In Collections Pending Payment</SelectItem>
                      <SelectItem value="PAID">Paid</SelectItem>
                      <SelectItem value="REQUESTING_CANCELLATION">Requesting Cancellation</SelectItem>
                      <SelectItem value="UNKNOWN">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                )}

                <MockWebhookButton
                  webhookType={event as PlatformWebhooksType}
                  disabled={hasRequiredFields()}
                  label="Trigger"
                  orderId={orderId === '' ? undefined : orderId}
                  paymentAmount={paymentAmount}
                  status={status}
                  merchantId={merchantId}
                />
              </>
            ) : (
              <MockWebhookButton webhookType={event as PlatformWebhooksType} label={`Send ${title}`} />
            )}
          </div>
          
        </div>
      </div>
    </div>
  )
}

// Main integration doc
const Integration: React.FC = () => {
  useScrollToHash()
  const sdkRef = useRef<any>(null)
  const { token, setToken, clearToken } = useApiToken()
  
  return (
    <article className="mx-auto py-12 px-4 max-w-5xl">
      {/* Intro */}
      <section id="intro" className="mb-16">
        <h1 className="text-4xl font-bold text-payva-purple-900 mb-4">👋 Welcome!</h1>
        <p className="text-lg text-nuetral-700 mb-6">
          We&apos;re rolling out our integrations. If you have questions or need custom
          support,{' '}
          <a
            href="mailto:support@payva.com"
            className="text-payva-purple-600 hover:text-payva-purple-500 font-medium"
          >
            reach out to us
          </a>
          .
        </p>
        <h2 className="text-3xl font-semibold text-payva-purple-800 mb-4">Overview</h2>
        <Image
          src="/workflow.png"
          alt="Integration workflow"
          width={800}
          height={600}
          className="rounded-lg  mx-auto"
        />
      </section>

      {/* Create Checkout */}
      <section id="create-checkout" className="mb-16">
        <h2 className="text-3xl font-semibold text-payva-purple-800 mb-4">Create a Checkout Token</h2>
        <p className="text-base text-nuetral-700 mb-6">
          On your backend, generate a unique checkout token per order. Pass that token
          into our SDK to spin up the hosted checkout UI.
        </p>
        <h3 className="text-xl font-medium text-payva-purple-700 mb-2">Endpoint</h3>
        <CodeBlock filename="POST /checkout/create" language="bash" code="POST /checkout/create" />
        <h3 className="text-xl font-medium text-payva-purple-700 mt-6 mb-2">Request Example</h3>
        <CodeBlock
            filename="Request Example (cURL)"
            language="bash"
            code={`curl -X POST https://api.sandbox.payva.com/checkout/create \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: ${token}" \\
  -d '{
    "merchantId": "merchant_67890",
    "orderId": "order_12345", /* External platform order ID, should be dependant on checkout amount */
    "customerDetails": {
      "firstName": "test",
      "lastName": "test",
      "email": "test@orp.ca"
    },
    "salesTax": "400.00",
    "amount": "9500.00", /* Total amount before sales tax */
    "redirectUrl": "https://google.com",
    "platformProducts": [
      {
    "productName": "Test Product",
    "price": "9000"
      },
      {
    "productName": "Test Product - Add On",
    "price": "500"
      }
    ]
  }'`}
          />
        <h3 className="text-xl font-medium text-payva-purple-700 mt-6 mb-2">Sample Response</h3>
        <CodeBlock
          filename="response.json"
          language="json"
          code={`{
  "id": "12345",
  "merchantId": "merchant_67890",
  "checkoutUrl": "https://dashboard.sandbox.payva.com/checkout/12345",
  "platformOrderId": "order_12345",
  "products": [ /* ... */ ],
  "amount": "9500.00",
  "salesTax": "400.00",
  "redirectUrl": "https://your.site/complete",
  "mode": "dark"
}`}
        />
      </section>

      {/* SDK Setup */}
      <section id="javascript-sdk" className="mb-16">
        <h2 className="text-3xl font-semibold text-payva-purple-800 mb-4">JavaScript SDK</h2>
        <p className="text-base text-nuetral-700 mb-6">
          A lightweight client library that opens the Payva checkout in a modal iframe
          or popup—no heavy deps, just event hooks.
        </p>
        <h3 className="text-xl font-medium text-payva-purple-700 mb-2">Include the SDK</h3>
        <CodeBlock
          filename="index.html"
          language="html"
          code={`<script src="https://checkout-sdk.payva.com/payva-sdk.min.js"></script>`}
        />
        <h3 className="text-xl font-medium text-payva-purple-700 mt-6 mb-2">Initialize &amp; Listen</h3>
        <CodeBlock
          filename="app.tsx"
          language="tsx"
          code={`import { useEffect, useRef } from 'react';
import Payva from '@payva/payva-js-sdk';

export default function App() {
  const sdk = useRef<Payva>();

  useEffect(() => {
    if (!sdk.current) {
      sdk.current = new Payva();
      sdk.current.on('checkoutSuccess', () => alert('✅ Success'));
      sdk.current.on('checkoutFailure', () => alert('❌ Failed'));
      sdk.current.on('checkoutClose', () => alert('✖️ Closed'));
    }
  }, []);

  return <div>Your app markup here</div>;
}`}
        />
      </section>

      {/* Trigger Checkout */}
      <section id="trigger-checkout" className="mb-16">
        <h2 className="text-3xl font-semibold text-payva-purple-800 mb-4">Trigger a Checkout</h2>
        <p className="text-base text-nuetral-700 mb-6">
          Build your order object and call{' '}
          <code className="bg-nuetral-100 px-1 rounded text-payva-purple-700">
            sdk.current.initiateCheckout(order)
          </code>
          .
        </p>
        <CodeBlock
          filename="handleCheckout.tsx"
          language="tsx"
          code={`const handleCheckout = () => {
  const checkoutToken = { ... } // Get this from your backend;
  sdk.current?.initiateCheckout(order);
};`}
        />
      </section>

      {/* Webhooks */}
      <section id="webhooks" className="mb-16">
        <h2 className="text-3xl font-semibold text-payva-purple-800 mb-4">Handle Webhooks</h2>
        <p className="text-base text-nuetral-700 mb-6">
          Webhooks let you react in real-time to key events. Configure your endpoint to receive:
        </p>

        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {WEBHOOKS.map((w) => (
            <WebhookCard
              key={w.event}
              title={w.title}
              event={w.event}
              description={w.description}
              sample={w.sample}
            />
          ))}
        </div>
      </section>
    </article>
  )
}

export default Integration