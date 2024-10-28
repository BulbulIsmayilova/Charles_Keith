import React from "react";
import Newarrivals from "../../assets/home/Newarrivals.webp"
import Bags from "../../assets/home/Bags.webp"
import Shoes from "../../assets/home/Shoes.webp"
import ToteBags from "../../assets/home/ToteBags.webp"


function FirstSection() {
  return (
    <div className="firstsec-grid">
      <div className="topleft">
        <h3>NEW ARRIVALS</h3>
        <p>SHOP NOW</p>
        <img src={Newarrivals} alt="newarrivals" />
      </div>
      <div className="topright">
        <h3>BAGS</h3>
        <p>SHOP NOW</p>
        <img src={Bags} alt="shoes" />
      </div>
      <div className="bottomleft">
        <h3>SHOES</h3>
        <p>SHOP NOW</p>
        <img src={Shoes} alt="shoes" />
      </div>
      <div className="bottomright">
        <h3>TOTE BAGS</h3>
        <p>SHOP NOW</p>
        <img src={ToteBags} alt="bags" />
      </div>
    </div>
  );
}

export default FirstSection;
