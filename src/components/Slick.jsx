import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="w-full banner h-10 bg-[#f0f0f0] overflow-hidden">
      <Slider {...settings}>
        <div className="item">
          <p>
            Account Holders Enjoy <b>10% Off*</b> Full-Priced Items
          </p>
        </div>
        <div className="item">
          <p>Treat Someone Special, Send A Gift Card Today</p>
        </div>
        <div className="item">
          <p>
            <b>Free Standard Delivery</b> on All Orders Above US$120
          </p>
        </div>
        <div className="item">
          <p>
            <b>Students</b> Enjoy 15% Off Full-Priced Items
          </p>
        </div>
        <div className="item">
          <p>
            <b>Youth & Essential Workers</b> Enjoy 15% Off Full-Priced Items
          </p>
        </div>
        <div className="item">
          <p>Buy Now, Pay Later with Afterpay</p>
        </div>
      </Slider>
    </div>
  );
}

export default Slick;
