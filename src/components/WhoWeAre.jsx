import React from "react";
import "./WhoWeAre.css";
import whoWeAre1 from "../img/whoWeAre1.png";
import whoWeAre2 from "../img/whoWeAre2.png";
import whoWeAre3 from "../img/whoWeAre3.png";

const WhoWeAre = () => {
  return (
    <div className="Products">
      <div className="ProductsFlex">
        <div className="products__text">Who We Are</div>
      </div>
      <div className="weAre__info">
        <div className="weAre__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="weAre__img">
          <img src={whoWeAre1} alt="img" />
          <img src={whoWeAre2} alt="img" />
          <img src={whoWeAre3} alt="img" />
        </div>
        <div className="weAre__button">
          <a href="!">Register Now</a>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
