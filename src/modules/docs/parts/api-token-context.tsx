// ApiTokenContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react'

interface ApiTokenContextType {
  token: string | null
  setToken: (token: string | null) => void
  orderId?: string | null
  setOrderId?: (orderId: string | null) => void
  paymentAmount?: string | null
  setPaymentAmount?: (paymentAmount: string | null) => void
  clearToken: () => void
}

const ApiTokenContext = createContext<ApiTokenContextType | undefined>(undefined)

export const ApiTokenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setTokenState] = useState<string | null>(null)
  const [orderId, setOrderIdState] = useState<string | null>(null)
  const [paymentAmount, setPaymentAmountState] = useState<string | null>(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('apiToken')
    if (storedToken) {
      setTokenState(storedToken)
    }

    const storedOrderId = localStorage.getItem('orderIdToken')
    if (storedOrderId) {
      setOrderIdState(storedOrderId)
    }

    const storedPaymentAmount = localStorage.getItem('paymentAmountToken')
    if (storedPaymentAmount) {
      setPaymentAmountState(storedPaymentAmount)
    }
  }, [])

  const setToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem('apiToken', newToken)
    } else {
      localStorage.removeItem('apiToken')
    }
    setTokenState(newToken)
  }

  const clearToken = () => {
    localStorage.removeItem('apiToken')
    setTokenState(null)
  }

  const setOrderId = (newOrderId: string | null) => {
    if (newOrderId) {
      localStorage.setItem('orderIdToken', newOrderId)
    } else {
      localStorage.removeItem('orderIdToken')
    }
    setOrderIdState(newOrderId)
  }

  const setPaymentAmount = (newPaymentAmount: string | null) => {
    console.log('NEW', newPaymentAmount)
    if (newPaymentAmount) {
      localStorage.setItem('paymentAmountToken', newPaymentAmount)
    } else {
      localStorage.removeItem('paymentAmountToken')
    }
    setPaymentAmountState(newPaymentAmount)
  }

  return (
    <ApiTokenContext.Provider value={{ token, setToken, orderId, setOrderId, paymentAmount, setPaymentAmount, clearToken }}>
      {children}
    </ApiTokenContext.Provider>
  )
}

export const useApiToken = (): ApiTokenContextType => {
  const context = useContext(ApiTokenContext)
  if (!context) {
    throw new Error('useApiToken must be used within an ApiTokenProvider')
  }
  return context
}
