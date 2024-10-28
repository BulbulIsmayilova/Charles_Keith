import { nanoid } from "@reduxjs/toolkit";
import Slider from "react-slick";
import Stilletto from "../../assets/home/Stilletto.webp";
import { forwardRef } from "react";

const ProductCardImgSlider = forwardRef((props, ref) => {
  const {slm, item} = props
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider ref={ref} {...settings}>
        {item?.images.map((item, i) => (
          <div key={nanoid()}>
            <img
              className="w-full"
              style={{
                height : slm ? "300px": ""
              }}
              src={item}
              alt="stilletto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
})

export default ProductCardImgSlider;
