import React, { useEffect, useState } from "react";
import videonav from "../../assets/videonav.mp4";
import videonav1 from "../../assets/mobileVideo.mp4";

function HeroSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <video className="w-full relative -z-[1] block" autoPlay muted loop>
        <source src={isMobile ? videonav1 : videonav} type="video/mp4" />
      </video>
      <div className=" absolute z-[1] inset-0 flex justify-center flex-col">
        <div className="wrapper">
          <div className="flex flex-col content-start w-[350px]">
            <h2 className="text-[32px] font-medium text-center uppercase m-[15px]">
              Fall Winter 2024
            </h2>
            <p className="text-center uppercase"> SHOP THE EDIT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
