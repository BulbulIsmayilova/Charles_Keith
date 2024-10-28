import React from "react";
import BreadCrumbs from "../components/static/BreadCrumbs";
import DetailSlider from "../components/detail/DetailSlider";
import DetailInfo from "../components/detail/DetailInfo";
import Productdetail from "../components/detail/Productdetail";
import DetailCards from "../components/detail/DetailCards";
import DetailMobileSlider from "../components/detail/DetailMobileSlider";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../store/api";

function Detail() {

  const { id } = useParams();

  const { data, isLoading } = useGetProductByIdQuery(id);
  return (
    <main className="py-[20px]">
      <div className="wrapper">
        <BreadCrumbs
          txt={data ? data.category.name : "Shoes"}
          sub={data ? data.subcategory.name : "Flat"}
        />
        <div className="xl:flex xl:justify-center py-5 xl:px-[50px]">
          <div className="detail-slider xl:w-[50%] xl:flex xl:justify-end">
            <div className="hidden xl:block xl:pl-24">
              {!isLoading && <DetailSlider arr={data.images} />}
            </div>
            <div className="xl:hidden">
              {!isLoading && <DetailMobileSlider arr={data.images} />}
            </div>
          </div>
          <div className="detail-info xl:w-[50%] xl:flex xl:justify-start">
            {!isLoading && <DetailInfo data={data} />}
          </div>
        </div>
        <div className="w-full text-center mt-[50px]">
          <p className="text-[12px] text-[#333] w-7/12 mx-auto leading-6 font-normal">
            {!isLoading && data.description}
          </p>
        </div>
        <div className="productdetail ">
          <Productdetail />
        </div>
        <div>
          <DetailCards />
        </div>
      </div>
    </main>
  );
}

export default Detail;
