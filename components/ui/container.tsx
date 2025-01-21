import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

const Container = (props: ComponentProps<'div'>) => {
  const { className, ...other } = props
  return (
    <div className={cn('p-4', className)} {...other} />
  )
}

export {
  Container
}