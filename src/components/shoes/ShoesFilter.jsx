import React from "react";

function ShoesFilter({ setView, view, flagScheme }) {
  const {flag, setFlag} = flagScheme
  return (
    <div className="flex justify-between items-center">
      <div className="pl-5 lg:pl-0">
        <button onClick={() => setFlag(true)} className="flex bg-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M1 4H4M4 4C4 5.65685 5.34315 7 7 7C8.65685 7 10 5.65685 10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4ZM1 14H7M16 14H19M16 14C16 15.6569 14.6569 17 13 17C11.3431 17 10 15.6569 10 14C10 12.3431 11.3431 11 13 11C14.6569 11 16 12.3431 16 14ZM13 4H19"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <p className="px-3 text-[.875rem] font-medium uppercase">Filter</p>
        </button>
      </div>
      <div className="hidden lg:block"> 
        <p className="text-[#999] italic text-[.875rem] font-normal"> Showing 1 - 16 of 1,046 item(s)</p>
      </div>
      <div className="uppercase hidden lg:block">
        <span className="text-[#333] text-[12px]">View by:</span>
        <span className="ml-[10px] tracking-[10px]">
          <button className="pl-[10px] text-[#999] text-[.875rem]"
            style={{
              color: view === 3 ? "black" : "",
            }}
            onClick={() => setView(3)}
          >
            3
          </button>
          <button className="pl-[10px] text-[#999] text-[.875rem]"
            style={{
              color: view === 4 ? "black" : "",
            }}
            onClick={() => setView(4)}
          >
            4
          </button>
          <button className="pl-[10px] text-[#999] text-[.875rem]"
            style={{
              color: view === 6 ? "black" : "",
            }}
            onClick={() => setView(6)}
          >
            6
          </button>
        </span>
      </div>
    </div>
  );
}

export default ShoesFilter;
