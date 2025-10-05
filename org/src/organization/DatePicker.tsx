"use client"

import * as React from "react"
import { CalendarDays, ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect } from "react"

interface DatePickerProps{
    name:string
    alias: string
    setFormDate: (name:string,date:Date)=>void
}

export function DatePicker({name,setFormDate,alias}:DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  useEffect(()=>{
        
    setFormDate(alias,date!)

  },[date])

  return (
    <div className="flex flex-col w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-3/2justify-between font-normal"
          >
            <CalendarDays />   {date ? date.toLocaleDateString() : `${name}`}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
