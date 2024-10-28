import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAddCartMutation } from "../../store/api";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setWishArr } from "../../store/WishlistSlice";

function DetailInfo({ data }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch()

  const [activeColor, setActiveColor] = useState(-1);
  const [color, setColor] = useState("");

  const [activeSize, setActiveSize] = useState(-1);
  const [size, setSize] = useState("");

  const navigate = useNavigate();

  const  wishArr  = useSelector(state => state.wish.wishArr)

  const [addCart, { isSuccess, error, isError }] = useAddCartMutation();

  const isInWishList = wishArr.some(wishItem => wishItem.id === data.id); 

  const [flag, setFlag] = useState(isInWishList); 

  useEffect(() => {
    setFlag(isInWishList);
  }, [isInWishList]);


  function handleAddWish() {
    if (!token) {
      toast.error("Please register");
      return;
    }
    dispatch(setWishArr(data));
    setFlag(!flag);
  }

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
          productId: data.id,
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
    <div className="xl:flex w-full xl:flex-col xl:gap-[30px] xl:pr-20">
      <div className="w-full xl:flex xl:justify-end">
        <span className="hidden xl:block">
          <IoShareOutline />
        </span>
      </div>
      <div className="detailtext">
        <div>
          <h4 className="text-[16px] font-medium py-[5px]">{data.name}</h4>
          <h4 className="text-[16px] font-medium py-[5px]">US${data.price}</h4>
        </div>
        <span className="text-[#999] text-[0.76rem] font-normal leading-6">
          (Includes Duties & Taxes)
        </span>
        <div className="py-[15px] mb-[10px]">
          <p className="text-[#666] text-[0.76rem] font-light py-[3px]">
            Or 6 payments of US$11.00 with PayPal Credit
          </p>
          <p className="text-[#666] text-[0.76rem] font-light py-[3px]">
            Or 4 payments of US$16.50 with{" "}
          </p>
          <p className="text-[#666] text-[0.76rem] font-light py-[3px]">
            4 interest-free payments of $16.50 with Klarna.{" "}
          </p>
        </div>
        <div className="color">
          <div className="color-text">
            <p>
              Colour: <b>Beige</b>
            </p>
          </div>
          <div className="color-container">
            <ul className="!justify-start">
              {data.Colors.map((item, i) => (
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
        </div>
        <div>
          <div className="size-info">
            <div>
              <p>
                Size: <b>Select Size</b>
              </p>
            </div>
            <div className="size-infobtn">
              <button>Size Guide</button>
            </div>
          </div>

          <div
            id="secondslider"
            className="secondslider-size !justify-start xl:justify-center"
          >
            {data.Size.map((item, i) => (
              <div
                onClick={() => chooseSize(i, item)}
                className={`text-[12px] ${activeSize === i && "!border-black"}`}
                key={nanoid()}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="detail-btn">
            <button onClick={handleAddCart}>Add to Bag</button>
          </div>
          <div className="wishlist-container">
            <div className="wishlist-icon">
              <button onClick={handleAddWish}>
                {isInWishList ? <IoIosHeart style={{ fontSize: "1.5em" }} className="text-black" /> : <IoIosHeartEmpty style={{ fontSize: "1.5em" }} />}
                <span>Add to Wishlist</span>
              </button>
            </div>
            <div className="product-detailbtn">
              <button>Go to Product Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailInfo;
