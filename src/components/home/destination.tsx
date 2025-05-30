import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const destinations = [
  { id: 1, title: "Explore Japan.", image: "/assets/japan.png" },
  { id: 2, title: "Explore Korea.", image: "/assets/korea.png" },
  { id: 3, title: "Explore Taiwan.", image: "/assets/taiwan.png" },
  { id: 4, title: "Explore China.", image: "/assets/china.png" },
];

const gradientOverlay = `linear-gradient(180deg, 
    rgba(7, 7, 7, 0.71) 0%, 
    rgba(23, 23, 23, 0.6) 11.9%, 
    rgba(38, 38, 38, 0) 23.1%, 
    rgba(53, 53, 53, 0) 34.3%, 
    rgba(44, 44, 44, 0) 47%, 
    rgba(36, 36, 36, 0.612) 59.4%, 
    rgba(7, 7, 7, 0.749) 100%
  )`;

const Destination = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[340px] md:max-w-[654px] lg:max-w-[1000px] xl:max-w-[1378px] mx-auto px-4">
      <div className="flex flex-col">
        <span className="text-[18px] md:text-[30px] font-bold">
          Explore Tours By Destinations
        </span>
        <Button
          variant={"ghost"}
          className="-ms-2 max-w-max text-[10px] md:text-[20px] font-normal"
        >
          View all here <ArrowRight className="ml-2" />
        </Button>
      </div>

      <div className="flex gap-3 flex-wrap">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="w-[300px] lg:w-[310px] xl:w-[320px] h-[499px] bg-cover bg-center relative rounded-xl"
            style={{
              backgroundImage: `${gradientOverlay}, url(${destination.image})`,
            }}
          >
            <span className="absolute bottom-10 ps-10 z-20 pointer-events-none text-white text-[20px] md:text-[30px] lg:text-[34px] font-bold flex items-center gap-2">
              {destination.title}
              <ArrowRight />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
