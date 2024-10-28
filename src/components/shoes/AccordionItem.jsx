import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import RangeSlider from "./RangeSlider";
import {useGetCategoryByIdQuery } from "../../store/api";
import { eColors, eSize } from "../../enum/Enum";

const AccordionItem = ({id,setSubId,color,size,handleSliderChange, setSize, setColor, subId, value, setValue}) => {
  const [activeIndex, setActiveIndex] = useState(null);


  const colorArr = eColors;
  const sizeArr = eSize;

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  function handleColor(item){
    const existingItem = color.find((c) => c === item)
    if(existingItem){
      setColor(color.filter(c => c !== item))
    }else{
      setColor([...color, item])
    }
  }

  function handleSize(item){
    const existingItem = size.find((c) => c === item)
    if(existingItem){
      setSize(size.filter(c => c !== item))
    }else{
      setSize([...size, item])
    }
  }

  const { data: category, isLoading: categoryLoad } = useGetCategoryByIdQuery(id);

  const arr = ["Category", "Color", "Size", "Price"];

  return (
    <div>
      {Array.from({ length: 4 }).map((item, index) => (
        <div
          key={index}
          style={{
            borderBottom: index !== index ? "1px solid #ccc" : "",
          }}
          className="mb-[2px] bg-[#f8f8f8]"
        >
          <div
            className="text-[18px] font-bold flex items-center py-[15px] px-5 cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <span
              className="m-0 uppercase font-medium ml-[10px] text-[.875rem] duration-[.3s]"
              style={{
                transform: activeIndex === index ? "rotate(90deg)" : "",
              }}
            >
              <FaChevronRight />
            </span>
            <span className="m-0 uppercase font-medium ml-[10px] text-[.875rem] duration-[.3s]">
              {arr[index]}
            </span>
          </div>

          {activeIndex === index && (
            <div className="px-5 py-[15px] bg-white text-[14px] text-[#333]">
              {activeIndex === 0 ? (
                !categoryLoad &&
                category.Subcategory.map((item, i) => (
                  <div key={i} className="flex mb-2 items-center">
                    <input checked={subId === item.id} onChange={(e) => item.id !== subId ? setSubId(item.id) : setSubId("")} className="mr-[10px]" type="checkbox" />
                    <p className=" capitalize">{item.name}</p>
                  </div>
                ))
              ) : activeIndex === 1 ? (
                colorArr.map((item, i) => (
                  <div key={i} className="flex mb-2 items-center">
                    <input onChange={() => handleColor(item)} className="mr-[10px]" type="checkbox" />
                    <p className=" capitalize">{item}</p>
                  </div>
                ))
              ) : activeIndex === 2 ? (
                sizeArr.map((item, i) => (
                  <div key={i} className="flex mb-2 items-center">
                    <input onChange={() => handleSize(item)} className="mr-[10px]" type="checkbox" />
                    <p className=" capitalize">{item}</p>
                  </div>
                ))
              ) : (
                <RangeSlider handleSliderChange={handleSliderChange} value={value} setValue={setValue} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionItem;
