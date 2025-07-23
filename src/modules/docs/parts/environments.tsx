import React, { useEffect } from 'react'

import { CodeBlock } from './code-block'

const Environments: React.FC = () => {
  useEffect(() => {
    // Scroll to the element corresponding to the URL hash (if any)
    const hash = window.location.hash
    if (hash) {
      const elementId = hash.substring(1) // Remove the '#' symbol
      const element = document.getElementById(elementId)
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 16
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <div>
      {/* Overview Section */}
      <div id="intro">
        <h1 className="text-3xl font-bold">Environments</h1>
        <p className="text-md mt-2">
          Our platform provides separate environments for testing and production. Use the Sandbox environment for all
          development and testing efforts, and switch to the Production environment when you are ready to handle real
          transactions.
        </p>
      </div>

      {/* Sandbox Environment Section */}
      <div id="sandbox" className="mt-12">
        <h2 className="text-3xl font-bold">Sandbox Environment</h2>
        <p className="text-md mt-2">
          Use the Sandbox environment for testing and development. This environment uses test data and does not process
          live transactions.
        </p>

        <h3 className="mt-6 text-2xl font-bold">Checkout URL</h3>
        <CodeBlock filename="Payva sandbox checkout url" language="bash" code={`https://sandbox.payva.com`} />

        <h3 className="mt-6 text-2xl font-bold">API Base URL</h3>
        <CodeBlock filename="Payva sandbox api url" language="bash" code={`https://api.sandbox.payva.com`} />
      </div>

      {/* Production Environment Section */}
      <div id="production" className="mt-12">
        <h2 className="text-3xl font-bold">Production Environment</h2>
        <p className="text-md mt-2">
          When you are ready to launch, use the Production environment to handle live transactions. Ensure that you have
          completed thorough testing in the Sandbox environment prior to switching to Production.
        </p>

        <h3 className="mt-6 text-2xl font-bold">Checkout URL</h3>
        <CodeBlock filename="Payva prod checkout url" language="bash" code={`https://app.payva.com`} />

        <h3 className="mt-6 text-2xl font-bold">API Base URL</h3>
        <CodeBlock filename="Payva prod api url" language="bash" code={`https://api.app.payva.com`} />
      </div>
    </div>
  )
}

export default Environments
