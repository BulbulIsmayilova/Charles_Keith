import React from "react";
import Category from "../Category";
import CheckOrderStatus from "./Customer Care/CheckOrderStatus";
import { IoLogoFacebook } from "react-icons/io";
import {
  FaInstagram,
  FaPinterest,
  FaSpotify,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaQ, FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { BsMeta } from "react-icons/bs";
import PrivilegeMembership from "./Customer Care/PrivilegeMembership";
import { useNavigate } from "react-router-dom";
import FAQ from "./Customer Care/FAQ";
import ContactUs from "./Customer Care/ContactUs";
import CounterfeitEducation from "./Customer Care/CounterfeitEducation";
import FashionGuides from "./Customer Care/FashionGuides";
import MyAccount from "./Customer Care/MyAccount";
import ShippinfTracking from "./Customer Care/ShippinfTracking";
import ReturnsExchanges from "./Customer Care/ReturnsExchanges";
import Promotions from "./Customer Care/Promotions";
import StudentDiscout from "./Customer Care/StudentDiscout";
import ReferaFriend from "./Customer Care/ReferaFriend";
import YouthHealthWorker from "./Customer Care/YouthHealthWorker";
import SocialFollower from "./Customer Care/SocialFollower";
import SizeGuide from "./Customer Care/SizeGuide";
import StoreLocator from "./AboutUs/StoreLocator";
import BrandProfile from "./AboutUs/BrandProfile";
import Sustainability from "./AboutUs/Sustainability";
import Thread from "./AboutUs/Thread";
import ImpactProgramme from "./AboutUs/ImpactProgramme";
import FranchisingOpportunities from "./AboutUs/FranchisingOpportunities";
import Affiliates from "./AboutUs/Affiliates";
import Ambassadors from "./AboutUs/Ambassadors";
import VirtualStore from "./AboutUs/VirtualStore";
import google from "../../assets/home/google.svg"
import app from "../../assets/home/app.svg"
import mastercard from "../../assets/home/mastercard.svg"
import visa from "../../assets/home/visa.svg"
import americanexpress from "../../assets/home/americanexpress.svg"
import paypal from "../../assets/home/paypal.svg"
import afterpay from "../../assets/home/afterpay.svg"
import bitcoin from "../../assets/home/bitcoin.svg"
import ethereum from "../../assets/home/ethereum.svg"
import tether from "../../assets/home/tether.svg"
import usdcoin from "../../assets/home/usdcoin.svg"
import binancepay from "../../assets/home/binancepay.svg"
import applepay from "../../assets/home/applepay.svg"
import klarna from "../../assets/home/klarna.svg"
import FooterAccordion from "./FooterAccordion";
import { useAllCategoryQuery } from "../../store/api";


function Footer() {
  const customer = [
    { path: <CheckOrderStatus />, des: "Check Order Status" },
    { path: <PrivilegeMembership />, des: "Privilege Membership" },
    { path: <FAQ />, des: "FAQ" },
    { path: <ContactUs />, des: "Contact Us" },
    { path: <CounterfeitEducation />, des: "Counterfeit Education" },
    { path: <FashionGuides />, des: "Fashion Guides" },
    { path: <MyAccount />, des: "My Account" },
    { path: <ShippinfTracking />, des: "Shipping & Tracking" },
    { path: <ReturnsExchanges />, des: "Returns & Exchanges" },
    { path: <Promotions />, des: "Promotions" },
    { path: <StudentDiscout />, des: "Student Discount" },
    { path: <ReferaFriend />, des: "Refer a Friend" },
    { path: <YouthHealthWorker />, des: "Youth & Healthcare Worker Discount" },
    { path: <SocialFollower />, des: "Social Follower Discount" },
    { path: <SizeGuide />, des: "Size Guide" },
  ];

  const about = [
    { path: <StoreLocator />, des: "Store Locator" },
    { path: <BrandProfile />, des: "Brand Profile" },
    { path: <Sustainability />, des: "Sustainability" },
    { path: <Thread />, des: "CHARLES & KEITH x thredUP" },
    { path: <ImpactProgramme />, des: "Impact Programme" },
    { path: <FranchisingOpportunities />, des: "Franchising Opportunities" },
    { path: <Affiliates />, des: "Affiliates" },
    { path: <Ambassadors />, des: "Ambassadors" },
    { path: <VirtualStore />, des: "Virtual Store Experience" },
  ];

  const {data, isLoading} = useAllCategoryQuery()

  const navigate = useNavigate();
  return (
    <footer className="bg-[#333] text-white">
      <div className="wrapper">
        <div className="m-auto container-footer md:flex md:justify-center py-[30px]">
          {/* birinci  */}
          <div className="footer-category md:block hidden max-w-[25%] w-full">
            <h3>Shopping With Us</h3>
            <ul>
              {!isLoading && data.map((item, i) => (
                <Category item={item} key={i} txt={"footer"} />
              ))}
            </ul>
          </div>
          {/* ikinci */}
          <div className="max-w-[25%] md:block hidden w-full">
            <h3>Customer Care</h3>
            <ul>
              {customer.map((item, i) => (
                <li
                  className="customercare-footer"
                  key={i}
                  onClick={() => navigate(item.path)}
                >
                  {item.des}
                </li>
              ))}
            </ul>
          </div>
          {/* ucuncu  */}
          <div className="max-w-[25%] md:block hidden w-full">
            <h3>About Us</h3>
            <ul>
              {about.map((item, i) => (
                <li
                  className="customercare-footer"
                  key={i}
                  onClick={() => navigate(item.path)}
                >
                  {item.des}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden border-b border-[#444] mb-4 pb-4">
            <FooterAccordion txt={"Shoppin With Us"} des={isLoading ? undefined : data} />
            <FooterAccordion txt={"Customer Care"} des={customer} />
            <FooterAccordion txt={"About Us"} des={about} />
          </div>

          <div className="md:max-w-[25%] w-full">
            <h3>FOLLOW US</h3>
            <div className="icons-social border-b border-[#444] md:border-b-0 md:pb-0 pb-4 flex-wrap">
                <div><IoLogoFacebook /></div>
                <div><FaInstagram /></div>
                <div><FaYoutube /></div>
                <div><FaSquareXTwitter /></div>
                <div><FaPinterest /></div>
                <div><AiFillTikTok /></div>
                <div><FaSpotify /></div>
                <div><FaTelegram /></div>
                <div><FaWhatsapp /></div>
                <div><BsMeta /></div>
            </div>
            <div className="pt-5 border-b border-[#444] md:border-b-0 md:pb-0 pb-4">
              <h3 className="inline-block whitespace-nowrap text-[.8em]">DOWNLOAD OUR APP</h3>
              <div className="flex gap-[10px]"> 
                <div>
                  <img src={app} alt="app" className="max-w-[100px] h-auto" />
                </div>
                <div>
                  <img src={google} alt="google" className="max-w-[100px] h-auto" />
                </div>
              </div>
            </div>
            <div className="py-5">
              <h3 className="inline-block whitespace-nowrap text-[.8em]">ACCEPTED PAYMENT METHODS</h3>
              <div className="flex cards flex-wrap gap-5">
                  <div><img src={mastercard} alt="mastercard" /></div>
                  <div><img src={visa}alt="visa" /></div>
                  <div><img src={americanexpress} alt="americanexpress" /></div>
                  <div><img src={paypal} alt="paypal" /></div>
                  <div><img src={afterpay} alt="afterpay" /></div>
                  <div><img src={bitcoin} alt="bitcoin" /></div>
                  <div><img src={ethereum} alt="ethereum" /></div>
                  <div><img src={tether} alt="tether" /></div>
                  <div><img src={usdcoin} alt="usdcoin" /></div>
                  <div><img src={binancepay} alt="binancepay" /></div>
                  <div><img src={applepay} alt="applepay" /></div>
                  <div><img src={klarna} alt="klarna" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
