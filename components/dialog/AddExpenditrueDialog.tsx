'use client'

import useCurrency from "@/hooks/use-currency"
import useWeekdaySelect, { ReturnType } from "@/hooks/use-weekday-select"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface Props {
  onSubmit: (data: ReturnType) => void
}

const AddExpenditrueDialog = (props: Props) => {
  const { currency, handleChangeValue } = useCurrency()
  const { selected, onChangeSelected, getValue, renderSelector } = useWeekdaySelect()

  const handleSubmit = () => {
    const submitValue: ReturnType = { id: 'PAY', type: selected, currency: currency, value: getValue() } as ReturnType
    props.onSubmit(submitValue)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>추가</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>정기지출 추가하기</DialogTitle>
          <DialogDescription>지출을 입력해서 지출을 관리해보세요</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-1">
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
          <div className="col-span-3">{renderSelector()}</div>
          <div className="col-span-4">
            <Input
              type="text"
              className="text-right"
              placeholder="지출금액을 입력해주세요"
              value={currency.toLocaleString('ko-KR')}
              onChange={(event) => handleChangeValue(event.target.value)}
            />
          </div>
          {/* <div className="col-span-4">
            <Input type="text" placeholder="비고" />
          </div> */}
        </div>
        <DialogFooter className="max-md:gap-2">
          <Button onClick={handleSubmit}>저장</Button>
          <DialogClose asChild>
            <Button variant='outline'>닫기</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default AddExpenditrueDialog