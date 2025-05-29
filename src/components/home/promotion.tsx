import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const promotionsImages = [
  "/assets/promo1.png",
  "/assets/promo2.png",
  "/assets/promo3.png",
  "/assets/promo4.png",
  "/assets/promo5.png",
  "/assets/promo6.png",
  "/assets/promo7.png",
  "/assets/promo8.png",
  "/assets/promo9.png",
  "/assets/promo10.png",
];

export const Promotion = () => {
  return (
    <div className="py-10 h-full flex flex-col gap-10 w-full max-w-[654px] lg:max-w-[1000px]  xl:max-w-[1390px] mx-auto">
      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center w-[733px]">
          <Image
            src={"/assets/eulogo.png"}
            alt="logo"
            width={100}
            height={100}
          />
          <div className="flex flex-col text-lg">
            <span className="">EUHOLIDAYS</span>
            <span>@euholidays</span>
          </div>
          <div className="flex flex-col">
            <span>1,490</span>
            <span>Posts</span>
          </div>
          <div className="flex flex-col">
            <span>10.8k</span>
            <span>Followers</span>
          </div>
          <div className="flex flex-col">
            <span>88</span>
            <span>Following</span>
          </div>
          <Button>Follow</Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {promotionsImages.map((image) => (
          <div
            className="relative h-[320px] w-[320px] xl:w-[344px] xl:h-[344px] "
            key={image}
          >
            <Image
              src={image}
              key={image}
              alt="promotion image"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
