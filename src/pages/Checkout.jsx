import React, { useEffect, useState } from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import paypalicon from "../assets/paypalicon.svg";
import paypallogo from "../assets/paypallogo.svg";
import google from "../assets/google.png";
import { BsBox2 } from "react-icons/bs";
import CheckoutFormik from "../components/formik/CheckoutFormik";
import Cartitem from "../components/cart/Cartitem";
import { TbTruckDelivery } from "react-icons/tb";
import { useAllCartQuery } from "../store/api";

function Checkout() {
  const navigate = useNavigate();

  const [total, setTotal] = useState(0)

  const token = JSON.parse(localStorage.getItem("token"));

  const { data: cartArr, isLoading: cartLoad } = useAllCartQuery(
    token ? undefined : skipToken
  );

  useEffect(() => {
    if (!cartLoad) {
      let kod = 0;
      cartArr.forEach((item) => (kod += item.product_id.price * item.count));
      setTotal(kod);
    }
  }, [cartArr]);
  return (
    <main>
      <div className="wrapper">
        <div className="px-[60px]">
          <div className="flex justify-between items-center mt-[20px]">
            <div className="flex justify-between items-center">
              <button
                onClick={() => navigate(`/us/cart`)}
                className="text-[.875rem] font-normal text-left hover:underline"
              >
                Shopping Bag
              </button>
              <span>
                <FaChevronRight className="w-[13px] h-[13px] text-[#666] mx-[6px]  " />
              </span>
              <p className="text-[.875rem] font-semibold">Checkout</p>
            </div>
            <div>
              <h1 className="text-[24px] uppercase font-semibold tracking-wider">
                Checkout
              </h1>
            </div>
            <div className="flex justify-between items-center text-[#999]">
              <span className="pr-1">
                <IoBagCheckOutline className="w-[22px] h-[22px] " />
              </span>
              <p className="text-[.875rem] font-light ">Secure Checkout</p>
            </div>
          </div>
          <div className="flex flex-wrap items-start mt-[25px]">
            <div className="lg:w-[70%] w-full">
              <div className=" border border-[#ccc] rounded-[5px] px-[20px] pt-[20px] pb-[10px] flex justify-center relative gap-[12px]">
                <p className="absolute top-[-11px] bg-[#fff] px-[10px] text-[14px] font-semibold">
                  Express Checkout
                </p>
                <button className=" w-[250px] mb-[10px] flex justify-center items-center border border-[#000] rounded-[5px] bg-[#FFC43A] px-[20px] py-[8px]">
                  <div>
                    <img
                      src={paypalicon}
                      alt="paypalicon"
                      className="h-[21px] min-h-[18px] max-h[27px]"
                    />
                  </div>
                  <div>
                    <img
                      src={paypallogo}
                      alt="paypallogo"
                      className="h-[21px] min-h-[18px] max-h[27px]"
                    />
                  </div>
                  <span className="text-[16px] pl-[5px]">Checkout</span>
                </button>
                <button className="flex w-[250px] mb-[10px] justify-center items-center border border-[#757575] rounded-[5px] bg-[#000] px-[20px] py-[8px]">
                  <div>
                    <img
                      src={google}
                      alt="google"
                      className="h-[21px] min-h-[18px] max-h[27px]"
                    />
                  </div>
                  <span className="text-[16px] pl-[5px] text-[#fff]">Pay</span>
                </button>
              </div>
              <div className="flex items-center gap-[10px] w-full mt-[25px]">
                <span className="w-full h-[1px] bg-[#ccc]"></span>
                <span className="text-[#333] uppercase text-[.875rem] font-normal">
                  or
                </span>
                <span className="w-full h-[1px] bg-[#ccc]"></span>
              </div>
              <div className="border border-[#F0F0F0] bg-[#F0F0F0] rounded-[5px] pt-[7px] pb-[6px] px-[10px]">
                <h2 className=" uppercase text-[18px] font-[600] tracking-wide ">
                  1. Delivery
                </h2>
              </div>
              <div className="flex w-[100%] bg-[#FFF5E5] py-[15px] px-[20px] mt-[15px] rounded-[5px]">
                <div>
                  <BsBox2 />
                </div>
                <div className="text-[.8rem] font-[400] px-[10px]">
                  Please note that if your order consists of multiple items, you
                  may receive separate packages that are delivered on different
                  days.
                </div>
              </div>
              <div>
                <div className="text-[.875rem] uppercase font-semibold tracking-wide py-[20px]">
                  Delivery method
                </div>
                <div className="flex lg:justify-between flex-wrap">
                  <div className="flex w-full lg:w-[49%] items-start gap-2 border border-[#000] rounded-[5px] mb-4 lg:mb-0 py-[17px] px-[12px] lg:mr-[5px]">
                    <div className="pt-1">
                      <div className="w-4 h-4 bg-black flex justify-center items-center rounded-full border border-black">
                        <FaCheck className="text-[.675em] text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-[10px]">
                        <div className="text-[.875rem] font-semibold text-left">
                          Standart
                        </div>
                        <div className="text-[.875rem] font-semibold text-left">
                          US$15
                        </div>
                      </div>
                      <div className="text-[.875rem] font-normal leading-6">
                        Standard delivery in United States of America Includes
                        With Tracking, Duties and Taxes, Excludes Sales Tax{" "}
                        <br />
                        Estimated Delivery Date: Orders will arrive within 2- 5
                        working days*. (USA Warehouse) 6 - 10 working days*.
                        (International Warehouse)
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full lg:w-[49%] items-start gap-2 border border-[#000] rounded-[5px] py-[17px] px-[12px]">
                    <div className="pt-1">
                      <div className="w-4 h-4 bg-black flex justify-center items-center rounded-full border border-black">
                        <FaCheck className="text-[.675em] text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-[10px]">
                        <div className="text-[.875rem] font-semibold text-left">
                          Express
                        </div>
                        <div className="text-[.875rem] font-semibold text-left">
                          US$15
                        </div>
                      </div>
                      <div className="text-[.875rem] font-normal leading-6">
                        Express delivery in United States of America Includes
                        With Tracking, Duties and Taxes, Excludes Sales Tax{" "}
                        <br />
                        Estimated Delivery Date: Within 2 - 4 Working Days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <CheckoutFormik />
              </div>
            </div>
            <div className="lg:w-[30%] w-full">
              <div className="bg-[#F0F0F0] rounded-[5px] px-[20px] pb-[30px] mb-6 ml-[15px]">
                <div>
                  <h4 className=" uppercase text-center text-[16px] font-semibold tracking-wide border-b border-[#ccc] pt-[20px] pb-[14px]">
                    Order Summary
                  </h4>
                  <div>
                    <div className="flex justify-between items-center mb-[12px] mt-[20px] text-[.875rem] font-normal leading-5">
                      <div>Subtotal</div>
                      <div>US$ {total}</div>
                    </div>
                    <div className="flex justify-between items-center mb-[12px] pb-4 text-[.875rem] font-normal leading-5 border-b border-[#ccc]">
                      <div>Delivery</div>
                      <div>US$25.00</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-[18px] text-[18px] font-bold tracking-wide">
                    <div>Total</div>
                    <div>US$ {+total + 25}</div>
                  </div>
                </div>
              </div>
              <div className="border border-[#f0f0f0] rounded-[5px] ml-[15px]">
                <div className="rounded-[5px] rounded-b-none bg-[#F0F0F0]">
                  <div className="flex justify-between items-center">
                    <h5 className="px-5 text-[18px] py-4 font-semibold">
                      Hide item details (1 item)
                    </h5>
                    <div className=" mr-4">
                      <div className="w-4 h-4 bg-[#F0F0F0] rounded-full border border-[#CCCCCC]"></div>
                    </div>
                  </div>
                  <div className="bg-[#fff] px-5  pb-[15px]">
                    <div className="text-[.875rem] leading-6 border-b border-[#F0F0F0] pb-[10px]">
                      <div className="font-semibold pt-3">
                        Want to make changes to your order?
                      </div>
                      <div>Edit the items in your shopping bag.</div>
                    </div>
                    <div className="my-[15px]">
                      {!cartLoad &&
                        cartArr.map((item, i) => (
                          <Cartitem key={i} side={true} item={item} />
                        ))}
                    </div>
                    <div className="flex items-center text-[#666] text-[.875rem] font-normal">
                      <TbTruckDelivery className="w-[20px] h-[20px]" />
                      <span className="pl-2">
                        Receive this item in 2 - 4 working days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
