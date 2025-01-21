'use client'

import { useId } from "react"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"

const daysOfWeek = [
  { label: '일', value: 0 },
  { label: '월', value: 1 },
  { label: '화', value: 2 },
  { label: '수', value: 3 },
  { label: '목', value: 4 },
  { label: '금', value: 5 },
  { label: '토', value: 6 },
]

interface WeekdaySelectorProps {
  value: string[]
  setValueChange: (value: string[]) => void
}

const WeekdaySelector = (props: WeekdaySelectorProps) => {
  const id = useId()
  const { value: values, setValueChange } = props

  return (
    <ToggleGroup
      className="w-[276px]"
      value={values}
      onValueChange={setValueChange}
      type='multiple'
    >
      {daysOfWeek.map(({ label, value }) => (
        <ToggleGroupItem
          key={id + value}
          className={"bg-zinc-100 text-zinc-400"}
          value={value.toString()}
        >
          {label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

export default WeekdaySelector