import React from "react";
import { Link } from "react-router-dom";

function Category({ txt, item, setSubId, setHover }) {
  return (
    <li
      className={`${
        txt === "header"
          ? "category-header-item"
          : txt === "shoes"
          ? "underline text-[14px] text-[#999] capitalize my-[15px]"
          : txt === "detail"
          ? "flex gap-[10px]"
          : ""
      } cursor-pointer `}
    >
      <Link
        onMouseEnter={() => {
          setSubId(txt === "header" ? item.id : "");
          setHover(true)
        }}
        to={item && `/us/products/${item.id}`}
      >
        {item ? item.name : "salam"}
      </Link>
    </li>
  );
}

export default Category;
