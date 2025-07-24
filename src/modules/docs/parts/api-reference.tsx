// parts/api-reference.tsx
import React, { useEffect } from 'react';
import { CodeBlock } from './code-block';
import { useScrollToHash } from './integration';
import { useApiToken } from './api-token-context';

const CheckoutAPIReference: React.FC = () => {
  useScrollToHash();

  const {token} = useApiToken();

  return (
    <article className="mx-auto py-12 px-4 max-w-5xl">
      {/* API Reference Intro */}
      <section id="api-reference" className="mb-16">
        <h1 className="text-4xl font-bold text-payva-purple-900 mb-4">🛠️ API Reference</h1>
        <p className="text-lg text-nuetral-700">
          Explore our REST endpoints for programmatic control over checkouts and platform webhooks.
        </p>
      </section>

      {/* Checkout API */}
      <section id="checkout-api" className="mb-16">
        <h2 className="text-3xl font-semibold text-payva-purple-800 mb-4">Checkout API</h2>

        <h3 className="text-xl font-medium text-payva-purple-700 mb-2">POST /checkout/create</h3>
        <p className="text-base text-nuetral-700 mb-2">Initialize a new checkout and receive a token.</p>
        <CodeBlock
          filename="POST /checkout/create"
          language="bash"
          code={`curl -X POST https://api.sandbox.payva.com/checkout/create \
  -H "Content-Type: application/json" \
  -H "x-api-key: ${token}" \
  -d '{ /* InitCheckoutArgs payload */ }'`}
        />

        <h3 className="text-xl font-medium text-payva-purple-700 mt-6 mb-2">POST /checkout/order/:orderId/cancel</h3>
        <p className="text-base text-nuetral-700 mb-2">Cancel a checkout by order ID, with optional refund.</p>
        <CodeBlock
          filename="POST /checkout/order/:orderId/cancel"
          language="bash"
          code={`curl -X POST https://api.sandbox.payva.com/checkout/order/12345/cancel \
  -H "Content-Type: application/json" \
  -H "x-api-key: ${token}" \
  -d '{ "refund": true, "refundAmount": 100, "reason": "Customer request" }'`}
        />

        <h3 className="text-xl font-medium text-payva-purple-700 mt-6 mb-2">GET /checkout/order/:orderId</h3>
        <p className="text-base text-nuetral-700 mb-2">Retrieve checkout details by order ID.</p>
        <CodeBlock
          filename="GET /checkout/order/:orderId"
          language="bash"
          code={`curl -X GET https://api.sandbox.payva.com/checkout/order/12345 \
  -H "x-api-key: ${token}"`}
        />

        <h3 className="text-xl font-medium text-payva-purple-700 mt-6 mb-2">GET /checkout/:checkoutId</h3>
        <p className="text-base text-nuetral-700 mb-2">Retrieve checkout details by checkout ID.</p>
        <CodeBlock
          filename="GET /checkout/:checkoutId"
          language="bash"
          code={`curl -X GET https://api.sandbox.payva.com/checkout/67890 \
  -H "x-api-key: ${token}"`}
        />
      </section>

      {/* Platform Webhooks API */}
      <section id="webhooks-api" className="mb-16">
        <h2 className="text-3xl font-semibold text-payva-purple-800 mb-4">Platform Webhooks API</h2>

        <h3 className="text-xl font-medium text-payva-purple-700 mb-2">GET /checkout/platform/webhooks</h3>
        <p className="text-base text-nuetral-700 mb-2">List configured webhooks for your platform.</p>
        <CodeBlock
          filename="GET /checkout/platform/webhooks"
          language="bash"
          code={`curl -X GET https://api.sandbox.payva.com/checkout/platform/webhooks \
  -H "x-api-key: ${token}"`}
        />

        <h3 className="text-xl font-medium text-payva-purple-700 mt-6 mb-2">POST /checkout/platform/webhooks</h3>
        <p className="text-base text-nuetral-700 mb-2">Create or update a platform webhook.</p>
        <CodeBlock
          filename="POST /checkout/platform/webhooks"
          language="bash"
          code={`curl -X POST https://api.sandbox.payva.com/checkout/platform/webhooks \
  -H "Content-Type: application/json" \
  -H "x-api-key: ${token}" \
  -d '{ "url": "https://your.site/webhook-endpoint", "type": "PAYMENT_SUCCESS" }'`}
        />

        {/* <h3 className="text-xl font-medium text-payva-purple-700 mt-6 mb-2">POST /checkout/platform/webhooks/trigger</h3>
        <p className="text-base text-nuetral-700 mb-2">Manually trigger all configured webhooks.</p>
        <CodeBlock
          filename="POST /checkout/platform/webhooks/trigger"
          language="bash"
          code={`curl -X POST https://api.sandbox.payva.com/checkout/platform/webhooks/trigger \
  -H "x-api-key: ${token}"`}
        /> */}
      </section>
    </article>
  );
};

export default CheckoutAPIReference;