import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

function ProductDetailAccordion({ i, txt , content1, contnet2}) {
  const [flag, setFlag] = useState(true);
  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <div>
        <button
          onClick={() => setFlag(!flag)}
          style={{
            border: "0",
            backgroundColor: "transparent",
            display: "flex",
            alignItems : 'center',
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <FaAngleRight />
          <span>{txt}</span>
        </button>
      </div>
      <div 
      className="transition"
      style={{
        maxHeight : flag ? '0' : '500px',
        overflow : "hidden"
      }}>
        <p className="p-[10px] leading-6">
          {content1}
        </p>
        <p className="p-[10px] leading-6">{contnet2}</p>
      </div>
    </div>
  );
}

export default ProductDetailAccordion;
