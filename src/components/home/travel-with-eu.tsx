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
    <div className="h-full lg:h-screen flex flex-col gap-6 max-w-[340px] md:max-w-[654px] lg:max-w-[1000px] xl:max-w-[1390px] mx-auto px-6 my-10 lg:my-20">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-4xl font-bold">Travel With EU</h3>
        <span className="text-base md:text-xl font-normal">
          Your trusted partner for enriching travel experiences.
        </span>
      </div>
      <Image
        src={"/assets/email.png"}
        alt="certificate"
        width={1000}
        height={102}
        className="w-full h-auto"
      />
      <div className="flex flex-wrap gap-4 items-center mt-5">
        {buttonLabels.map((button, i) => (
          <Button
            onClick={() => setActiveService(i)}
            key={button}
            className={`rounded-xl w-full md:w-[254px] h-[54px] hover:bg-black hover:text-white bg-[#EFEFEF] text-black ${
              activeService === i && "bg-black text-white"
            }`}
          >
            {button}
          </Button>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row w-full h-auto md:h-full gap-6 md:gap-0">
        <div className="w-full h-[400px] md:h-full lg:h-[90%] xl:h-full lg:w-1/2 relative rounded-xl">
          <Image
            src={"/assets/eutravel.png"}
            alt="service"
            className="object-cover rounded-xl"
            fill
          />
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col gap-3 lg:px-10  lg:justify-center">
          <h3 className="text-xl font-bold lg:text-3xl lg:font-bold xl:font-normal">
            {buttonLabels[activeService]}
          </h3>
          <p className="text-sm lg:text-lg xl:text-base font-[500] leading-6 lg:leading-8 xl:leading-6">
            Recognised by prestigious organisations and customers alike, EU
            Holidays has consistently been at the forefront of excellence in the
            travel industry. Accolades such as the Singapore Prestige Brand
            Award and Best Travel Agency for Europe and USA Tours reflect their
            dedication to creating extraordinary travel experiences. These
            awards underline their professionalism, trustworthiness, and ability
            to craft unforgettable journeys. When you choose EU Holidays,
            you&apos;re travelling with a brand synonymous with quality and
            excellence.
          </p>
          <Button className="max-w-max px-8 mt-2 lg:mt-4 py-5 font-normal">
            View Tours
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TravelWithEU;
