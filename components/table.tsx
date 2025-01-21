import { ReturnType } from "@/hooks/use-weekday-select"
import { getDateTypeLabel } from "@/lib/label"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"


interface FixExpenditrueTableProps {
  data: ReturnType[]
  total: number
}
export const FixExpenditrueTable = ({ data, total }: FixExpenditrueTableProps) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>구분</TableHead>
          <TableHead className="text-right">원</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((payment, idx) => (
          <TableRow key={payment.id + idx}>
            <TableCell className="font-medium">{getDateTypeLabel(payment.type)}</TableCell>
            <TableCell className="text-right">{payment.currency.toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-right">{total.toLocaleString()}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}