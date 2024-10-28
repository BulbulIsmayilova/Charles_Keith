import React from "react";
import { Link } from "react-router-dom";

function BreadCrumbs({txt, sub}) {
  return (
    <div className="url">
      <ul className="flex">
        <li className="px-[10px] cursor-pointer font-normal text-[0.875rem]">
          <Link className="text-black" to="/us">Home</Link>
        </li>
        <li className="px-[10px] border-l border-[#ccc] cursor-pointer font-normal text-[0.875rem]" style={{
            borderRight : sub ? '1px solid #ccc' : ''
        }}>         
          <p style={{textTransform : "capitalize"}} className="text-black text-[12px] capitalize" >{txt}</p>
        </li>
        <li className="px-[10px] cursor-pointer font-normal text-[0.875rem]" style={{
            display : sub ? 'block' : 'none'
        }}>
          <p>{sub}</p>
        </li>
      </ul>
    </div>
  );
}

export default BreadCrumbs;
