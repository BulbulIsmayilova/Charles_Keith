import React from "react";
import Slider from "react-slick";
import SliderCategoryHome from "./SliderCategoryHome";
import { nanoid } from "@reduxjs/toolkit";
import { useFilterProductQuery } from "../../store/api";

function Responsive() {
  const { data, isLoading } = useFilterProductQuery({
    page: 2,
    limit: 10,
    sortBy: "price",
    sortOrder: "csa",
    categoryId: 2,
  });

  var settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    pauseOnFocus: false,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full my-0 mx-auto py-[2px] overflow-hidden">
      <Slider {...settings}>
        {!isLoading && data.data.map((item, i) => (
          <div key={nanoid()}>
            <SliderCategoryHome item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
