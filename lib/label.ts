import { SelectDateType } from '@/hooks/use-weekday-select'
import { getKoreanDay } from './date'

export const getDateTypeLabel = (type: SelectDateType) => {
  switch (type) {
    case 'every-day':
      return '매일'
    case 'every-week':
      return '매주'
    case 'every-month':
      return '매월'
  }
}

export const getDayOfWeekText = (data: string[]) => {
  if (data.length === 7) {
    return '매일'
  }

  return data
    .sort((a, b) => Number(a) - Number(b))
    .map((day) => getKoreanDay(parseInt(day)))
    .join()
}
