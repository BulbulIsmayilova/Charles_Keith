import React from "react";
import { HiXMark } from "react-icons/hi2";
import AccordionItem from "./AccordionItem";

function SidebarShoes({ flagScheme }) {
  const { flag, setFlag } = flagScheme;
  return (
    <div className="fixed inset-0 lg:hidden bg-white z-[900]">
      <div>
        <div className="flex shadow-md px-3 py-5 justify-between items-center">
          <h2 className=" text-[18px] font-semibold uppercase">filter</h2>
          <button onClick={() => setFlag(false)} className="text-[#ccc]">
            <HiXMark className="text-[22px]" />
          </button>
        </div>
        <div>
            <AccordionItem />
        </div>
      </div>
    </div>
  );
}

export default SidebarShoes;
