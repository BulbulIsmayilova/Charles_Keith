import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/static/BreadCrumbs";
import { BsBox2 } from "react-icons/bs";
import Cartitem from "../components/cart/Cartitem";
import paypalicon from "../assets/paypalicon.svg";
import paypallogo from "../assets/paypallogo.svg";
import google from "../assets/google.png";
import mastercard from "../assets/home/mastercard.svg"
import visa from "../assets/home/visa.svg"
import americanexpress from "../assets/home/americanexpress.svg"
import paypal from "../assets/home/paypal.svg"
import afterpay from "../assets/home/afterpay.svg"
import bitcoin from "../assets/home/bitcoin.svg"
import ethereum from "../assets/home/ethereum.svg"
import tether from "../assets/home/tether.svg"
import usdcoin from "../assets/home/usdcoin.svg"
import binancepay from "../assets/home/binancepay.svg"
import applepay from "../assets/home/applepay.svg"
import klarna from "../assets/home/klarna.svg"
import { useNavigate } from "react-router-dom";
import { useAllCartQuery } from "../store/api";

function Cart() {
  const navigate= useNavigate()
  const [total, setTotal] = useState(0)

  const token = JSON.parse(localStorage.getItem("token"))

  const { data: cartArr, isLoading: cartLoad } = useAllCartQuery(token ? undefined : skipToken);

  useEffect(() => {
    if(!cartLoad){
      let kod = 0
      cartArr.forEach(item => kod += (item.product_id.price * item.count))
      setTotal(kod)
    }
  }, [cartArr])

  return (
    <main className="py-10">
      <div className="wrapper">
        <div className="flex flex-wrap relative items-start">
          <div className="lg:w-[70%] w-full mb-4 lg:mb-0 p-3">
            <div className="mb-5">
              <BreadCrumbs txt={"Shopping Bag"} />
            </div>
            <h1 className="uppercase text-[22px] font-semibold text-center">
              Shopping Bag
            </h1>
            <button className="text-[.8rem] font-normal underline">
              Continue Shopping
            </button>
            <div className="flex w-[100%] bg-[#FFF5E5] py-[15px] px-[20px]  ">
              <div>
                <BsBox2 />
              </div>
              <div className="text-[.8rem] font-[400] px-[10px]">
                Please note that if your order consists of multiple items, you
                may receive separate packages that are delivered on different
                days.
              </div>
            </div>
            <div className="flex mb-5 justify-between items-center text-[#999] uppercase py-[20px] mt-[20px] font-semibold text-[.8rem] border border-[##CCCCCC] border-r-0 border-l-0">
              <div className="flex w-full items-center">
                <div className="w-[15%]">{!cartLoad && cartArr.length} item(s)</div>
                <div className="w-[30%]">Product</div>
                <div className="w-[10%] flex justify-center">Price</div>
                <div className="w-[10%] flex justify-center">Qty</div>
                <div className="w-[30%] flex justify-center">Subtotal</div>
              </div>
            </div>
            <div className="rounded-md border overflow-hidden">
              <div className="bg-[#f0f0f0] py-[15px] mb-4 px-5">
                <h2 className=" uppercase text-[.875rem] font-semibold">
                  Available now
                </h2>
              </div>
              <div className="bg-[#f9f9f9] text-[#333] py-[10px] px-5 border-t border-[#f0f0f0]">
                <p className="text-[.8rem]">
                  Receive this item in 6 - 10 working days (Shipped from our
                  international warehouse)
                </p>
              </div>
              <div>
                {!cartLoad && cartArr.map((item, i) => (
                  <Cartitem key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] w-full lg:sticky lg:top-0 bg-[#F0F0F0] pb-5 rounded-[5px] px-[20px] ">
            <h3 className=" border-b border-[#CCCCCC] uppercase text-center text-[16px] font-semibold py-[15px] px-[14px]">
              Order summary
            </h3>
            <div>
              <div className="flex justify-between mb-[12px] mt-[14px]">
                <p className="text-[.8rem] font-normal leading-6">Subtotal</p>
                <p className="text-[.8rem] font-normal leading-6">US${total}</p>
              </div>
              <div className="border-b border-[#ccc] pb-[15px]">
                <select className="w-full rounded-[5px] border border-[#ccc] outline-none leading-5 px-[10px] py-[12px] text-[.75rem]">
                  <option value="15">Standart (US$15.00) </option>
                  <option value="25">Express (US$25.00) </option>
                </select>
              </div>
              <div className="border-b border-[#ccc] pb-[15px] pt-[10px]">
                <p className="text-[.8rem] font-normal text-center italic my-[6px]">
                  You are <b>US$70.01</b> away from{" "}
                  <b>free standard delivery</b>.
                </p>
                <div className="m-auto w-[300px] bg-[#D0D0D0] h-[12px] rounded-[5px] relative">
                  <div className="absolute h-[12px] bg-[#A0A0A0] w-[100px] rounded-[5px] rounded-r-none"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between pb-[10px] pt-[15px]">
                  <h4 className="text-[16px] font-semibold">
                    Estimated Total:
                  </h4>
                  <h4 className="text-[16px] font-semibold">US${total}</h4>
                </div>
                <div>
                  <button onClick={() => navigate(`/us/check-out`)}  className="border border-[#009900] bg-[#009900] w-full rounded-[5px] text-[#fff] uppercase text-[.875rem] px-[20px] py-[8px]">
                    Proceed to checkout
                  </button>
                </div>
              </div>
              <div className="flex justify-between py-5 items-center w-full">
                <span className=" w-[25%] h-[1px] bg-[#ccc]"></span>
                <span className="text-[14px] flex justify-center w-[60%] text-[#666] max-w-[140px] text-nowrap px-4 text-center">
                  Or Express Checkout with
                </span>
                <span className=" w-[25%] h-[1px] bg-[#ccc]"></span>
              </div>
              <div className="border-b border-[#ccc] pb-[20px] w-full">
                <button className="w-full mb-[10px] flex justify-center items-center border border-[#000] rounded-[5px] bg-[#FFC43A] px-[20px] py-[8px]">
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
                <button className="w-full flex justify-center items-center border border-[#757575] rounded-[5px] bg-[#000] px-[20px] py-[8px]">
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
              <div className="max-[260px] text-center pt-[10px]">
                <h6 className=" inline-block whitespace-nowrap text-[14px] font-semibold text-center pb-[10px]">
                  ACCEPTED PAYMENT METHODS
                </h6>
                <div className="paymentcard flex justify-center cards flex-wrap gap-5 px-[10px]">
                    <img src={mastercard} alt="mastercard" />
                    <img src={visa} alt="visa" />
                    <img src={americanexpress} alt="americanexpress" />
                    <img src={paypal} alt="paypal" />
                    <img src={afterpay} alt="afterpay" />
                    <img src={bitcoin} alt="bitcoin" />
                    <img src={ethereum} alt="ethereum" />
                    <img src={tether} alt="tether" />
                    <img src={usdcoin} alt="usdcoin" />
                    <img src={binancepay} alt="binancepay" />
                    <img src={applepay} alt="applepay" />
                    <img src={klarna} alt="klarna" />
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </main>
  );
}

export default Cart;
