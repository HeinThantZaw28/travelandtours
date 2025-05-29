import React, { useState } from "react";
import { ChevronDown, CircleChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const subDropdown = [
  { id: 1, label: "Group Holidays", value: "group-holidays" },
  { id: 2, label: "Flexi Holidays", value: "flexi-holidays" },
  { id: 3, label: "Themed Journeys", value: "themed-journeys" },
  { id: 4, label: "Cruise", value: "cruise" },
];

const regions = [
  {
    name: "Asia",
    subregions: [
      {
        name: "All",
        countries: [
          "Japan",
          "South Korea",
          "China",
          "Taiwan",
          "Mongolia",
          "Thailand",
          "Singapore",
          "Malaysia",
          "Indonesia",
          "Vietnam",
          "India",
          "Sri Lanka",
          "Nepal",
          "Bhutan",
          "Maldives",
          "Kazakhstan",
          "Uzbekistan",
          "Turkmenistan",
          "Kyrgyzstan",
          "Tajikistan",
        ],
      },
      {
        name: "East Asia",
        countries: ["Japan", "South Korea", "China", "Taiwan", "Mongolia"],
      },
      {
        name: "Southeast Asia",
        countries: [
          "Thailand",
          "Singapore",
          "Malaysia",
          "Indonesia",
          "Vietnam",
        ],
      },
      {
        name: "South Asia",
        countries: ["India", "Sri Lanka", "Nepal", "Bhutan", "Maldives"],
      },
      {
        name: "Central Asia",
        countries: [
          "Kazakhstan",
          "Uzbekistan",
          "Turkmenistan",
          "Kyrgyzstan",
          "Tajikistan",
        ],
      },
    ],
  },
  {
    name: "Europe",
    subregions: [
      {
        name: "All",
        countries: [
          "France",
          "Germany",
          "Belgium",
          "Netherlands",
          "Switzerland",
          "Italy",
          "Spain",
          "Portugal",
          "Greece",
          "Croatia",
          "United Kingdom",
          "Sweden",
          "Norway",
          "Denmark",
          "Finland",
          "Poland",
          "Czech Republic",
          "Hungary",
          "Romania",
          "Bulgaria",
        ],
      },
      {
        name: "Western Europe",
        countries: [
          "France",
          "Germany",
          "Belgium",
          "Netherlands",
          "Switzerland",
        ],
      },
      {
        name: "Southern Europe",
        countries: ["Italy", "Spain", "Portugal", "Greece", "Croatia"],
      },
      {
        name: "Northern Europe",
        countries: ["United Kingdom", "Sweden", "Norway", "Denmark", "Finland"],
      },
      {
        name: "Eastern Europe",
        countries: [
          "Poland",
          "Czech Republic",
          "Hungary",
          "Romania",
          "Bulgaria",
        ],
      },
    ],
  },
  {
    name: "Africa",
    subregions: [
      {
        name: "All",
        countries: [
          "Egypt",
          "Algeria",
          "Morocco",
          "Tunisia",
          "Libya",
          "Nigeria",
          "Ghana",
          "Senegal",
          "Ivory Coast",
          "Mali",
          "Kenya",
          "Ethiopia",
          "Tanzania",
          "Uganda",
          "Rwanda",
          "South Africa",
          "Botswana",
          "Namibia",
          "Zimbabwe",
          "Zambia",
          "Cameroon",
          "Chad",
          "Gabon",
          "Central African Republic",
          "Congo",
        ],
      },
      {
        name: "North Africa",
        countries: ["Egypt", "Algeria", "Morocco", "Tunisia", "Libya"],
      },
      {
        name: "West Africa",
        countries: ["Nigeria", "Ghana", "Senegal", "Ivory Coast", "Mali"],
      },
      {
        name: "East Africa",
        countries: ["Kenya", "Ethiopia", "Tanzania", "Uganda", "Rwanda"],
      },
      {
        name: "Southern Africa",
        countries: [
          "South Africa",
          "Botswana",
          "Namibia",
          "Zimbabwe",
          "Zambia",
        ],
      },
      {
        name: "Central Africa",
        countries: [
          "Cameroon",
          "Chad",
          "Gabon",
          "Central African Republic",
          "Congo",
        ],
      },
    ],
  },
  {
    name: "Americas",
    subregions: [
      {
        name: "All",
        countries: [
          "United States",
          "Canada",
          "Mexico",
          "Guatemala",
          "Panama",
          "Costa Rica",
          "Honduras",
          "Nicaragua",
          "Brazil",
          "Argentina",
          "Colombia",
          "Chile",
          "Peru",
          "Cuba",
          "Jamaica",
          "Haiti",
          "Dominican Republic",
          "Trinidad and Tobago",
        ],
      },
      {
        name: "North America",
        countries: ["United States", "Canada", "Mexico"],
      },
      {
        name: "Central America",
        countries: [
          "Guatemala",
          "Panama",
          "Costa Rica",
          "Honduras",
          "Nicaragua",
        ],
      },
      {
        name: "South America",
        countries: ["Brazil", "Argentina", "Colombia", "Chile", "Peru"],
      },
      {
        name: "Caribbean",
        countries: [
          "Cuba",
          "Jamaica",
          "Haiti",
          "Dominican Republic",
          "Trinidad and Tobago",
        ],
      },
    ],
  },
  {
    name: "Oceania",
    subregions: [
      {
        name: "All",
        countries: [
          "Australia",
          "New Zealand",
          "Fiji",
          "Papua New Guinea",
          "Solomon Islands",
          "Vanuatu",
          "Kiribati",
          "Nauru",
          "Palau",
          "Marshall Islands",
          "Samoa",
          "Tonga",
          "Tuvalu",
        ],
      },
      {
        name: "Australia and New Zealand",
        countries: ["Australia", "New Zealand"],
      },
      {
        name: "Melanesia",
        countries: ["Fiji", "Papua New Guinea", "Solomon Islands", "Vanuatu"],
      },
      {
        name: "Micronesia",
        countries: ["Kiribati", "Nauru", "Palau", "Marshall Islands"],
      },
      {
        name: "Polynesia",
        countries: ["Samoa", "Tonga", "Tuvalu"],
      },
    ],
  },
];

// ... (keep the flexiHolidays, themedJourneys, cruises arrays the same)

const flexiHolidays = [
  { title: "City Breaks", description: "Short urban getaways" },
  { title: "Beach Holidays", description: "Relaxing coastal destinations" },
  { title: "Adventure Tours", description: "Thrilling outdoor experiences" },
  { title: "Cultural Tours", description: "Immersive cultural experiences" },
];

const themedJourneys = [
  {
    title: "Family-Friendly",
    description: "Fun for all ages",
  },
  {
    title: "Luxury Experience",
    description: "Premium travel",
  },
  {
    title: "Adventure & Nature",
    description: "Outdoor excitement",
  },
  {
    title: "Cultural & Historical",
    description: "Rich heritage",
  },
  {
    title: "Seasonal Tours",
    description: "Time-specific experiences",
  },
];

const cruises = [
  { title: "Mediterranean", description: "Explore the Mediterranean coast" },
  { title: "Caribbean", description: "Tropical island hopping" },
  { title: "Northern Lights", description: "Arctic cruise experiences" },
  { title: "River Cruises", description: "Scenic river journeys" },
];

export const NavigationContents = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("Asia");
  const [selectedSubregion, setSelectedSubregion] = useState<string>("All");
  const [activeSection, setActiveSection] = useState<string | null>(
    "group-holidays"
  );
  return (
    <div
      className="w-[900px] bg-white p-6"
      onMouseLeave={() => setActiveSection(null)}
    >
      {/* Main Section Headers */}
      <div className="flex gap-8 pb-4 mb-4">
        {subDropdown.map((dropdown) => (
          <button
            key={dropdown.id}
            onClick={() => setActiveSection(dropdown.value)}
            className={cn(
              "text-lg font-semibold flex items-center bg-transparent px-2 py-1 rounded",
              activeSection === dropdown.value
                ? "text-black bg-white"
                : "text-gray-500"
            )}
          >
            {dropdown.label}
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[300px]">
        {activeSection === "group-holidays" && (
          <div className="grid grid-cols-4 gap-6">
            {/* Regions Column */}
            <div className="col-span-1 border-r pr-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Regions
              </h4>
              <div className="space-y-1">
                {regions.map((region) => (
                  <button
                    key={region.name}
                    onClick={() => {
                      setSelectedRegion(region.name);
                      setSelectedSubregion("All");
                    }}
                    className={cn(
                      "w-full flex items-center justify-between text-left bg-gray-200 px-3 py-4 text-sm rounded-md transition-colors hover:bg-black hover:text-white",
                      region.name === selectedRegion && "bg-black text-white"
                    )}
                  >
                    {region.name}
                    <CircleChevronRight />
                  </button>
                ))}
              </div>
            </div>

            {/* Subregions & Countries Column */}
            <div className="col-span-3">
              {selectedRegion && (
                <>
                  {/* Subregion Tabs */}
                  <div className="flex gap-2 mb-4 pb-2">
                    {regions
                      .find((r) => r.name === selectedRegion)
                      ?.subregions.map((subregion) => (
                        <button
                          key={subregion.name}
                          onClick={() => setSelectedSubregion(subregion.name)}
                          className={cn(
                            "px-3 py-1 text-sm rounded-md",
                            subregion.name === selectedSubregion
                              ? "bg-black text-white"
                              : "text-gray-600 hover:bg-gray-100"
                          )}
                        >
                          {subregion.name}
                        </button>
                      ))}
                  </div>

                  {/* Countries Grid */}
                  <div className="flex flex-wrap gap-3">
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
                              className="block p-2 text-sm text-gray-700 rounded-md hover:bg-black hover:text-white"
                            >
                              {country}
                            </Link>
                          ))
                      : regions
                          .find((r) => r.name === selectedRegion)
                          ?.subregions.find((s) => s.name === selectedSubregion)
                          ?.countries.map((country) => (
                            <Link
                              key={country}
                              href={`/destinations/${selectedRegion.toLowerCase()}/${country
                                .toLowerCase()
                                .replace(" ", "-")}`}
                              className="block p-2 text-sm text-gray-700 rounded-md hover:bg-black hover:text-white"
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

        {/* Flexi Holidays Content */}
        {activeSection === "flexi-holidays" && (
          <div className="grid grid-cols-4 gap-4">
            {flexiHolidays.map((item) => (
              <Link
                key={item.title}
                href={`/flexi-holidays/${item.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
                className="block p-4 rounded-md hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <div className="text-lg font-medium text-gray-900 mb-1">
                  {item.title}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        )}

        {/* Themed Journeys Content */}
        {activeSection === "themed-journeys" && (
          <div className="grid grid-cols-2 gap-6">
            {/* Themes Column */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Themes</h4>
              <div className="grid grid-cols-2">
                {themedJourneys.map((item) => (
                  <Link
                    key={item.title}
                    href={`/themed-journeys/${item.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block p-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-sm font-medium text-gray-900">
                      {item.title}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Countries Column */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Countries
              </h4>
              <div className="grid grid-cols-4 gap gap-2">
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
                    className="block px-4 py-2 text-sm rounded-md bg-white text-gray-700 border border-gray-200 hover:bg-black hover:text-white transition-colors"
                  >
                    {country}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeSection === "cruise" && (
          <div className="grid grid-cols-4 gap-4">
            {cruises.map((item) => (
              <Link
                key={item.title}
                href={`/cruise/${item.title.toLowerCase().replace(" ", "-")}`}
                className="block p-4 rounded-md hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <div className="text-lg font-medium text-gray-900 mb-1">
                  {item.title}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
