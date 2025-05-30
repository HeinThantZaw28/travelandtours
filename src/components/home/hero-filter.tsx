"use client";

import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "./hero-filter-datepicker";

function Dropdown() {
  return (
    <div className="flex flex-col gap-1 w-full flex-1">
      <span className="font-bold text-xs text-gray-600 uppercase tracking-wide">
        Type of Holiday
      </span>
      <Select>
        <SelectTrigger className="h-10 min-w-[150px] lg:w-full">
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="beach">Beach</SelectItem>
          <SelectItem value="adventure">Adventure</SelectItem>
          <SelectItem value="cultural">Cultural</SelectItem>
          <SelectItem value="relaxation">Relaxation</SelectItem>
          <SelectItem value="family">Family</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default function HeroFilter() {
  return (
    <div className="bg-white backdrop-blur-sm rounded-lg shadow-lg mx-4 pointer-events-auto w-full max-w-[1200px]">
      <div className="p-4 md:p-6 lg:p-8">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex flex-col gap-1 w-full sm:w-auto sm:min-w-[200px] sm:flex-1">
            <span className="font-bold text-xs text-gray-600 uppercase tracking-wide">
              I want to travel to...
            </span>
            <div className="flex items-center gap-2 p-3 border rounded-md bg-gray-50">
              <MapPin className="h-4 w-4 text-gray-500 shrink-0" />
              <span className="text-sm font-medium">Bali, Indonesia</span>
            </div>
          </div>

          {/* Date Pickers - Will wrap naturally */}
          <DatePicker label="From" />
          <DatePicker label="To" />

          {/* Holiday Type */}
          <Dropdown />

          {/* Actions - Clear and Search */}
          <div className="flex flex-col ">
            <span className=" font-bold text-xs text-gray-600 uppercase tracking-wide">
              Clear Filters
            </span>
            <Button className="h-10 px-6">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
