import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Navigation } from "./navigation-menu";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import MobileNavbar from "./mobile-navbar";

const endSectionMenus = [
  { id: 1, link: "/travel-essentials", label: "Travel Essentials" },
  { id: 2, link: "/travel-club", label: "Travel Club" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 h-[100px] bg-black">
        {/* Desktop Navigation (lg and up) */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Mobile Menu Button (below lg) */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Logo (centered on mobile) */}

        <div className="relative lg:size-[100px] size-[60px]">
          <Image
            alt="logo"
            src={"/assets/eulogo.png"}
            fill
            className="object-contain"
          />
        </div>

        {/* End Section (right side) */}
        <div className="flex gap-4 text-white items-baseline text-[12px] lg:text-[20px] font-semibold">
          {endSectionMenus.map((menu) => (
            <Link key={menu.id} href={menu.link}>
              {menu.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Menu (below lg) */}
      <div className="block md:hidden relative">
        {mobileMenuOpen && <MobileNavbar />}
      </div>
    </div>
  );
};

export default Navbar;
