import { FaXmark } from "react-icons/fa6";
import Cartitem from "./Cartitem";
import img from "../../assets/google.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick/lib/slider";
import { useRef } from "react";
import ProductSliderCard from "../static/ProductSliderCard";
import { useNavigate } from "react-router-dom";
import { useAllCartQuery, useFilterProductQuery } from "../../store/api";
import { skipToken } from "@reduxjs/toolkit/query";

function SideCart({ cart, setCart }) {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"))

  const { data, isLoading } = useFilterProductQuery({
    page: 1,
    limit: 9,
    sortBy: "price",
    sortOrder: "csa",
    categoryId: 3,
  });

  const { data: cartArr, isLoading: cartLoad } = useAllCartQuery(token ? undefined : skipToken);


  const slider = useRef();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div
      onClick={() => setCart(false)}
      style={{
        visibility: cart ? "visible" : "hidden",
      }}
      className={`${
        cart ? "z-[999] opacity-[1] " : "-z-[1] opacity-0"
      } fixed inset-0 flex justify-end duration-300 bg-[#000000ca]`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white relative pb-32 h-screen overflow-y-auto w-full max-w-[420px]"
      >
        <div>
          <div className="flex fixed top-0 max-w-[420px] w-full bg-white z-[999] right-0 justify-between items-center border-b border-[#ccc] p-5">
            <p className="text-[.875rem] font-normal">1 item(s)</p>
            <button onClick={() => setCart(false)} className="text-[#ccc]">
              <FaXmark className="text-[1.5em]" />
            </button>
          </div>
          <div className="p-3 pt-20">
            <p className="text-center italic text-[.875rem]">
              You are <strong>US$70.01</strong> away from{" "}
              <strong>free standard delivery.</strong>
            </p>
          </div>
          <div className="mb-3">
            {!cartLoad && token && cartArr.length > 0 ? (
              cartArr.map((item, i) => <Cartitem key={i} item={item} side={true} />)
            ) : (
              <div className="h-[50vh] flex justify-center items-center">
                <p>Sebet bosdur</p>
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center px-3 justify-between">
              <h2 className="text-[16px] mb-3 tracking-wider font-semibold">
                YOU MAY ALSO LIKE
              </h2>
              <div>
                <button
                  onClick={() => slider.current.slickPrev()}
                  className="text-[1.3em]"
                >
                  <FaAngleLeft />
                </button>
                <button
                  onClick={() => slider.current.slickNext()}
                  className="text-[1.3em]"
                >
                  <FaAngleRight />
                </button>
              </div>
            </div>
            <div>
              <div className="slider-container">
                <Slider ref={slider} {...settings}>
                  {!isLoading &&
                    data.data.map((item, i) => (
                      <ProductSliderCard key={i} item={item} side={true} />
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bg-white z-[999] border-t border-[#ccc] bottom-0 right-0 max-w-[420px] w-full">
          <div className="p-5">
            <div className="flex justify-between items-center mb-2">
              <p className="text-[1.1em] font-semibold">Estimated Total:</p>
              <p className="text-[1.1em] font-semibold">US$29.00</p>
            </div>
            <div className="flex justify-between gap-1 items-center">
              <button
                onClick={() => {
                  navigate(`/us/cart`);
                  setCart(false);
                }}
                className="w-[49%] uppercase bg-[#333] text-nowrap hover:bg-black duration-300 text-white font-normal py-[.755rem] px-[.9375rem] text-[.775rem] rounded-md"
              >
                View Bag & Checkout
              </button>
              <button
                className="w-[49%] flex cursor-pointer justify-center items-center gap-1 bg-black hover:bg-[#333] duration-300 text-white font-normal py-[.625rem] px-[.9375rem] text-[.775rem] rounded-md"
                disabled={true}
              >
                <img src={img} className="h-4 w-4" alt="" />
                <p className="text-[1.2em]">Pay</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideCart;
