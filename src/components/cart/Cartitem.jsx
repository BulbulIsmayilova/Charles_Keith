import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useDeleteCartMutation, useUpdateCartMutation } from "../../store/api";

function Cartitem({ side , item}) {

  const [deleteCart] = useDeleteCartMutation()

  const [updateCart, {isSuccess}] = useUpdateCartMutation()

  const [count, setCount] = useState(item.count)

  function handleDelete(){
    deleteCart(item.id)
  }

  useEffect(() => {
    if(count !== item.count){
      updateCart({productId : item.productId, count: count})
    }                                                                                                                                                                                                            
  }, [count])

  return (
    <div className={`p-5 ${side && '!p-2 !py-1'} pr-0 relative`}>
      <div className={`absolute ${!side && '!hidden'} bottom-6 right-6`}>
        <div className={`flex gap-2 items-center mb-2 lg:mb-0 `}>
          <p className="text-[.775rem]">Qty:</p>
          <select value={count} onChange={(e) => setCount(Number(e.target.value))} className="outline-none rounded-sm p-[.2em] border border-[#ccc]">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button onClick={handleDelete}>
            <BsTrash />
          </button>
        </div>
      </div>
      <div
        className={`${
          side && "!items-start gap-2"
        } flex items-start relative lg:static lg:items-center`}
      >
        <div className={`lg:w-[15%] ${side && "!w-[30%]"} w-[30%]`}>
          <img
            className={`lg:w-[120px] ${
              side && "!h-32"
            } w-[75px] h-[100px] lg:h-[130px]`}
            src={item.product_id.images[0]}
            alt=""
          />
          <span className="inline-block lg:hidden w-[75px] text-center mb-2 py-[.3em] px-[.5em] text-[9px] uppercase rounded-[3px] bg-[#019a011a] text-[#019a01] ">
            In Stock
          </span>
        </div>
        <div className={`lg:w-[30%] ${side && "!w-[65%]"}`}>
          <div className="flex flex-col justify-between">
            <div className="mb-2">
              <p className="text-[.875rem] font-semibold">
                {item.product_id.name}
              </p>
              <p className={`${side ? "" : "hidden"} text-[.875rem]`}>
                US${item.product_id.price}
              </p>
              <span
                className={`text-[9px] text-[#999] ${
                  side && "!hidden"
                } py-[6px]`}
              >
                CK6-30681046_WHITE_XXS
              </span>
            </div>
            <div>
              <p className="text-[.813rem] mb-1">{item.Color}, {item.Size}</p>
              <p className="text-[.775rem] font-normal mb-2 lg:hidden">
                US${item.product_id.price}
              </p>
              <div className={`flex gap-1 items-center mb-2 lg:mb-0 lg:hidden`}>
                <p className="text-[.775rem]">Qty:</p>
                <select value={count} onChange={(e) => setCount(Number(e.target.value))} className="outline-none rounded-sm p-[.2em] border border-[#ccc]">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <span
                className={`hidden lg:inline-block mb-2 py-[.3em] px-[.5em] text-[9px] uppercase rounded-[3px] ${
                  side && "!hidden"
                } bg-[#019a011a] text-[#019a01]`}
              >
                In Stock
              </span>
              <div className={side && "hidden"}>
                <button className="text-[.775rem] text-[#999] pr-2 border-r border-[#999]">
                  Edit
                </button>
                <button className="text-[.775rem] text-[#999] pl-2">
                  Move to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            side && "!hidden"
          } lg:w-[10%] hidden lg:flex justify-center`}
        >
          <p className="text-[.875rem]">US${item.product_id.price}</p>
        </div>
        <div
          className={`lg:w-[10%] ${
            side && "!hidden"
          } hidden lg:flex justify-center`}
        >
          <select value={count} onChange={(e) => setCount(Number(e.target.value))} className="outline-none rounded-sm p-[.2em] border border-[#ccc]">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div
          style={{
            display: side ? "none" : "",
          }}
          className="lg:w-[30%] flex justify-around"
        >
          <p className="text-[.875rem] hidden lg:block font-semibold">
            US${item.product_id.price * item.count}
          </p>
          <button onClick={handleDelete} className=" absolute lg:static top-2 lg:top-0 lg:right-0 right-2">
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
