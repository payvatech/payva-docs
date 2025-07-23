// MockWebhookButton.tsx
import React, { useState } from 'react'

import { PlatformWebhooksType, useMockWebhooksMutation } from '@/modules/api/generated/graphql'

import { useApiToken } from './api-token-context'
import { Button } from '@/modules/design-system/components/button'

interface MockWebhookButtonProps {
  webhookType: PlatformWebhooksType
  label: string
  orderId?: string
  paymentAmount?: string
  status?: string
  disabled?: boolean
}

const MockWebhookButton: React.FC<MockWebhookButtonProps> = ({ webhookType, label, orderId, paymentAmount, status, disabled }) => {
  const { token } = useApiToken()
  const [mockWebhooksMutation, { data, loading, error }] = useMockWebhooksMutation()
  if (!data) console.log('there is no data')
  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  const handleClick = () => {
    if (!token) return
    setShowSuccess(false)
    console.log('orderId', orderId, 'paymentAmount', paymentAmount)
    void mockWebhooksMutation({
      variables: { webhookType, orderId, paymentAmount, status },
      context: {
        headers: {
          'x-api-key': token,
        },
      },
    }).then((result) => {
      if (result.data) {
        setShowSuccess(true)
      }
    })
  }
  

  return (
    <div className="mt-4 flex justify-end">
      <Button
      className='flex justify-end'
        onClick={handleClick}
        disabled={!token || !disabled}
      >
        {label}
      </Button>
      {loading && <p className="mt-2 text-gray-600">Loading...</p>}
      {error && <p className="mt-2 text-red-600">Error: {error.message}</p>}
      {showSuccess && <pre className="mt-2 rounded bg-gray-100 p-2">🎉 Success!</pre>}
    </div>
  )
}

export default MockWebhookButton
