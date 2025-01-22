import { BudgetReturnType, SelectDateType } from '@/hooks/use-weekday-select'
import { countAllDatesInMonth, countDaysOfWeek } from './date'

export const countBySelectDateType = (
  type: SelectDateType,
  value: any,
  year: number,
  month: number
) => {
  switch (type) {
    case 'every-day':
      return countAllDatesInMonth(year, month)
    case 'every-week':
      return countDaysOfWeek(year, month, value)
    case 'every-month':
      return 1
  }
}

export const calculateExpenditrue = (
  data: BudgetReturnType,
  date: Date = new Date()
) => {
  const dateCount = countBySelectDateType(
    data.type,
    data.value,
    date.getFullYear(),
    date.getMonth() + 1
  )

  return dateCount * data.currency
}
