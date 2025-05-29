import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";

const buttonLabels = [
  "Award-Winning Service",
  "Experienced Tour Managers",
  "Tailored Travel Experiences",
  "Thousands of Happy Travellers",
];

const TravelWithEU = () => {
  const [activeService, setActiveService] = useState(0);
  return (
    <div className="h-screen flex flex-col gap-6 max-w-[654px] lg:max-w-[1000px]  xl:max-w-[1390px] mx-auto my-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-4xl font-bold">Travel With EU</h3>
        <span className="text-xl font-normal">
          Your trusted partner for enriching travel experiences.
        </span>
      </div>
      <Image
        src={"/assets/email.png"}
        alt="certificate"
        width={1000}
        height={102}
      />
      <div className="flex flex-wrap gap-4 items-center mt-5">
        {buttonLabels.map((button, i) => (
          <Button
            onClick={() => setActiveService(i)}
            key={button}
            className={`rounded-xl w-[254px] h-[54px] hover:bg-black hover:text-white bg-[#EFEFEF] text-black ${
              activeService === i && "bg-black text-white"
            }`}
          >
            {button}
          </Button>
        ))}
      </div>
      <div className="flex w-full h-full">
        <div className="w-1/2 h-full relative">
          <Image
            src={"/assets/winter.png"}
            alt="service"
            className="object-cover"
            fill
          />
        </div>
        <div className="w-1/2 h-full flex flex-col gap-3 px-10 justify-center">
          <h3 className="text-xl font-bold lg:text-3xl lg:font-normal">
            {buttonLabels[activeService]}
          </h3>
          <p className="text-sm font-[500] leading-6">
            Recognised by prestigious organisations and customers alike, EU
            Holidays has consistently been at the forefront of excellence in the
            travel industry. Accolades such as the Singapore Prestige Brand
            Award and Best Travel Agency for Europe and USA Tours reflect their
            dedication to creating extraordinary travel experiences. These
            awards underline their professionalism, trustworthiness, and ability
            to craft unforgettable journeys. When you choose EU Holidays, you’re
            travelling with a brand synonymous with quality and excellence.
          </p>
          <Button className="max-w-max px-8 mt-4 py-5 font-normal">
            View Tours
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TravelWithEU;
