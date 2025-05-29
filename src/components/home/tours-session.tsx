import React from "react";
import Tours from "./tours";
import Destination from "./destination";

const promotionsToursOptions = [
  {
    id: 1,
    image: "/assets/cherrypromotion.png",
    title: "The Cherry Blossoms are Calling",
    subTitle: "fr $438/pax",
    descriptions:
      "Enjoy an unforgettable spring getaway to Japan during peak sakura season! This limited-time deal includes airport taxes, baggage allowance and even a free gift.",
  },
  {
    id: 2,
    image: "/assets/trainpromotion.png",
    title: "13D10N Aurora Norway, Finland and Sweden (OCT-MAR)",
    subTitle: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
  },
  {
    id: 3,
    image: "/assets/mountainpromotion.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    subTitle: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
  },
  {
    id: 4,
    image: "/assets/cherrypromotion.png",
    title: "The Cherry Blossoms are Calling",
    subTitle: "fr $438/pax",
    descriptions:
      "Enjoy an unforgettable spring getaway to Japan during peak sakura season! This limited-time deal includes airport taxes, baggage allowance and even a free gift.",
  },
  {
    id: 5,
    image: "/assets/trainpromotion.png",
    title: "13D10N Aurora Norway, Finland and Sweden (OCT-MAR)",
    subTitle: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
  },
  {
    id: 6,
    image: "/assets/mountainpromotion.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    subTitle: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
  },
];

const featureTours = [
  {
    id: 1,
    image: "/assets/flowerfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    subTitle: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
  },
  {
    id: 2,
    image: "/assets/carfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    subTitle: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
  },
  {
    id: 3,
    image: "/assets/mountainfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    subTitle: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
  },
  {
    id: 4,
    image: "/assets/flowerfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    subTitle: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
  },
  {
    id: 5,
    image: "/assets/carfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    subTitle: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
  },
  {
    id: 6,
    image: "/assets/mountainfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    subTitle: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
  },
];

const TourSession = () => {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-6 py-10 lg:py-20">
      <Tours
        title="Seasonal Deals + Promotions"
        tours={promotionsToursOptions}
      />
      <Tours title="Featured Tours" tours={featureTours} />
      <Destination />
    </div>
  );
};

export default TourSession;
