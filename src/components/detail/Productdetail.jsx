import React from "react";
import ProductDetailAccordion from "./ProductDetailAccordion";

function Productdetail() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center border-b border-[#f0f0f0] border-t my-10">
      <div className="detail60 order-1 xl:order-[0] xl:w-[60%]">
        <div className="borderdetail">
          <div>
            <h4>Customer Reviews</h4>
          </div>
          <div className="xl:flex hidden justify-between">
            <div>
              <span>SIZE:</span>
              <div className="bg-[#ccc] w-[300px] h-[10px] relative mt-2 mb-[3px]">
                <div className="bg-[#000] w-[20px] h-[10px] absolute left-[130px]"></div>
              </div>
              <div className=" flex justify-between items-center text-[#666] uppercase text-[12px]">
                <div>Small</div>
                <div>True to Size</div>
                <div>Large</div>
              </div>
            </div>
            <div>
              <span>WIDTH:</span>
              <div className="bg-[#ccc] w-[300px] h-[10px] relative mt-2 mb-[3px]">
                <div className="bg-[#000] w-[20px] h-[10px] absolute left-[150px]"></div>
              </div>
              <div className=" flex justify-between items-center text-[#666] uppercase text-[12px]">
                <div>Narrow</div>
                <div>Standard</div>
                <div>Wide</div>
              </div>
            </div>
          </div>
          <div className="text-[0.8rem] font-normal"> 
            {Array.from({length : 2}).map((_, i) => (
              <ProductDetailAccordion 
              key={i} 
              i={i} 
              content1={i === 0 ? 'Get 10% off* when you subscribe to our newsletter. *Product exclusions apply.' : 'Standard Delivery: within 2 - 6 working days'}
              contnet2={i === 0 ? 'Enjoy Free Standard Delivery with min. purchase of US$99' : 'Find out more about our Returns & Exchanges'}
              txt={i === 0 ? "Promotions" : "Shipping & returns"} />
            ))}
          </div>
          <div className="productcare-p text-[#333] text-[12px]">
            <p>
              Keep your CHARLES & KEITH products in top condition. Visit our
              product care page to learn more about how to care for them.
            </p>
          </div>
        </div>
      </div>
      <div className="detail40 xl:w-[40%]">
        <div className="xl:pl-[40px] py-3 xl:py-0">
          <div className="mb-4 xl:mb-0">
            <h4>Product Details</h4>
          </div>
          <div className="leading-6 text-[#333] mb-4 xl:mb-0 text-[14px] font-light">
            <p>Item No: CK1-70381064_BEIGE</p>
          </div>
          <div className="flex">
            <div className="leading-6 text-[#333] font-semibold pr-[40px]">
              <ul className="flex flex-col gap-2 xl:block">
                <li>Material</li>
                <li>Material lining</li>
                <li>Sole material</li>
                <li>Weight</li>
                <li>Shoe width</li>
                <li>Heel height</li>
              </ul>
            </div>
            <div className="leading-6 text-[#333] font-light">
              <ul className="flex flex-col gap-2 xl:block">
                <li>Velvet</li>
                <li>Fabric & PU</li>
                <li>PU</li>
                <li>535 g</li>
                <li>8.1 cm</li>
                <li>2.1 cm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
