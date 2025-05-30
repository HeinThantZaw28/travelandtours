import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

interface DatePickerProps {
  label: string;
}

// const DatePicker = ({ label }: DatePickerProps) => {
//   const [date, setDate] = useState<Date>();
//   return (
//     <div className="flex flex-col gap-1">
//       <span className="font-bold">{label}</span>
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button
//             variant={"outline"}
//             className={cn(
//               "w-[160px] lg:w-[200px] justify-start text-left font-normal outline-none border-none shadow-none",
//               !date && "text-muted-foreground -ms-2"
//             )}
//           >
//             <CalendarIcon className="mr-2 h-4 w-4" />
//             {date ? format(date, "PPP") : <span>Pick a date</span>}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto p-0">
//           <Calendar
//             mode="single"
//             selected={date}
//             onSelect={setDate}
//             initialFocus
//           />
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// };

// export default DatePicker;

export function DatePicker({ label }: DatePickerProps) {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-col gap-1 min-w-[140px] flex-1">
      <span className="font-bold text-xs text-gray-600 uppercase tracking-wide">
        {label}
      </span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal h-10 px-3",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
