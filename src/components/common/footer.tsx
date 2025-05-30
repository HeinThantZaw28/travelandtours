import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";

const gradientOverlay = `linear-gradient(270deg, 
  rgba(7, 7, 7, 0.102) 0%, 
  rgba(7, 7, 7, 0.502) 42.3%, 
  rgba(7, 7, 7, 0.902) 100%
)`;

const linksOptions = [
  {
    title: "Links",
    links: [
      { id: 2, title: "Home", href: "/#" },
      { id: 3, title: "Our Story", href: "/#" },
      { id: 4, title: "Press & Media", href: "/#" },
      { id: 5, title: "Partners", href: "/#" },
      { id: 6, title: "Careers", href: "/#" },
      { id: 7, title: "Contact Us", href: "/#" },
    ],
  },
  {
    title: "Explore",
    links: [
      { id: 1, title: "Trending Destinations", href: "/#" },
      { id: 2, title: "Themed Journeys", href: "/#" },
      { id: 3, title: "Cruises", href: "/#" },
      { id: 4, title: "Last-Minute Deals", href: "/#" },
    ],
  },
  {
    title: "Policies",
    links: [
      { id: 1, title: "Terms and Conditions", href: "/#" },
      { id: 2, title: "Cancellation and Refunds", href: "/#" },
      { id: 3, title: "Privacy Policy", href: "/#" },
    ],
  },
  {
    title: "Find Us",
    links: [
      { id: 1, title: "Social Media", href: "/#" },
      { id: 2, title: "+65 6958 8888", href: "tel:+6569588888" },
      {
        id: 3,
        title: "1 Raffles Blvd, Level 2 Crescent 2, 039593",
        subtitle: "Monday to Sunday, 11AM to 8PM",
        href: "/#",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <div className="flex flex-col w-full mt-10">
      {/* HERO SECTION */}
      <div
        className="w-full min-h-full bg-cover bg-center relative flex flex-col justify-center px-4 sm:px-6 lg:px-8 lg:h-[900px] xl:h-[800px]"
        style={{
          backgroundImage: `${gradientOverlay}, url('/assets/footerbanner.png')`,
        }}
      >
        <div className="flex flex-col w-[300] md:w-[646px] lg:w-[500px] text-white gap-2 lg:ps-10 mt-40">
          <span className="text-[30px] lg:text-[70px] font-bold">
            Go places.
          </span>
          <span className="mb-2 text-xs md:text-base">
            Whether you’re dreaming of exploring Iceland’s icy landscapes,
            Australia’s sun-kissed beaches, or Japan’s vibrant cityscapes, we’ve
            got the perfect itinerary for you. Our expertly curated travel
            experiences are designed to match your wanderlust, ensuring every
            moment is unforgettable.
          </span>
          <span className="mb-2 text-xs md:text-base">
            Sign up for our newsletter and be the first to receive exclusive
            travel deals, insider tips, and destination inspiration straight to
            your inbox.
          </span>
        </div>

        {/* NEWSLETTER FORM */}
        <div className="bg-white rounded-xl w-full lg:max-w-max xl:max-w-4xl max-lg:mx-auto lg:ms-8 mt-8 sm:mt-10 p-4 sm:p-6 flex flex-col sm:flex-row xl:justify-between items-center gap-4 sm:gap-6 h-auto sm:h-[171px] text-[#242424] mb-10">
          <div className="w-full sm:w-auto">
            <label className="text-xs sm:text-sm">YOUR NAME *</label>
            <Input className="bg-[#EFEFEF] w-full mt-1" />
          </div>
          <div className="w-full sm:w-auto">
            <label className="text-xs sm:text-sm">YOUR EMAIL *</label>
            <Input className="bg-[#EFEFEF] w-full mt-1" />
          </div>
          <Button className="w-full sm:w-auto mt-2 md:mt-6 px-6 py-4 sm:py-2">
            Join Newsletter
          </Button>
        </div>
        {/* <div className="bg-white rounded-xl w-full md:w-[600px] lg:w-[800px] xl:w-[829px] flex flex-col md:flex-row md:justify-around items-center ms-20 mt-10 h-[171px] text-[#242424] mb-20">
          <div className="flex flex-col gap-2">
            <span className="text-xs">YOUR NAME *</span>
            <Input className="bg-[#EFEFEF] w-full mt-1" />
          </div>
          <div className="flex flex-col gap-2">
            <span>YOUR EMAIL *</span>
            <Input className="bg-[#EFEFEF]" />
          </div>
          <Button className="w-full sm:w-auto mt-2 sm:mt-0 px-6 py-4 sm:py-2">
            Join NewsLetter
          </Button>
        </div> */}
      </div>

      {/* FOOTER LINKS SECTION */}
      <div className="w-full bg-black text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {linksOptions.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-3 sm:mb-4">
                {group.title}
              </h3>
              <div className="flex flex-col gap-2 sm:gap-3">
                {group.links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.id}
                    className="hover:text-gray-300 transition-colors text-sm sm:text-base"
                  >
                    <div>{link.title}</div>
                    {link.subtitle && (
                      <div className="text-xs text-gray-400 mt-1">
                        {link.subtitle}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex my-8 sm:my-10 w-full justify-center">
          <div className="border border-dashed border-gray-600 w-full max-w-[95%]" />
        </div>

        <div className="text-center sm:text-left text-sm sm:text-base">
          © 2025 EU Holidays Pte Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
};
