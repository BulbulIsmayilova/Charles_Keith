import React, { useState } from "react";
import BreadCrumbs from "../static/BreadCrumbs";
import ShoesComponent from "./ShoesComponent";

function ShoesFirstsection({data}) {
  const [flag, setFlag] = useState(false)
  return (
    <div className="wrapper">
      <BreadCrumbs txt={data && data.name} />
      <div className="flex flex-col py-2 justify-center items-center lg:gap-[15px] text-center">
        <h1 className="text-[20px] lg:text-[22px] text-center font-semibold lg:font-medium">
          <span>{ data && data.name === "KIDS" ? '' : "WOMEN'S "}</span>{data && data.name}
        </h1>
        <p className="text-[12px] font-light leading-5">
          The right pair of footwear takes your looks to new heights. Our
          stellar range of shoes for women toe the line between{" "}
          <span className={`${flag ? 'inline' : 'hidden'} lg:hidden`}>
            duty and delight. Keep your style game strong with subtle yet{" "}
            <br className="hidden lg:block" /> stylist additions, such as
            mismatched designs, sleek blade heels, feminine ankle straps and
            striking eyelet embellishments. Whatever you are in the mood for,
            our classy and <br className="hidden lg:block" /> comfortable shoes
            will see you through every season in style.
          </span>
          <span className="hidden lg:inline">
            duty and delight. Keep your style game strong with subtle yet{" "}
            <br className="hidden lg:block" /> stylist additions, such as
            mismatched designs, sleek blade heels, feminine ankle straps and
            striking eyelet embellishments. Whatever you are in the mood for,
            our classy and <br className="hidden lg:block" /> comfortable shoes
            will see you through every season in style.
          </span>
          <button className="underline text-[#999]" onClick={() => setFlag(!flag)}>{flag ? 'Read less' : 'Read More...'}</button>
        </p>
      </div>
      {/* <div>
        <div className="flex flex-wrap justify-center items-center gap-[15px] pb-5">
          {Array.from({ length: 6 }).map((item, i) => (
            <ShoesComponent key={i} />
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default ShoesFirstsection;
