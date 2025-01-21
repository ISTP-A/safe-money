import { startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns'

export function countDaysOfWeek(
  year: number,
  month: number,
  targetDays: number[]
) {
  const start = startOfMonth(new Date(year, month - 1))
  const end = endOfMonth(start)

  const allDays = eachDayOfInterval({ start, end })

  let count = 0
  targetDays.forEach((target) => {
    count += allDays.filter((date) => getDay(date) === Number(target)).length
  })

  return count
}

export function countAllDatesInMonth(year: number, month: number) {
  const start = startOfMonth(new Date(year, month - 1))
  const end = endOfMonth(start)

  return eachDayOfInterval({ start, end }).length
}
