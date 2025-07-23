import * as React from 'react'
import {
  addDays,
  addMonths,
  differenceInDays,
  endOfMonth,
  format,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isSameMonth,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns'
import { type DateRange } from 'react-day-picker'
import { MdChevronLeft, MdChevronRight, MdClose, MdDateRange } from 'react-icons/md'

import { cn } from '@/lib/utils'
import { Button } from '@/modules/design-system/components/button'
import { Calendar } from '@/modules/design-system/components/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/modules/design-system/components/popover'

interface DatePickerWithRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  date: DateRange
  onDateChange: (range: DateRange | undefined) => void
}

const DatePickerWithRange = ({ date, onDateChange, className }: DatePickerWithRangeProps) => {
  const [calendarMonth, setCalendarMonth] = React.useState<Date>(date.from || new Date())

  const isFullMonthRange = React.useMemo(() => {
    if (!date.from || !date.to) return false
    return isFirstDayOfMonth(date.from) && isLastDayOfMonth(date.to) && isSameMonth(date.from, date.to)
  }, [date])

  const shiftDateRange = (direction: 'forward' | 'backward') => {
    if (date.from && date.to) {
      let newFrom: Date
      let newTo: Date

      if (isFullMonthRange) {
        // If it's a full month range, shift by one month
        if (direction === 'forward') {
          newFrom = startOfMonth(addMonths(date.from, 1))
          newTo = endOfMonth(addMonths(date.to, 1))
        } else {
          newFrom = startOfMonth(subMonths(date.from, 1))
          newTo = endOfMonth(subMonths(date.to, 1))
        }
      } else {
        // If it's a custom range, shift by the same number of days
        const rangeDays = differenceInDays(date.to, date.from)
        const shiftDays = rangeDays + 1 // Include both start and end dates

        if (direction === 'forward') {
          newFrom = addDays(date.from, shiftDays)
          newTo = addDays(date.to, shiftDays)
        } else {
          newFrom = subDays(date.from, shiftDays)
          newTo = subDays(date.to, shiftDays)
        }
      }

      onDateChange({ from: newFrom, to: newTo })
      setCalendarMonth(newFrom) // Update calendar view to new range start
    }
  }

  const isEntireCurrentMonth = React.useMemo(() => {
    if (!date.from || !date.to) return false
    const today = new Date()
    const currentMonthStart = startOfMonth(today)
    const currentMonthEnd = endOfMonth(today)
    return (
      isSameMonth(date.from, today) &&
      isSameMonth(date.to, today) &&
      isFirstDayOfMonth(date.from) &&
      isLastDayOfMonth(date.to) &&
      date.from.getTime() === currentMonthStart.getTime() &&
      date.to.getTime() === currentMonthEnd.getTime()
    )
  }, [date])

  const resetToCurrentMonth = () => {
    const today = new Date()
    const newRange = {
      from: startOfMonth(today),
      to: endOfMonth(today),
    }
    onDateChange(newRange)
    setCalendarMonth(today)
  }

  const handleSelect = (newDate: DateRange | undefined) => {
    if (newDate?.from && newDate?.to) {
      const daysDifference = differenceInDays(newDate.to, newDate.from)
      if (daysDifference > 30) {
        // If selected range is more than 31 days, adjust the end date
        newDate.to = addDays(newDate.from, 30)
      }
    }
    onDateChange(newDate)
    if (newDate?.from) {
      setCalendarMonth(newDate.from)
    }
  }

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-2 lg:justify-start',
        className
      )}
    >
      {/* For Desktop and Tablet */}
      <div className="hidden w-full sm:flex sm:items-center sm:justify-start sm:gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => shiftDateRange('backward')}
          disabled={!date.from || !date.to}
        >
          <MdChevronLeft className="size-4" />
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn('justify-start text-left font-normal', !date.from && 'text-muted-foreground')}
            >
              <MdDateRange className="mr-2 size-4" />
              {date.from && date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                <span>Select date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={calendarMonth}
              selected={date}
              onSelect={handleSelect}
              numberOfMonths={2}
              fromDate={new Date(2000, 0, 1)} // Allow selection from year 2000
              toDate={new Date(2100, 11, 31)} // Allow selection up to year 2100
            />
          </PopoverContent>
        </Popover>

        <Button
          variant="outline"
          size="icon"
          onClick={() => shiftDateRange('forward')}
          disabled={!date.from || !date.to}
        >
          <MdChevronRight className="size-4" />
        </Button>

        {date.from && date.to && !isEntireCurrentMonth && (
          <Button variant="ghost" onClick={resetToCurrentMonth}>
            Reset <MdClose className="ml-2 size-4" />
          </Button>
        )}
      </div>

      {/* For Mobile */}
      <div className="flex w-full flex-col sm:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn('w-full justify-center text-left font-normal', !date.from && 'text-muted-foreground')}
            >
              <MdDateRange className="mr-2 size-4" />
              {date.from && date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                <span>Select date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={calendarMonth}
              selected={date}
              onSelect={handleSelect}
              numberOfMonths={2}
              fromDate={new Date(2000, 0, 1)} // Allow selection from year 2000
              toDate={new Date(2100, 11, 31)} // Allow selection up to year 2100
            />
          </PopoverContent>
        </Popover>

        <div className="mt-2 flex w-full justify-between space-x-2">
          <Button
            className="grow"
            variant="outline"
            size="icon"
            onClick={() => shiftDateRange('backward')}
            disabled={!date.from || !date.to}
          >
            <MdChevronLeft className="size-4" />
          </Button>

          <Button
            className="grow"
            variant="outline"
            size="icon"
            onClick={() => shiftDateRange('forward')}
            disabled={!date.from || !date.to}
          >
            <MdChevronRight className="size-4" />
          </Button>
        </div>

        {date.from && date.to && !isEntireCurrentMonth && (
          <Button variant="ghost" onClick={resetToCurrentMonth} className="mt-2 w-full">
            Reset <MdClose className="ml-2 size-4" />
          </Button>
        )}
      </div>
    </div>
  )
}

export { DatePickerWithRange }
