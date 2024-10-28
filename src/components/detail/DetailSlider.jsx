import Slider from "react-slick";
import { useRef } from "react";

function DetailSlider({arr}) {
  const sliderRef = useRef(null);
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img className="w-10 h-10" src={`${arr[i]}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 900,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div onWheel={handleWheel} className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {arr.map((item, i) => (
          <div  key={i}>
            <img src={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DetailSlider;
