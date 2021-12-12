import React from "react";
import "./Featured.css";
import FeatureItem from "./FeatureItem";
import Featured1 from "../img/Featured1.png";
import Featured2 from "../img/Featured2.png";
import Featured3 from "../img/Featured3.png";
import Featured4 from "../img/Featured4.png";
import featureIcon1 from "../img/featureIcon1.png";
import featureIcon2 from "../img/featureIcon2.png";
import featureIcon3 from "../img/featureIcon3.png";

const Featured = ({ leftArrow, rightArrow, price }) => {
  return (
    <div className="Products">
      <div className="ProductsFlex">
        <div className="products__text">Featured Products</div>
        <div className="arrows">
          <div className="arrow featArrow">
            <img src={leftArrow} alt="" />
          </div>
          <div className="arrow featArrow">
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>

      <div className="Featured__items">
        <div className="feature__item">
          <div className="feature__mainImg">
            <img src={Featured1} alt="" />
          </div>
          <div className="feature__text">
            <div className="feature__title">Product Title here</div>
            <div className="feature__description">Short Description here</div>
          </div>
          <div className="sale">20% OFF</div>
          <div className="feature__icons">
            <a href="!">
              <div className="feature__imgWrap">
                <img src={featureIcon1} alt="img" />
              </div>
            </a>
            <a href="!">
              <div className="feature__imgWrap">
                <img src={featureIcon2} alt="img" />
              </div>
            </a>
            <a href="!">
              <div className="feature__imgWrap">
                <img src={featureIcon3} alt="img" />
              </div>
            </a>
            <a href="!">
              <div className="feature__imgWrap feature__price">
                <img src={price} alt="img" />
              </div>
            </a>
          </div>
        </div>

        <FeatureItem
          img={Featured2}
          featureIcon1={featureIcon1}
          featureIcon2={featureIcon2}
          featureIcon3={featureIcon3}
          price={price}
        />
        <div className="feature__item">
          <div className="feature__mainImg">
            <img src={Featured3} alt="" />
          </div>
          <div className="feature__text">
            <div className="feature__title">Product Title here</div>
            <div className="feature__description blue__text">
              Short Description here
            </div>
          </div>
          <div className="sale blue">New</div>
          <div className="feature__icons">
            <a href="!">
              <div className="feature__imgWrap">
                <img src={featureIcon1} alt="img" />
              </div>
            </a>
            <a href="!">
              <div className="feature__imgWrap">
                <img src={featureIcon2} alt="img" />
              </div>
            </a>
            <a href="!">
              <div className="feature__imgWrap">
                <img src={featureIcon3} alt="img" />
              </div>
            </a>
            <a href="!">
              <div className="feature__imgWrap feature__price blue">
                <img src={price} alt="img" />
              </div>
            </a>
          </div>
        </div>

        <FeatureItem
          img={Featured4}
          featureIcon1={featureIcon1}
          featureIcon2={featureIcon2}
          featureIcon3={featureIcon3}
          price={price}
        />
      </div>
    </div>
  );
};

export default Featured;
