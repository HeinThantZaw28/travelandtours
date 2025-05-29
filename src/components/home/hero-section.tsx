"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HeroFilter from "./hero-filter";

interface BannerSlide {
  id: number;
  image: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    image: "/assets/banner.png?height=300&width=1200",
  },
  {
    id: 2,
    image: "/assets/banner.png?height=300&width=1200",
  },
  {
    id: 3,
    image: "/assets/banner.png?height=300&width=1200",
  },
];

export default function VerticalBannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      loop: true,
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const gradientOverlay = `linear-gradient(180deg, 
    rgba(7, 7, 7, 0.71) 0%, 
    rgba(23, 23, 23, 0.6) 11.9%, 
    rgba(38, 38, 38, 0) 23.1%, 
    rgba(53, 53, 53, 0) 34.3%, 
    rgba(44, 44, 44, 0) 47%, 
    rgba(36, 36, 36, 0.612) 59.4%, 
    rgba(7, 7, 7, 0.749) 100%
  )`;

  return (
    <div className="relative h-[675px] w-full overflow-hidden">
      {/* Embla Carousel Container */}
      <div className="h-full" ref={emblaRef}>
        <div className="flex flex-col h-full">
          {bannerSlides.map((slide) => (
            <div key={slide.id} className="flex-none h-full relative">
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `${gradientOverlay}, url('${slide.image}')`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <HeroFilter />

      {/* Dot Indicators */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col space-y-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 bg-transparent ${
                index === selectedIndex
                  ? " border-2 border-white scale-125"
                  : "border-2 border-white/50 hover:bg-white/75"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
