import React from "react";
import ThirdCard from "./ThirdCard";
import img1 from '../../assets/home/1.webp'
import img2 from '../../assets/home/2.webp'
import img3 from '../../assets/home/3.webp'
import img4 from '../../assets/home/4.webp'
import img5 from '../../assets/home/5.webp'
import img6 from '../../assets/home/6.webp'

const arr = [img1, img2, img3, img4, img5, img6]
function ThirdSection() {
  return (
    <div className="third-container">
        {arr.map((item, i) => (
          <ThirdCard item={item} key={i} />
        ))}
        <div className="buttondiv flex justify-center items-center">
            <button className=" hover:bg-black hover:text-white uppercase mt-[30px] mb-20 bg-white rounded-[5px] py-[11px] px-[30px] font-light border border-[#333] duration-[.3s]" >View all</button>
        </div>
    </div>
  );
}

export default ThirdSection;
