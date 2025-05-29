import React from "react";
import Image from "next/image";
import { MapPin, Search } from "lucide-react";
import DatePicker from "./hero-filter-datepicker";
import Dropdown from "../common/dropdown";
import { Button } from "../ui/button";

const HeroFilter = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-end z-20 pointer-events-none mb-10">
      <div className="flex gap-4 items-baseline">
        <h3 className="text-[60px] lg:text-[80px] text-white">
          Book the best travel deals
        </h3>
        <Image
          src={"/assets/heading.png"}
          alt="search_arrow"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="bg-white backdrop-blur-sm rounded-lg p-8 shadow-lg mx-4 pointer-events-auto max-w-max-[800px] lg:max-w-[1378px]">
        <div className="flex items-center justify-around max-lg:text-[10px] gap-1">
          <div className="flex flex-col gap-y-3">
            <span className="font-bold max-lg:text-[10px]">
              I WANT TO TRAVEL TO...
            </span>
            <div className="flex gap-2">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
              Bali, Indonesia
            </div>
          </div>
          <DatePicker label="FROM" />
          <DatePicker label="TO" />
          <div className="flex flex-col">
            <span className="font-bold">TYPE OF HOLIDAYS</span>
            <Dropdown />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Clear Filters</span>
            <Button variant={"default"} className="">
              <Search />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
