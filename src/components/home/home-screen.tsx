"use client";
import React from "react";
import Navbar from "../common/nav-bar";
import HeroSection from "./hero-section";
import TourSession from "./tours-session";
import { Theme } from "./themes";
import TravelWithEU from "./travel-with-eu";
import { Adventure } from "./adventure";
import { Promotion } from "./promotion";
import { Footer } from "../common/footer";

const HomeScreen = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <Navbar />
      <HeroSection />
      <TourSession />
      <Theme />
      <TravelWithEU />
      <Adventure />
      <Promotion />
      <Footer />
    </div>
  );
};

export default HomeScreen;
