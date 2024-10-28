import React from "react";
import { useNavigate } from "react-router-dom";

function SliderCategoryHome({item}) {
  const navigate = useNavigate()
  
  return (
    <div onClick={() => navigate(`/us/detail/${item.id}`)} className="cursor-pointer bg-white">
      <img className="max-w-full h-auto" src={item.images[0]} alt="bag" />
      <p className="text-[14px] font-light h-[18px] overflow-hidden pb-5 bg-[#ececec] text-[#333] text-center uppercase">{item.name}</p>
    </div>
  );
}

export default SliderCategoryHome;
