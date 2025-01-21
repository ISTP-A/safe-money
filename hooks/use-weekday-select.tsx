import { DatePicker } from "@/components/ui/datepicker"
import WeekdaySelector from "@/components/weekday-selector"
import { JSX, useState } from "react"

export type SelectDateType = 'every-day' | 'every-week' | 'every-month'

export type ReturnType =
  | { id: string, type: 'every-day', currency: number, value: null, }
  | { id: string, type: 'every-week', currency: number, value: string[] }
  | { id: string, type: 'every-month', currency: number, value: Date | undefined }

const useWeekdaySelect = () => {
  const [selected, setSelected] = useState<SelectDateType>('every-week')
  const [weekdays, setWeekdays] = useState<string[]>([])
  const [date, setDate] = useState<Date | undefined>()

  const onChangeSelected = (value: SelectDateType) => {
    setSelected(value)
  }

  const onChangeWeekdays = (value: string[]) => {
    setWeekdays(value)
  }

  const getValue = () => {
    switch (selected) {
      case 'every-day':
        return null
      case 'every-week':
        return weekdays
      case 'every-month':
        return date
    }
  }

  const renderSelector = (): JSX.Element | null => {
    switch (selected) {
      case 'every-day':
        return null
      case 'every-week':
        return <WeekdaySelector value={weekdays} setValueChange={onChangeWeekdays} />
      case 'every-month':
        return <DatePicker date={date} setDate={setDate} />
    }
  }

  return {
    selected,
    onChangeSelected,
    getValue,
    renderSelector,
  }
}

export default useWeekdaySelect