import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const gradientOverlay = `linear-gradient(180deg, 
    rgba(7, 7, 7, 0.71) 0%, 
    rgba(23, 23, 23, 0.6) 11.9%, 
    rgba(38, 38, 38, 0) 23.1%, 
    rgba(53, 53, 53, 0) 34.3%, 
    rgba(44, 44, 44, 0) 47%, 
    rgba(36, 36, 36, 0.612) 59.4%, 
    rgba(7, 7, 7, 0.749) 100%
  )`;

const themeOptions = [
  {
    id: 1,
    title: "Luxury Experiences",
    descriptions: "Exquisite moments await.",
    image: "/assets/bed.png",
  },
  {
    id: 2,
    title: "Family Friendly",
    descriptions: "Designed for families.",
    image: "/assets/family.png",
  },
  {
    id: 3,
    title: "Seasonal Tours",
    descriptions: "Tours for every season.",
    image: "/assets/winter.png",
  },
  {
    id: 4,
    title: "Cultural & Historical",
    descriptions: "Stories of time and heritage.",
    image: "/assets/cultural.png",
  },
];

export const Theme = () => {
  return (
    <div className="bg-[#EFEFEF] h-full w-full py-20">
      <div className="flex flex-col mx-auto items-center gap-6 ">
        <div className="flex flex-col">
          <span className="text-[30px] font-bold">Explore Tours By Themes</span>
          <Button
            variant={"ghost"}
            className="-ms-2 max-w-max text-[20px] font-normal"
          >
            View all here <ArrowRight className="ml-2" />
          </Button>
        </div>

        <div className="flex justify-center w-full h-full">
          <div className="max-w-[654px] lg:max-w-[1000px]  xl:max-w-[1390px] mx-auto flex flex-wrap gap-3">
            {themeOptions.map((destination) => (
              <div
                key={destination.id}
                className="w-[300px] lg:w-[310px] xl:w-[330px] h-[499px] bg-cover bg-center relative rounded-xl p-10 flex flex-col justify-between text-white "
                style={{
                  backgroundImage: `${gradientOverlay}, url(${destination.image})`,
                }}
              >
                <span className="text-white text-[27px] font-bold">
                  {destination.title}
                </span>
                <div className="flex flex-col gap-6">
                  <span className="text-xl text-white font-semibold">
                    {destination.descriptions}
                  </span>
                  <Button variant={"secondary"} className="max-w-max">
                    View More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
