import React from "react";
import "./SiteContent.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import box from "./img/header__box.png";
import basket from "./img/basket.png";
import price from "./img/price.png";
import Jewerly from "./components/Jewerly";
import NewProducts from "./components/NewProducts";
import rightArrow from "./img/rightArrow.png";
import leftArrow from "./img/leftArrow.png";
import Featured from "./components/Featured";
import WhoWeAre from "./components/WhoWeAre";
import Footer from "./components/Footer";

const SiteContent = () => {
  return (
    <div className="Container">
      <Header box={box} basket={basket} />
      <Navigation />
      <Slider box={box} basket={basket} price={price} />
      <Jewerly box={box} basket={basket} price={price} />
      <NewProducts
        rightArrow={rightArrow}
        leftArrow={leftArrow}
        box={box}
        price={price}
        basket={basket}
      />
      <Featured rightArrow={rightArrow} leftArrow={leftArrow} price={price} />
      <WhoWeAre />
      <Footer />
    </div>
  );
};

export default SiteContent;
