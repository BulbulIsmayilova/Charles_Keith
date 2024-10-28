import React from "react";
import BreadCrumbs from "../components/static/BreadCrumbs";
import WishListComp from "../components/wishlist/WishListComp";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const wishArr = useSelector((state) => state.wish.wishArr);
  const navigate = useNavigate()

  return (
    <div className="pb-10">
      <div className="wrapper">
        <div className="xl:w-[70%] mx-auto">
          <div className="py-5 mb-4">
            <BreadCrumbs txt={"Wishlist"} />
          </div>
          <div className="relative mb-4">
            <h2 className="text-center text-[24px] font-semibold uppercase">
              Wishlist
            </h2>
            <span className="text-[.875rem] absolute right-0 top-1">
              {wishArr.length} product(s)
            </span>
          </div>
          <div className="overflow-hidden">
            <div style={{
                display : wishArr.length === 0 && "none"
            }} className="bg-[#f0f0f0] py-[15px] mb-4 px-5">
              <h2 className=" uppercase text-[.875rem] font-semibold">
                Available now
              </h2>
            </div>
            <div className={`${wishArr.length === 0 && 'hidden'}`}>
              {wishArr.map((item, i) => (
                <WishListComp item={item} key={i} />
              ))}
            </div>
            <div className={`${wishArr.length > 0 && 'hidden'}  flex flex-col items-center justify-center`}>
                <p className="text-[.875rem] mb-4">Your wishlist is currently empty. Sign in or create an account to save your wishlist across all your devices.</p>
                <button onClick={() => navigate(`/us/products/1`)} className="py-3 hover:bg-black duration-300 text-[14px] uppercase px-8 bg-[#333] text-white rounded-md">
                    Continue Shopping
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
