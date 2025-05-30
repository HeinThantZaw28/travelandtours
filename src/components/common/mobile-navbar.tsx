import { ChevronDown, ChevronUp, CircleChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  cruises,
  flexiHolidays,
  regions,
  subDropdown,
  themedJourneys,
} from "./navigation-content";
import { cn } from "@/lib/utils";

const MobileNavbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("Asia");
  const [selectedSubregion, setSelectedSubregion] = useState<string>("All");
  const [activeSection, setActiveSection] = useState<string | null>(
    "group-holidays"
  );

  const toggleMenu = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="absolute top-1 left-3 bg-black text-white z-50 rounded-xl p-2">
        <ul className="flex text-xs">
          {["Plan Your Journey", "Deals", "About Us", "Our Brands"].map(
            (menu, i) => (
              <li
                key={menu}
                onClick={() => toggleMenu(i)}
                className="flex my-1 justify-between items-center cursor-pointer"
              >
                {menu}
                {openIndex === i ? <ChevronUp /> : <ChevronDown />}
              </li>
            )
          )}
        </ul>
      </div>

      {(openIndex || openIndex === 0) && (
        <div className="absolute top-14 inset-x-0 mx-auto bg-white p-2 rounded-xl z-30 shadow-md">
          <ul className="flex text-[10px]">
            {subDropdown.map((menu) => (
              <li
                key={menu.id}
                onClick={() => setActiveSection(menu.value)}
                className="flex my-1 justify-between items-center cursor-pointer"
              >
                {menu.label}
                {menu.value === activeSection ? <ChevronUp /> : <ChevronDown />}
              </li>
            ))}
          </ul>
          {activeSection === "group-holidays" && (
            <div className="flex flex-col gap-3">
              {/* Regions Column */}
              <div className="col-span-2 border-r pr-4">
                <h4 className="text-sm font-bold text-gray-700 my-2">
                  Regions
                </h4>
                <div className="flex flex-wrap gap-1 items-center mb-2">
                  {regions.map((region) => (
                    <button
                      key={region.name}
                      onClick={() => {
                        setSelectedRegion(region.name);
                        setSelectedSubregion("All");
                      }}
                      className={cn(
                        "px-2 py-1 text-[10px] rounded-full border flex items-center gap-1",
                        region.name === selectedRegion
                          ? "bg-black text-white"
                          : "border-gray-300 text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      <span>{region.name}</span>
                      <CircleChevronRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Subregions & Countries Column */}
              <div className="col-span-3">
                {selectedRegion && (
                  <>
                    {/* Subregion Tabs */}
                    <div className="flex gap-1 flex-wrap mb-2">
                      {regions
                        .find((r) => r.name === selectedRegion)
                        ?.subregions.map((subregion) => (
                          <button
                            key={subregion.name}
                            onClick={() => setSelectedSubregion(subregion.name)}
                            className={cn(
                              "px-2 py-1 text-[10px] rounded-full border",
                              subregion.name === selectedSubregion
                                ? "bg-black text-white"
                                : "text-gray-600 border-gray-300 hover:bg-gray-100"
                            )}
                          >
                            {subregion.name}
                          </button>
                        ))}
                    </div>

                    {/* Countries Grid */}
                    <div className="flex flex-wrap gap-2">
                      {" "}
                      {/* decreased gap */}
                      {selectedSubregion === "All"
                        ? regions
                            .find((r) => r.name === selectedRegion)
                            ?.subregions.flatMap(
                              (subregion) => subregion.countries
                            )
                            .filter(
                              (country, index, self) =>
                                self.indexOf(country) === index
                            )
                            .map((country) => (
                              <Link
                                key={country}
                                href={`/destinations/${selectedRegion.toLowerCase()}/${country
                                  .toLowerCase()
                                  .replace(" ", "-")}`}
                                className="block px-2 py-1 text-[10px] text-gray-700 rounded-full border border-gray-300 hover:bg-black hover:text-white transition duration-150"
                              >
                                {country}
                              </Link>
                            ))
                        : regions
                            .find((r) => r.name === selectedRegion)
                            ?.subregions.find(
                              (s) => s.name === selectedSubregion
                            )
                            ?.countries.map((country) => (
                              <Link
                                key={country}
                                href={`/destinations/${selectedRegion.toLowerCase()}/${country
                                  .toLowerCase()
                                  .replace(" ", "-")}`}
                                className="block px-2 py-1 text-[10px] text-gray-700 rounded-full border border-gray-300 hover:bg-black hover:text-white transition duration-150"
                              >
                                {country}
                              </Link>
                            ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          {activeSection === "flexi-holidays" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {flexiHolidays.map((item) => (
                <Link
                  key={item.title}
                  href={`/flexi-holidays/${item.title
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="block p-2 rounded-md hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  <div className="text-[11px] md:text-[14px] font-medium text-gray-900 mb-0.5">
                    {item.title}
                  </div>
                  <p className="text-[10px] md:text-[12px] text-gray-600">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
          {activeSection === "themed-journeys" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Themes Column */}
              <div>
                <h4 className="text-xs font-semibold text-gray-700 mb-2">
                  Themes
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {themedJourneys.map((item) => (
                    <Link
                      key={item.title}
                      href={`/themed-journeys/${item.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block p-2 rounded-md hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                      <div className="text-[11px] md:text-[13px] font-medium text-gray-900">
                        {item.title}
                      </div>
                      <p className="text-[10px] md:text-[12px] text-gray-600 mt-0.5">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Countries Column */}
              <div>
                <h4 className="text-xs font-semibold text-gray-700 mb-2">
                  Countries
                </h4>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    "Austria",
                    "Greece",
                    "France",
                    "Spain",
                    "Italy",
                    "Portugal",
                    "Switzerland",
                  ].map((country) => (
                    <Link
                      key={country}
                      href={`/themed-journeys/countries/${country.toLowerCase()}`}
                      className="block px-2 py-1 text-[11px] rounded-md bg-white text-gray-700 border border-gray-200 hover:bg-black hover:text-white transition-colors"
                    >
                      {country}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeSection === "cruise" && (
            <div className="flex flex-wrap gap-3">
              {cruises.map((item) => (
                <Link
                  key={item.title}
                  href={`/cruise/${item.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="flex-shrink-0 w-40 p-3 rounded-md hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  <div className="text-base font-medium text-gray-900 mb-1 truncate">
                    {item.title}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-3">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
