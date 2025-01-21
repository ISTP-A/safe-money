import { useState } from "react"

const useCurrency = (initialValue?: number) => {
  const [currency, setCurrency] = useState<number>(initialValue ?? 0)
  const handleChangeValue = (value: number | string) => {
    const money = value.toString().replace(/[^0-9]/g, '')
    setCurrency(Number(money))
  }

  return {
    currency,
    handleChangeValue,
  }
}

export default useCurrency