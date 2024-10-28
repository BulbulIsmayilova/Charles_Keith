import React, { useEffect, useState } from "react";
import ShoesFilter from "./ShoesFilter";
import AccordionItem from "./AccordionItem";
import ShoesSliderCard from "../static/ShoesSliderCard";
import { useFilterProductQuery } from "../../store/api";
import { debounce, Pagination } from "@mui/material";

function ShoesContainer({ flagScheme, id }) {
  const [view, setView] = useState(window.innerWidth <= 1024 ? 2 : 3);
  const [num, setNum] = useState(window.innerWidth <= 1024 ? 50 : 33.33);
  const [tempValue, setTempValue] = useState([0, 500]);
  const [value, setValue] = useState([0, 500]);
  const [subId, setSubId] = useState(0);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [page, setPage] = useState(1);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const { data, isLoading } = useFilterProductQuery({
    page: page,
    limit: 9,
    sortBy: "price",
    sortOrder: "csa",
    categoryId: id,
    subcategoryId: subId ? subId : "",
    color: color.length > 0 ? color : "",
    size: size.length > 0 ? size : "",
    minPrice: value[0],
    maxPrice: value[1],
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      setNum(50);
    };

    const debounceResize = debounce(handleResize, 300);
    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, []);

  useEffect(() => {
    setNum(100 / view);
  }, [view]);

  const handleSliderChange = (event, newValue) => {
    setTempValue(newValue);
  };

  return (
    <div className="wrapper">
      <div className="my-5">
        <ShoesFilter flagScheme={flagScheme} setView={setView} view={view} />
      </div>
      <div className="flex">
        <div className="w-3/12 border-[#f0f0f0] hidden lg:block mb-5">
          <AccordionItem
            size={size}
            setSize={setSize}
            color={color}
            setColor={setColor}
            setSubId={setSubId}
            handleSliderChange={handleSliderChange}
            subId={subId}
            value={tempValue}
            setValue={setValue}
            id={id}
          />
        </div>
        <div className="pl-5 lg:w-9/12 w-full flex flex-wrap">
          {!isLoading &&
            data.data.map((item, i) => (
              <div
                style={{
                  width: `${num}%`,
                }}
                key={i}
              >
                <ShoesSliderCard item={item} />
              </div>
            ))}
          <div className="flex justify-center w-full my-4">
            {!isLoading && (
              <Pagination
                page={page}
                onChange={(event, value) => setPage(value)}
                count={Math.ceil(data.meta.totalProducts / 9)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoesContainer;
