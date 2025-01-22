'use client'

import AddExpenseDialog from "@/components/dialog/AddExpenseDialog"
import ExchangeRateDisplay from "@/components/exchange-rate-display"
import Grid from "@/components/grid"
import { FixExpenseTable } from "@/components/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { BudgetReturnType } from "@/hooks/use-weekday-select"
import { calculateExpenditrue } from "@/lib/calculate"
import { useMemo, useState } from "react"

const Page = () => {
  return (
    <Container className="grid responsive-grid grid-cols-12 gap-2">
      <Grid className="space-y-2" col={8}>
        <CardFixRevenue />
        <CardFixExpenditrue />
      </Grid>
      <Grid className="space-y-2" col={4}>
        <ExchangeRateDisplay />
        <CardIncomeOfMonth />
      </Grid>
    </Container>
  )
}

const CardIncomeOfMonth = () => {
  const num = 1000000
  return (
    <div className='card-inline'>
      <div className='card-inline-title'>내 한달 수익</div>
      <span className="card-inline-content">{num.toLocaleString()} 원</span>
    </div>
  )
}

const CardFixExpenditrue = () => {
  const [expenseList, setExpenseList] = useState<BudgetReturnType[]>([])

  const handleSubmit = (data: BudgetReturnType) => {
    setExpenseList(prev => [...prev, data])
  }

  const expense = useMemo(() => (
    expenseList
      .map(list => calculateExpenditrue(list))
      .reduce((total, num) => total + num, 0)
  ), [expenseList])

  return (
    <Card>
      <CardHeader className="flex flex-row items-end">
        <div className="flex-1">
          <CardTitle>고정지출</CardTitle>
          <CardDescription>이번달에 {expense.toLocaleString()}원을 사용해요</CardDescription>
        </div>
        <AddExpenseDialog onSubmit={handleSubmit} />
      </CardHeader>
      <CardContent>
        <FixExpenseTable
          data={expenseList}
          total={expense}
        />
      </CardContent>
    </Card>
  )
}

const CardFixRevenue = () => {
  const [expenseList, setExpenseList] = useState<BudgetReturnType[]>([])

  const handleSubmit = (data: BudgetReturnType) => {
    setExpenseList(prev => [...prev, data])
  }

  const expense = useMemo(() => (
    expenseList
      .map(list => calculateExpenditrue(list))
      .reduce((total, num) => total + num, 0)
  ), [expenseList])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <CardTitle>고정수익</CardTitle>
          <CardDescription>이번달에 {expense.toLocaleString()}원을 벌어요</CardDescription>
        </div>
        <AddExpenseDialog onSubmit={handleSubmit} />
      </CardHeader>
      <CardContent>
        <FixExpenseTable
          data={expenseList}
          total={expense}
        />
      </CardContent>
    </Card>
  )
}

export default Page