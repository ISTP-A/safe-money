import { cn } from "@/lib/utils"
import { ComponentProps, PropsWithChildren } from "react"

const gridColSpan = [
  '',
  'col-span-1',
  'col-span-2',
  'col-span-3',
  'col-span-4',
  'col-span-5',
  'col-span-6',
  'col-span-7',
  'col-span-8',
  'col-span-9',
  'col-span-10',
  'col-span-11',
  'col-span-12',
]

const gridRowSpan = [
  '',
  'row-span-1',
  'row-span-2',
  'row-span-3',
  'row-span-4',
  'row-span-5',
  'row-span-6',
  'row-span-7',
  'row-span-8',
  'row-span-9',
  'row-span-10',
  'row-span-11',
  'row-span-12',
]
interface GridProps extends PropsWithChildren, ComponentProps<'div'> {
  col?: number
  row?: number
}
const Grid = ({ col = 1, row = 1, className, children, ...props }: GridProps) => {
  return (
    <div className={cn('responsive-grid-item', gridRowSpan[row], gridColSpan[col], className)} {...props}>{children}</div>
  )
}

export default Grid