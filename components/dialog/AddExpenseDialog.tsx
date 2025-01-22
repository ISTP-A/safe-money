'use client'

import useCurrency from "@/hooks/use-currency"
import useWeekdaySelect, { BudgetReturnType } from "@/hooks/use-weekday-select"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useRef } from "react"

interface Props {
  onSubmit: (data: BudgetReturnType) => void
}

const AddExpenseDialog = (props: Props) => {
  const memoRef = useRef<HTMLInputElement>(null)
  const { currency, handleChangeValue } = useCurrency()
  const { selected, onChangeSelected, getValue, renderSelector } = useWeekdaySelect()

  const handleSubmit = () => {
    const submitValue: BudgetReturnType = {
      id: 'PAY',
      type: selected,
      currency: currency,
      value: getValue(),
      memo: memoRef?.current?.value
    } as BudgetReturnType

    props.onSubmit(submitValue)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>추가</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>추가하기</DialogTitle>
          <DialogDescription>고정으로 나가는 돈을 관리해보세요</DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-8 gap-2">
          <div className="md:col-span-2">
            <Select value={selected} onValueChange={onChangeSelected}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder='선택' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='every-month'>매월</SelectItem>
                <SelectItem value='every-week'>매주</SelectItem>
                <SelectItem value='every-day'>매일</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-6">{renderSelector()}</div>

          <div className="md:col-span-8">
            <Input
              type="text"
              className="text-right"
              placeholder="금액을 입력해주세요"
              value={currency.toLocaleString('ko-KR')}
              onChange={(event) => handleChangeValue(event.target.value)}
            />
          </div>
          <div className="md:col-span-8">
            <Input
              ref={memoRef}
              type="text"
              placeholder="메모를 입력해주세요"
            />
          </div>
        </div>
        <DialogFooter className="max-md:gap-2">
          <DialogClose asChild>
            <Button onClick={handleSubmit}>저장</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant='outline'>닫기</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default AddExpenseDialog