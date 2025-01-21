import { SelectDateType } from '@/hooks/use-weekday-select'

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
