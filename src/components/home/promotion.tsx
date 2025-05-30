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
    <div className="flex flex-col gap-6 max-w-[340px] md:max-w-[654px] lg:max-w-[1000px] xl:max-w-[1378px] mx-auto px-4">
      <div className="flex justify-center items-center w-full px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[733px] gap-4 sm:gap-0">
          {/* Logo and Username */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <div className="size-10 md:size-16 relative">
              <Image
                src={"/assets/eulogo.png"}
                alt="logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col text-base sm:text-lg">
              <span className="font-medium">EUHOLIDAYS</span>
              <span className="text-sm sm:text-base">@euholidays</span>
            </div>
          </div>

          {/* Stats - Mobile (horizontal) */}
          <div className="flex sm:hidden justify-between w-full">
            <div className="flex flex-col items-center">
              <span className="font-medium">1,490</span>
              <span className="text-sm">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">10.8k</span>
              <span className="text-sm">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">88</span>
              <span className="text-sm">Following</span>
            </div>
          </div>

          {/* Stats - Desktop (vertical) */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="font-medium">1,490</span>
              <span>Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">10.8k</span>
              <span>Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">88</span>
              <span>Following</span>
            </div>
          </div>

          {/* Follow Button */}
          <Button className="w-full sm:w-auto mt-2 sm:mt-0 px-6">Follow</Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {promotionsImages.map((image) => (
          <div className="relative size-[320px] xl:size-[265px] " key={image}>
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
