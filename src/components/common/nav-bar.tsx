import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation } from "./navigation-menu";

// const menuOptions =[
//     {
//         title:"Plan Your Journey",
//         children:
//     }
// ]

const endSectionMenus = [
  { id: 1, link: "/travel-essentials", label: "Travel Essentials" },
  { id: 2, link: "/travel-club", label: "Travel Club" },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 h-[100px] bg-[#242424]">
      {/* menu section  */}
      {/* <div className="flex gap-4 items-center w-1/3">
        {[1, 2, 3, 4, 5].map((menu) => (
          <button
            onClick={() => {}}
            className="flex gap-1 text-white text-[20px]"
            key={menu}
          >
            <span>Menu</span>
            <span>icon</span>
          </button>
        ))}
      </div> */}
      <Navigation />
      {/* logo section  */}
      <div className="w-1/3">
        <div className="relative lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]">
          <Image
            alt="logo"
            src={"/assets/eulogo.png"}
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* end section  */}
      <div className="flex gap-4 text-white text-[11px] lg:text-[20px]">
        {endSectionMenus.map((menu) => (
          <Link key={menu.id} href={menu.link}>
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
