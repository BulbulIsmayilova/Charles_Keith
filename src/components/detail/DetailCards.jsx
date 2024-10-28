import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import ShoesSliderCard from "../static/ShoesSliderCard";
import { useFilterProductQuery } from "../../store/api";

function DetailCards() {
  const { data, isLoading } = useFilterProductQuery({
    page: 5,
    limit: 10,
    sortBy: "price",
    sortOrder: "csa"
  });
  return (
    <div className="flex flex-col">
      <div>
        <h3 className="text-center text-[18px] font-medium pb-5">
          You May Also Like
        </h3>
      </div>
      <div className="flex flex-wrap w-full">
        {!isLoading && data.data.map((item, i) => (
          <div
            id="detailcards"
            className="lg:w-[20%] md:w-[25%] w-[50%] relative"
            key={nanoid()}
          >
            <ShoesSliderCard item={item} slm={true} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailCards;
