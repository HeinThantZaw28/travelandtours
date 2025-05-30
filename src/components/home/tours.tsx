"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface TourOption {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  descriptions: string;
  bestSeller: boolean;
}

interface ToursProps {
  title: string;
  tours: TourOption[];
}

const Tours = ({ title, tours }: ToursProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [slidesPerGroup, setSlidesPerGroup] = useState(3); // default

  // Update number of slides per group based on screen size
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 768 && width < 1024) {
        setSlidesPerGroup(2); // md only
      } else {
        setSlidesPerGroup(3); // base or lg+
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const tourGroups = [];
  for (let i = 0; i < tours.length; i += slidesPerGroup) {
    tourGroups.push(tours.slice(i, i + slidesPerGroup));
  }

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col gap-6 max-w-[654px] lg:max-w-[1000px]  xl:max-w-[1378px] mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[30px] font-bold">{title}</span>
          <Button
            variant={"ghost"}
            className="-ms-2 max-w-max text-[20px] font-normal"
          >
            View all here <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      <div
        className="embla-wrapper"
        style={{ height: "680px", overflow: "hidden" }}
      >
        <div className="embla" ref={emblaRef} style={{ height: "100%" }}>
          <div className="embla__container flex" style={{ height: "100%" }}>
            {tourGroups.map((group, groupIndex) => (
              <div
                className="embla__slide flex gap-4 min-w-full"
                key={`group-${groupIndex}`}
                style={{ height: "100%" }}
              >
                {group.map((tour) => (
                  <div
                    key={tour.id}
                    className="rounded-xl relative shadow-md overflow-hidden flex-1 h-[580px] md:h-[700px] lg:h-[680px] xl:h-[640px] max-h-[650px]"
                  >
                    {tour.bestSeller && (
                      <span className="absolute bg-black text-white w-[120px] flex justify-center py-2 top-0 right-0 rounded-xl z-50">
                        Best Seller
                      </span>
                    )}
                    <div className="relative w-full h-[50%] lg:h-[40%] xl:h-[45%] ">
                      <Image
                        src={tour.image || "/placeholder.svg"}
                        alt="place"
                        className="object-cover rounded-t-xl"
                        fill
                      />
                    </div>
                    <div className="flex flex-col px-6 md:px-8 mt-4 gap-4">
                      <span className="font-bold text-md xl:text-xl h-[50px] lg:h-[70px] xl:h-[40px]">
                        {tour.title}
                      </span>
                      <span className="font-semibold text-sm lg:text-base">
                        {tour.subTitle}
                      </span>
                      <span className="text-sm lg:text-base">
                        {tour.descriptions}
                      </span>
                      <Button
                        className="w-full justify-start items-center"
                        variant={"outline"}
                      >
                        <Image
                          src={"/bag.svg"}
                          alt="bag"
                          width={20}
                          height={20}
                          className="self-start mr-2"
                        />
                        <span>1-for-1</span>
                      </Button>
                      <Button
                        variant={"ghost"}
                        className="w-full self-center"
                        style={{ height: "40px" }}
                      >
                        View More <ChevronDown className="ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? "bg-black scale-125" : "bg-gray-300"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tours;
