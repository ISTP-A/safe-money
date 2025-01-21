'use client'

import AddExpenditrueDialog from "@/components/dialog/AddExpenditrueDialog"
import { FixExpenditrueTable } from "@/components/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { ReturnType } from "@/hooks/use-weekday-select"
import { calculateExpenditrue, countBySelectDateType } from "@/lib/calculate"
import { useMemo, useState } from "react"

const Page = () => {
  return (
    <Container className="grid responsive-grid grid-cols-12 gap-2">
      <CardExpenditrue />
      <CardFixExpenditrue />
      <CardRevenue />
    </Container>
  )
}

const CardExpenditrue = () => {
  return (
    <Card className="responsive-grid-item col-span-8">
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="flex-1">내가 번 돈</CardTitle>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  )
}

const CardFixExpenditrue = () => {
  const [expenditrueList, setExpenditrueList] = useState<ReturnType[]>([])

  const handleSubmit = (data: ReturnType) => {
    setExpenditrueList(prev => [...prev, data])
  }

  const expenditrue = useMemo(() => (
    expenditrueList
      .map(list => calculateExpenditrue(list))
      .reduce((total, num) => total + num, 0)
  ), [expenditrueList])

  return (
    <Card className="responsive-grid-item col-span-8">
      <CardHeader className="flex flex-row items-end">
        <div className="flex-1">
          <CardTitle>고정지출</CardTitle>
          <CardDescription>한달에 {expenditrue.toLocaleString()}원을 사용해요</CardDescription>
        </div>
        <AddExpenditrueDialog onSubmit={handleSubmit} />
      </CardHeader>
      <CardContent>
        <FixExpenditrueTable
          data={expenditrueList}
          total={expenditrue}
        />
      </CardContent>
    </Card>
  )
}

const CardRevenue = () => {
  return (
    <Card className="responsive-grid-item col-span-8">
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="flex-1">내가 쓸 돈</CardTitle>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  )
}

export default Page