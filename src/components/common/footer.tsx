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
      { id: 4, title: "CruisesLast-Minute Deals", href: "/#" },
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
      { id: 2, title: "+65 6958 8888", href: "/#" },
      {
        id: 3,
        title:
          "1 Raffles Blvd, Level 2 Crescent 2, 039593Monday to Sunday, 11AM to 8PM",
        href: "/#",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div
        className="w-full h-screen bg-cover bg-center relative flex flex-col justify-center"
        style={{
          backgroundImage: `${gradientOverlay}, url('/assets/footerbanner.png')`,
        }}
      >
        <div className="flex flex-col w-[646px] text-white gap-2 ps-20">
          <span className="text-[100px]  font-bold">Go places.</span>
          <span className="mb-2">
            Whether you’re dreaming of exploring Iceland’s icy landscapes,
            Australia’s sun-kissed beaches, or Japan’s vibrant cityscapes, we’ve
            got the perfect itinerary for you. Our expertly curated travel
            experiences are designed to match your wanderlust, ensuring every
            moment is unforgettable.
          </span>
          <span>
            Sign up for our newsletter and be the first to receive exclusive
            travel deals, insider tips, and destination inspiration straight to
            your inbox.
          </span>
        </div>
        <div className="bg-white rounded-xl w-[600px] lg:w-[800px] xl:w-[829px] flex justify-around items-center ms-20 mt-10 h-[171px] text-[#242424]">
          <div className="flex flex-col gap-2">
            <span>YOUR NAME *</span>
            <Input className="bg-[#EFEFEF]" />
          </div>
          <div className="flex flex-col gap-2">
            <span>YOUR EMAIL *</span>
            <Input className="bg-[#EFEFEF]" />
          </div>
          <Button className="mt-6">Join NewsLetter</Button>
        </div>
      </div>
      {/* FOOTER CONTENT SECTION  */}
      <div className="flex flex-col w-full bg-black text-white py-10 ">
        <div className="flex justify-start gap-16 ps-20">
          {linksOptions.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <h3 className="font-semibold mb-2">{group.title}</h3>
              {group.links.map((link) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className="hover:text-gray-300 transition-colors bg-whit flex flex-wrap"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex my-10 w-full justify-center">
          <div className="border border-dashed bg-grey-700 w-[95%]" />
        </div>
        <span className="ps-20">
          © 2025 EU Holidays Pte Ltd. All rights reserved.
        </span>
      </div>
    </div>
  );
};
