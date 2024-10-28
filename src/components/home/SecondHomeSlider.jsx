import React from "react";
import Slider from "react-slick";
import { nanoid } from "@reduxjs/toolkit";
import ProductSliderCard from "../static/ProductSliderCard";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useFilterProductQuery } from "../../store/api";

function SecondHomeSlider() {
  const slider = useRef();

  const { data, isLoading } = useFilterProductQuery({
    page: 1,
    limit: 10,
    sortBy: "price",
    sortOrder: "csa",
    categoryId: 1,
  });


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="!overflow-hidden pt-[50px] pb-5">
      <div className="flex justify-between items-center mb-5 px-[30px]">
        <p className=" uppercase font-semibold">Most wanted</p>
        <div className="flex items-center">
          <button
            className="bg-transparent text-black text-[1.8em]"
            onClick={() => slider.current.slickPrev()}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="bg-transparent text-black text-[1.8em]"
            onClick={() => slider.current.slickNext()}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Slider ref={slider} {...settings}>
        {!isLoading && data.data.map((item, i) => (
          <div
            className={`${i !== 0 ? "px-[2px]" : "pr-[2px]"}`}
            key={nanoid()}
          >
            <ProductSliderCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SecondHomeSlider;
