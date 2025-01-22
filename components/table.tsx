import { BudgetReturnType } from "@/hooks/use-weekday-select"
import { getDateTypeLabel, getDayOfWeekText } from "@/lib/label"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"

interface FixExpenseTableProps {
  data: BudgetReturnType[]
  total: number
  caption?: string
}
export const FixExpenseTable = ({ data, total, caption }: FixExpenseTableProps) => {
  return (
    <Table className="border-y">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[140px]">날짜</TableHead>
          <TableHead>메모</TableHead>
          <TableHead className="w-[100px] text-right">원</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((payment, idx) => (
          <TableRow key={payment.id + idx} >
            <TableCell className="font-medium space-x-1 text-nowrap text-ellipsis">
              <span>{getDateTypeLabel(payment.type)}</span>
              <span>
                {
                  payment.type === 'every-week' ?
                    getDayOfWeekText(payment.value) :
                    payment?.value?.toString()
                }
                {payment.type === 'every-month' && '일'}
              </span>
            </TableCell>
            <TableCell className="text-ellipsis">{payment?.memo ?? ''}</TableCell>
            <TableCell className="text-right">{payment.currency.toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell colSpan={2} className="font-semibold text-right">{total.toLocaleString()}</TableCell>
        </TableRow>
      </TableFooter>
      {caption && <TableCaption>{caption}</TableCaption>}
    </Table>
  )
}