'use client'

import React from 'react'
import { useExchangeRate } from '@/context/ExchangeRateContext'
import { Skeleton } from './ui/skeleton'

const ExchangeRateDisplay = () => {
  const { exchangeRates, loading, error } = useExchangeRate()

  if (loading) return (<Loading />)
  if (error) return <p>{error}</p>

  return (
    <div className='card-inline'>
      <h2 className='card-inline-title'>환율 정보 (USD 기준)</h2>
      {exchangeRates && (
        <div className='card-inline-content'>{exchangeRates.text}</div>
      )}
    </div>
  )
}

const Loading = () => {
  return (
    <div className='p-4 border rounded-md bg-white space-y-2'>
      <Skeleton className='w-full h-[20px]' />
      <Skeleton className='w-full h-[30px]' />
    </div>
  )
}

export default ExchangeRateDisplay
