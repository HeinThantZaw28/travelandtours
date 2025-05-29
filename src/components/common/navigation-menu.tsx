"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationContents } from "./navigation-content";

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4">
        {/* First Menu Item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white flex gap-1 items-baseline text-[12px] lg:text-[20px]  font-semibold">
            Plan Your Journey
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationContents />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Second Menu Item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white flex gap-1 items-baseline text-[12px] lg:text-[20px] font-semibold">
            Deals
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationContents />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Third Menu Item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white flex gap-1 items-baseline text-[12px] lg:text-[20px] font-semibold">
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationContents />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Fourth Menu Item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white flex gap-1 items-baseline text-[12px] lg:text-[20px] font-semibold">
            Our Brands
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationContents />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
