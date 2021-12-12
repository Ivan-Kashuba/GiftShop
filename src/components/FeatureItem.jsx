import React from "react";

const FeatureItem = ({
  img,
  featureIcon1,
  featureIcon2,
  featureIcon3,
  price,
}) => {
  return (
    <div className="feature__item">
      <div className="feature__mainImg">
        <img src={img} alt="" />
      </div>
      <div className="feature__text">
        <div className="feature__title">Product Title here</div>
        <div className="feature__description">Short Description here</div>
      </div>
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
  );
};

export default FeatureItem;
