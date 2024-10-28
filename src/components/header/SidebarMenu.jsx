import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function SidebarMenu({side, setSide}) {
  return (
    <div className={`${side ? 'z-[999] translate-x-0' : 'translate-x-[300%] z-[-1]'} fixed flex inset-0 lg:hidden duration-300`}>
      <div onClick={() => setSide(false)} className="h-full w-[30%] bg-[#00000080]"></div>
      <div className="h-full w-[70%] overflow-y-auto bg-white">
        <div className="p-4 shadow-md">
          <div className="flex mb-2 justify-between items-center">
            <button className=" uppercase">
              <Link
                to={`/`}
                className="flex text-[14px] font-medium text-[#333] items-center gap-1"
              >
                Sign in
                <FaAngleRight />
              </Link>
            </button>
            <button onClick={() => setSide(false)}>
              <MdClose className="text-[1.4em]" />
            </button>
          </div>
          <div>
            <button>
              <Link className="flex items-center gap-1" to={`/`}>
                <CiHeart />
                <span className="text-[14px] font-normal underline">
                  Wishlist
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className="px-4">
          <ul>
            {Array.from({ length: 13 }).map((_, i) => (
              <li key={i}>
                <Link
                  className="flex font-normal text-[14px] items-center h-[50px] border-b border-[#f0f0f0] uppercase"
                  to={"/"}
                >
                  salam
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#333] px-4">
          <div className="flex h-14 items-center">
            <p className="text-white underline text-[12px] pr-2 border-r border-[#e5e7eb]">
              United States Of America (EN), US $
            </p>
            <IoLocationOutline className="w-5 text-white h-5 pl-2 mr-[4px]" />
            <span className="cursor-pointer text-[12px] text-white underline">
              Find a store
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
