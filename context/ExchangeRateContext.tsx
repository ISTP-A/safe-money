'use client'

import { getExchangeRate } from '@/services/exchange-rate/api'
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'

const t = {
  "pkid": 141,
  "count": 1,
  "country": [
    {
      "value": "1",
      "subValue": "1 달러",
      "currencyUnit": "달러"
    },
    {
      "value": "1,431.80",
      "subValue": "1,431.80 원",
      "currencyUnit": "원"
    }
  ],
  "calculatorMessage": ""
}

interface ExchangeRateValueType {
  value: string
  text: string
  unit: string
}


interface ExchangeRateContextType {
  exchangeRates: ExchangeRateValueType | null
  loading: boolean
  error: string | null
}

export const ExchangeRateContext = createContext<ExchangeRateContextType | undefined>(undefined)

export const ExchangeRateProvider = ({ children }: PropsWithChildren) => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRateValueType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getExchangeRate()
      .then(data => {
        const { value, subValue, currencyUnit } = data
        const context: ExchangeRateValueType = {
          value: value,
          text: subValue,
          unit: currencyUnit
        }
        setExchangeRates(context)
      })
      .catch(error => {
        setError('환율 데이터를 가져오는 데 실패했습니다.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <ExchangeRateContext.Provider value={{ exchangeRates, loading, error }}>
      {children}
    </ExchangeRateContext.Provider>
  )
}

export const useExchangeRate = () => {
  const context = useContext(ExchangeRateContext)
  if (!context) {
    throw new Error('useExchangeRate는 ExchangeRateProvider 내부에서 사용해야 합니다.')
  }
  return context
}