import React from "react";
import stone from "../../assets/home/stone.jpg";
import EastWestBags from "../../assets/home/EastWestBags.jpg";
import Boots from "../../assets/home/Boots.webp";
import INITIAL from "../../assets/home/INITIAL.jpg";

function SecondSection() {
  return (
    <div className="secondsec-grid">
      <div className="item1 hidden md:block overflow-hidden relative">
        <div className=" absolute top-[50%] translate-y-[-50%] w-[70%] flex flex-col items-center justify-center gap-[10px]">
          <h1 className="text-white text-center text-[20px] font-light">Introducing Re-Purpose</h1>
          <p className="text-[11px] leading-6 text-white text-center ">
            A sustainable initiative with ThredUp that turns your
            <br className="text-[11px] leading-6 text-white text-center " />
            pre-loved fashion items into CHARLES & KEITH shopping credits
          </p>
          <span className="border-b border-white cursor-pointer text-white text-center ">FIND OUT MORE</span>
        </div>
        <img src={stone} alt="" />
      </div>
      <div className=" text-white border-white overflow-hidden relative">
        <h3 className=" absolute bottom-10 left-4">East West Bags</h3>
        <p className=" absolute bottom-4 left-4 border-b text-[14px] font-normal">SHOP THE EDIT</p>
        <img src={EastWestBags} alt="shoes" />
      </div>
      <div className="overflow-hidden relative">
        <h3 className=" absolute bottom-10 left-4">BOOTS</h3>
        <p className=" absolute bottom-4 left-4 border-b border-black text-[14px] font-normal">SHOP NOW</p>
        <img src={Boots} alt="shoes" />
      </div>
      <div className=" text-white border-white  overflow-hidden relative">
        <h3 className=" absolute bottom-10 left-4">L'INITIAL</h3>
        <p className=" absolute bottom-4 left-4 border-b text-[14px] font-normal">SHOP THE EDIT</p>
        <img src={INITIAL} alt="shoes" />
      </div>
      <div className="item3 py-[50px] flex flex-col items-center justify-center gap-5 overflow-hidden relative">
        <h2 className="text-center text-[18px] font-medium text-[#333]">#ImwithCharlesKeith</h2>
        <div className="flex justify-center items-center gap-5">
          <span className="cursor-pointer border-b border-black text-[#333] text-[13px]">SHOP OUR INSTAGRAM</span>
          <span className="cursor-pointer border-b border-black text-[#333] text-[13px]">JOIN OUR COMMUNITY</span>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
