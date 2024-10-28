import React, { useEffect, useState } from "react";
import Slick from "../Slick";
import logo from "../../assets/logo.svg";
import { IoHeart, IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import Category from "../Category";
import { BsBasket3 } from "react-icons/bs";
import Signin from "../formik/Signin";
import { Link, useNavigate } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import SidebarMenu from "./SidebarMenu";
import SideCart from "../cart/SideCart";
import SideAccount from "./SideAccount";
import {
  useAllCartQuery,
  useAllCategoryQuery,
  useGetCategoryByIdQuery,
  useSearchProductQuery,
} from "../../store/api";
import { skipToken } from "@reduxjs/toolkit/query";
import { FaXmark } from "react-icons/fa6";
import SearchList from "../static/SearchList";
import { useSelector } from "react-redux";

function Header() {
  const [placeholder, setPlaceholder] = useState("Search");
  const [flag, setFlag] = useState(false);
  const [hover, setHover] = useState(false  )
  const [subId, setSubId] = useState('')

  const token = JSON.parse(localStorage.getItem("token"));

  const { data: cartArr, isLoading: cartLoad } = useAllCartQuery(
    token ? undefined : skipToken
  );

  const  wishArr  = useSelector(state => state.wish.wishArr)

  const [side, setSide] = useState(false);
  const [cart, setCart] = useState(false);
  const [account, setAccount] = useState(false);
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if(value.length > 1){
      setSearch(true)
    }
  }, [value])

  const {data : sub , isLoading : ld} = useGetCategoryByIdQuery(subId || undefined, { skip: !subId })

  const { data: res, isLoading: resLoad } = useSearchProductQuery(value);

  const { data, isLoading } = useAllCategoryQuery();

  const navigate = useNavigate();

  function showAccount() {
    if (token) {
      setAccount(true);
    } else {
      setFlag(!flag);
    }
  }

  function handleShowCart() {
    setCart(true);
  }

  return (
    <>
      <SideAccount account={account} setAccount={setAccount} />
      <SideCart cart={cart} setCart={setCart} />
      <SidebarMenu side={side} setSide={setSide} />
      <header onMouseLeave={() => {
        setSubId('')
        setHover(false)
      }} 
      className="sticky left-0 right-0 top-0 z-[900] bg-white lg:pb-[10px]">
        <div id="mobNav" className="py-4 lg:hidden">
          <div className="wrapper">
            <div className="flex items-center justify-between">
              <div>
                <Link to="/us">
                  <img
                    src={logo}
                    className="inline-block h-5 max-w-[200px]"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="flex gap-4">
                <button>
                  <CiSearch className="text-[1.2em]" />
                </button>
                <button>
                  <BsBasket3 className="text-[1.1em]" />
                </button>
                <button onClick={() => setSide(true)}>
                  <HiBars2 className="text-[1.2em]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Slick />
        </div>
        <div className="hidden relative lg:block">
          <div className="wrapper">
            <div className="flex items-center justify-between">
              <div>
                <Link to="/us">
                  <img
                    src={logo}
                    className="inline-block h-5 max-w-full"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="signin font-normal text-[12px] flex justify-between items-center leading-6 text-[#6f6f6f] p-5 relative">
                <span className="hover:underline cursor-pointer pr-2 border-r border-[#e5e7eb]">
                  United States of America (EN), US $
                </span>
                <IoLocationOutline className="w-4 h-4 mx-[5px]" />
                <button
                  onClick={() => navigate(`/us/stores`)}
                  className="hover:underline pr-2 border-r border-[#e5e7eb]"
                >
                  Find a store
                </button>
                <button onClick={showAccount} className="hover:underline pl-2">
                  {token ? "My account" : "Sign in"}
                </button>
                {flag && (
                  <div
                    className="border min-w-[350px] mt-[5px] min-h-[380px] border-[#e6e6e6] rounded-[5px] absolute top-[80%] z-[900] right-0 bg-[#fff]"
                    id="signFormik"
                  >
                    <div className=" relative">
                      <div className="top-0 right-0 -translate-y-[10px] -translate-x-[19px] absolute border-b-[10px] border-b-[#fff] border-r-[10px] border-r-transparent border-l-[10px] border-l-transparent"></div>
                      <Signin />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <ul className="flex justify-between items-center gap-10 uppercase">
                  {!isLoading &&
                    data.map((item, i) => (
                      <Category setHover={setHover} setSubId={setSubId} key={i} item={item} txt={"header"} />
                    ))}
                </ul>
              </div>
              <div className="flex items-center gap-[15px] text-[18px]">
                <div className="flex justify-between items-center relative w-full max-w-[200px] border-0">
                  <CiSearch className="absolute left-[10px] top-[50%] translate-y-[-50%] text-[18px] text-[#555] cursor-pointer" />
                  <input
                    className="w-full focus:border-[#000] py-[5px] px-10 text-[14px] border border-[#ccc] rounded-[5px] block outline-none"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    onFocus={() => setPlaceholder("Serach for...")}
                    onBlur={() => setPlaceholder("Search")}
                  />
                  <FaCamera className="absolute top-[50%] right-[10px] translate-y-[-50%] text-[16px] text-[#ccc] cursor-pointer" />
                  <div className={`absolute ${search ? "block" : 'hidden'} top-[170%] right-0 -left-24 min-w-[370px] rounded-md p-5 bg-white z-[999]`}>
                    <div>
                      <div className="flex items-center pb-1 border-b justify-between">
                        <h2 className="text-[.875rem]">
                          Results
                        </h2>
                        <button onClick={() => setSearch(false)}>
                          <FaXmark className="text-[#999] text-[1em]" />
                        </button>
                      </div>
                      <div>
                        <ul className="h-[440px] overflow-y-auto">
                          {!resLoad && (
                            res.map((item, i) => (
                              <li className="py-4 border-b" key={i}>
                                <SearchList setValue={setValue} setSearch={setSearch} item={item} />
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={() => navigate(`/us/wishlist`)}>
                  {wishArr.length > 0 ? <IoHeart className="text-[1.2em] text-black cursor-pointer" /> : <IoMdHeartEmpty className="text-[1.2em] cursor-pointer" />}
                </div>
                <div>
                  <button className="relative" onClick={handleShowCart}>
                    <BsBasket3 className="text-[1.2em]" />
                    {!cartLoad && token ? (
                      <span className="absolute text-[9px] top-2 right-2 translate-y-[10%] translate-x-[5%]">
                        {cartArr.length}
                      </span>
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div 
          style={{
            zIndex : hover ? '999' : '-1',
            visibility : hover ? 'visible' : 'hidden',
            opacity : hover ? '1' : '0'
          }}
          className="absolute duration-300 min-h-[300px] bg-white top-[101%] right-0 left-0">
            <div className="wrapper">
              <div>
                <h2 className="py-2 underline font-semibold">{!ld && sub?.name}</h2> 
                <ul>
                  {!ld && (
                    sub?.Subcategory.map((item, i) => (
                      <li className="mb-2 cursor-pointer hover:underline" key={i}>{item.name}</li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
