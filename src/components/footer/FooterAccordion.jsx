import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

function FooterAccordion({ txt, des }) {
  const [flag, setFlag] = useState(false);

  return (
    <div className="mb-2">
      <div>
        <button
          onClick={() => setFlag(!flag)}
          className="w-full z-10 flex gap-2 items-center"
        >
          <FaAngleRight
            className={`${
              flag ? "rotate-[90deg]" : ""
            } text-[#999] duration-300`}
          />
          <span className="text-[.875rem] font-semibold">{txt}</span>
        </button>
      </div>
      <ul
        className={`${
          flag
            ? "min-h-[200px] opacity-[1] duration-300 py-2 px-6 z-[1]"
            : "h-0  opacity-0 -z-[1]"
        }  relative`}
      >
        {des?.map((item, i) => (
          <li className="mb-2 text-[15px] font-semibold" key={i}>
            {item.des ? item.des : item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterAccordion;
