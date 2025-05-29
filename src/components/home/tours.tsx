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

  // Group tours into chunks of 3 for each slide
  const tourGroups = [];
  for (let i = 0; i < tours.length; i += 3) {
    tourGroups.push(tours.slice(i, i + 3));
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
    <div className="flex flex-col gap-6 max-w-[1378px] mx-auto px-4">
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

      {/* Embla carousel wrapper with explicit overflow control */}
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
                    className="rounded-xl flex-1 shadow-md overflow-hidden"
                    key={tour.id}
                    style={{ height: "650px", maxHeight: "650px" }}
                  >
                    <div className="relative w-full" style={{ height: "50%" }}>
                      <Image
                        src={tour.image || "/placeholder.svg"}
                        alt="place"
                        className="object-cover rounded-t-xl"
                        fill
                      />
                    </div>
                    {/* CONTENT  */}
                    <div
                      className="flex flex-col px-8 mt-4 gap-4"
                      style={{ height: "calc(50% - 50px)" }}
                    >
                      <span className="font-bold text-xl h-[40px]">
                        {tour.title}
                      </span>
                      <span className="font-semibold">{tour.subTitle}</span>
                      <span className="">{tour.descriptions}</span>
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

      {/* Dots indicator */}
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
