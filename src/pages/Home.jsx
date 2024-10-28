import React from "react";
import HeroSection from "../components/home/HeroSection";
import Slider from '../components/home/Slider'
import FirstSection from "../components/home/FirstSection";
import SecondSection from "../components/home/SecondSection";
import ThirdSection from "../components/home/ThirdSection";
import SecondHomeSlider from "../components/home/SecondHomeSlider";

function Home() {
  return (
    <main>
      <HeroSection />
      <Slider />
      < FirstSection />
      <SecondHomeSlider/>
      <SecondSection />
      <ThirdSection/>
    </main>
  );
}

export default Home;
