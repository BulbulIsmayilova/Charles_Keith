import React from "react";

function ShoesCategories({data}) {
  return (
    <div className="w-full block border border-[#f0f0f0] border-l-0 border-r-0">
      <div className="wrapper">
        <ul className="flex overflow-x-auto gap-[22px]">
          {data && data?.Subcategory.map((item, i) => (
            <li key={i} className=" uppercase text-[14px] text-[#9a9595] py-2">{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoesCategories;
