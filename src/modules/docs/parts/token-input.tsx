// TokenInput.tsx
import React, { useEffect, useState } from 'react'

import { useApiToken } from './api-token-context'

const TokenInput: React.FC = () => {
  const { token, setToken, orderId, setOrderId, paymentAmount, setPaymentAmount } = useApiToken()
  const [inputValue, setInputValue] = useState<string>(token || '')
  const [inputValueOrderId, setInputValueOrderId] = useState<string>(orderId || '')
  const [inputValuePaymentAmount, setInputValuePaymentAmount] = useState<string>(paymentAmount?.toString() || '')

  useEffect(() => {
    setInputValue(token || '')
  }, [token])

  useEffect(() => {
    setInputValueOrderId(orderId || '')
  }, [orderId])

  useEffect(() => {
    setInputValuePaymentAmount(paymentAmount?.toString() || '')
  }, [paymentAmount])

  const handleSaveToken = () => {
    setToken(inputValue.trim() || null)
  }
  const handleClearToken = () => {
    setToken(null)
  }

  const handleSaveOrderId = () => {
    setOrderId?.(inputValueOrderId.trim() || null)
  }
  const handleClearOrderId = () => {
    setOrderId ? setOrderId('') : null
  }

  const handleSavePaymentAmount = () => {
    setPaymentAmount?.(inputValuePaymentAmount)
  }
  const handleClearPaymentAmount = () => {
    setPaymentAmount ? setPaymentAmount(null) : null
  }

  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter API Token"
          className="rounded border px-2 py-1"
        />
        {!token && (
          <button onClick={handleSaveToken} className="rounded bg-blue-500 px-3 py-1 text-white">
            Save API Key
          </button>
        )}
        {token && (
          <button onClick={handleClearToken} className="rounded bg-red-500 px-3 py-1 text-white">
            Clear Token
          </button>
        )}
      </div>
      <div>
        <input
          type="text"
          value={inputValueOrderId}
          onChange={(e) => setInputValueOrderId(e.target.value)}
          placeholder="Enter Your Order ID"
          className="rounded border px-2 py-1"
        />
        {!orderId && (
          <button onClick={handleSaveOrderId} className="rounded bg-blue-500 px-3 py-1 text-white">
            Save Order ID
          </button>
        )}
        {orderId && (
          <button onClick={handleClearOrderId} className="rounded bg-red-500 px-3 py-1 text-white">
            Clear Order ID
          </button>
        )}
      </div>
      <div>
        <input
          type="text"
          value={inputValuePaymentAmount}
          onChange={(e) => setInputValuePaymentAmount(e.target.value)}
          placeholder="Enter Your Payment Amount"
          className="rounded border px-2 py-1"
        />
        {!paymentAmount && (
          <button onClick={handleSavePaymentAmount} className="rounded bg-blue-500 px-3 py-1 text-white">
            Save Payment Amount
          </button>
        )}
        {paymentAmount && (
          <button onClick={handleClearPaymentAmount} className="rounded bg-red-500 px-3 py-1 text-white">
            Clear Payment Amount
          </button>
        )}
      </div>
    </div>
  )
}

export default TokenInput
