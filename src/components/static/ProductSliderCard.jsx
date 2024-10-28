import { nanoid } from "@reduxjs/toolkit";
import ProductCardImgSlider from "../home/ProductCardImgSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddCartMutation } from "../../store/api";
import { toast, ToastContainer } from "react-toastify";

function ProductSliderCard({ item }) {
  const slider = useRef();

  const token = JSON.parse(localStorage.getItem("token"));

  const [activeColor, setActiveColor] = useState(-1);
  const [color, setColor] = useState("");

  const [activeSize, setActiveSize] = useState(-1);
  const [size, setSize] = useState("");

  const navigate = useNavigate();

  const [addCart, { data, isSuccess, error, isError }] = useAddCartMutation();

  function chooseSize(index, item) {
    setActiveSize(index);
    setSize(item);
  }
  function chooseColor(index, item) {
    setActiveColor(index);
    setColor(item);
  }

  function handleAddCart() {
    if (token) {
      if (color.length > 0 && size.length > 0) {
        let obj = {
          productId: item.id,
          count: 1,
          color: color.toUpperCase(),
          size: size.toUpperCase(),
        };
        addCart(obj);
      } else {
        toast.info("Please select a size or color", {
          autoClose: 900,
        });
      }
    } else {
      navigate(`/us/login`);
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Added to Cart");
    }
    if (isError) {
      console.log(error);
    }
  }, [data, isSuccess, isError]);

  return (
    <>
      <div className="secondslider-container">
        <div
          onClick={() => navigate(`/us/detail/${item.id}`)}
          className="secondslideritem cursor-pointer"
        >
          <ProductCardImgSlider item={item ? item : undefined} ref={slider} />
          <button
            onClick={() => slider.current.slickPrev()}
            className="prev-arrow"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => slider.current.slickNext()}
            className="next-arrow"
          >
            <IoIosArrowForward />
          </button>
        </div>
        <div className="secondslider-position">
          <p className="secondslider-name">
            {item
              ? item.name
              : "Metallic Stiletto-Heel Ankle-Strap Sandals - Black Box"}
          </p>
          <div className="secondslider-content">
            <div className="color-container">
              <ul>
                {item?.Colors.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => chooseColor(i, item)}
                    className={`border ${
                      activeColor === i && "!border-black"
                    } border-gray-400`}
                  >
                    <div
                      className={`${
                        item.toLowerCase() === "black" && "!bg-black"
                      } bg-${item.toLowerCase()}-500`}
                    ></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="secondslider-size">
              {item?.Size.map((item, i) => (
                <div
                  onClick={() => chooseSize(i, item)}
                  className={`text-[14px] ${
                    activeSize === i && "!border-black"
                  }`}
                  key={nanoid()}
                >
                  {item}
                </div>
              ))}
            </div>
            <div>
              <button onClick={handleAddCart}>Add to bag</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSliderCard;
