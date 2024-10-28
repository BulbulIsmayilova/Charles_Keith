import React from "react";
import { BsBox2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function SideAccount({ account, setAccount }) {
  function handleOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  }

  const navigate = useNavigate();

  return (
    <div
      className={`${
        account ? "z-[999] translate-x-0" : "translate-x-[300%] z-[-1]"
      } fixed lg:flex hidden inset-0 duration-300`}
    >
      <div className="h-full w-[75%] bg-[#000000ae]"></div>
      <div className="h-ful w-[25%] bg-white">
        <div className="flex justify-between items-center p-[20px]">
          <h1 className="text-[22px] text-start leading-7 font-semibold tracking-wide uppercase">
            Hi, welcome!
          </h1>
          <button onClick={() => setAccount(false)}>
            <HiOutlineXMark className="w-[29px] h-[29px] text-[#ccc]" />
          </button>
        </div>
        <div className="h-[11px] bg-[#f0f0f0]"></div>
        <div className="ms-[20px] py-[15px] me-[20px] ">
          <div className="flex text-[16px] font-normal mb-[15px] pb-4 border-b border-[#f0f0f0]">
            <button className="mr-[16px] underline ">
              <BsBox2 className="w-[18px] h-[18px]" />
            </button>
            <button className="hover:underline">Orders</button>
          </div>
          <div className="flex text-[16px] font-normal mb-[15px] pb-4 border-b border-[#f0f0f0]">
            <button className="mr-[16px]">
              <CgProfile className="w-[20px] h-[20px]" />
            </button>
            <button
              onClick={() => {
                navigate(`/us/profile`);
                setAccount(false)
              }}
              className=" hover:underline"
            >
              Profile
            </button>
          </div>
          <div className="flex text-[16px] font-normal mb-[15px] pb-4 border-b border-[#f0f0f0]">
            <button className="mr-[16px] ">
              <IoMdHeartEmpty className="w-[22px] h-[22px]" />
            </button>
            <button
              onClick={() => {
                navigate(`/us/wishlist`);
                setAccount(false)
              }}
              className="hover:underline"
            >
              Wishlist
            </button>
          </div>
          <div className=" text-[16px] font-normal pl-8 pb-3">
            <button onClick={handleOut} className=" hover:underline">
              Sign Out
            </button>
          </div>
        </div>

        <div className="h-[11px] bg-[#f0f0f0]"></div>
      </div>
    </div>
  );
}

export default SideAccount;
