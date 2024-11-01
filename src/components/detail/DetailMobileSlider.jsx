import React from "react";
import Slider from "react-slick";

function DetailMobileSlider({arr}) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div id="mobileDetailSlider" className="slider-container !w-full">
      <Slider {...settings}>
        {arr.map((item, i) => (
            <div key={i} className="w-full h-full">
                <img src={item} alt="" className="w-full h-full" />
            </div>
        ))}
      </Slider>
    </div>
  );
}

export default DetailMobileSlider;
