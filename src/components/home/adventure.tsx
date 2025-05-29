import { ArrowRight, Link, Ship, Snowflake, TrendingUp } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const adventureOptions = [
  {
    id: 1,
    title: "Trending Now",
    icon: <TrendingUp />,
    image: "/assets/bridge.png",
  },
  {
    id: 2,
    title: "Travel Deals",
    icon: <Link />,
    image: "/assets/bridge1.png",
  },
  {
    id: 3,
    title: "Themed Journeys",
    icon: <Snowflake />,
    image: "/assets/sea.png",
  },
  { id: 4, title: "Cruises", icon: <Ship />, image: "/assets/cruise.png" },
];

export const Adventure = () => {
  return (
    <div className="py-10 h-screen flex flex-col gap-6 max-w-[1378px] px-20">
      <div className="flex flex-col items-center">
        <span className="text-[30px] font-bold">Your Next Adventure</span>
        <span className="text-[18px] font-medium">
          Join thousands of happy travellers who trust EU Holidays to make their
          journey unforgettable.
        </span>
      </div>
      <div className="flex gap-4">
        {adventureOptions.map((adventure) => (
          <div className="" key={adventure.id}>
            <div
              className="w-[344px] h-[499px] bg-cover bg-center relative rounded-xl"
              style={{
                backgroundImage: ` url(${adventure.image})`,
              }}
            >
              <div className="absolute -bottom-2 left-1 w-[63px] h-[63px] rounded-full flex flex-col justify-center items-center bg-black text-white">
                {adventure.icon}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl">{adventure.title}</span>
              <Button variant={"ghost"} className="max-w-max -ms-1">
                View more <ArrowRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
