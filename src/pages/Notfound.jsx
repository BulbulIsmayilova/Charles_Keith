import React from "react";
import ShoesSliderCard from "../components/static/ShoesSliderCard";
import { nanoid } from "@reduxjs/toolkit";

function Notfound() {
  return (
    <div className="w-[80%] mb-[40px] m-auto pt-[20px] ">
      <div className="border border-[#F0F0F0] bg-[#F0F0F0] py-[50px]">
        <h1 className="text-[24px] uppercase text-center font-semibold">
          SORRY, THE PAGE YOU'RE LOOKING FOR NO LONGER EXISTS.
        </h1>
        <p className="text-[18px] text-center leading-[30px]">
          Try some of our recommendations below, or use the search bar to find
          what you're looking for.
        </p>
      </div>
      <div className="mt-[40px] border-t border-[#CCCCCC]">
        <div className="pt-[40px] pb-[25px] text-center font-semibold text-[20px]">
          <h4>Trending Now</h4>
        </div>
        <div className="flex flex-wrap w-full">
          {Array.from({ length: 10 }).map((item, i) => (
            <div
              id="detailcards"
              className="lg:w-[20%] md:w-[25%] w-[50%] relative"
              key={nanoid()}
            >
              <ShoesSliderCard slm={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notfound;
