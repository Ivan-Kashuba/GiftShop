import React from "react";
import "./Jewerly.css";
import items from "../img/jewerly1.png";
import clock from "../img/jewerly2.png";
import search from "../img/search.png";
import { useState, useRef } from "react";

const Jewerly = ({ box, basket, price }) => {
  const [placeholder, setPlaceholder] = useState("Search your product here");
  const [span, setSpan] = useState("(e.g.: Silver diamond ring)");
  const placeholderText = useRef();

  const placeholderDisappear = () => {
    setPlaceholder("");
    setSpan("");
    placeholderText.current.focus();
  };
  const placeholderAppear = () => {
    if (placeholderText.current.value) {
    } else {
      setPlaceholder("Search your product here");
      setSpan("(e.g.: Silver diamond ring)");
    }
  };

  return (
    <div className="slider__flex">
      <div className="flex">
        <div className="search">
          <input
            className="search__input"
            type="text"
            ref={placeholderText}
            onFocus={placeholderDisappear}
            onBlur={placeholderAppear}
          />
          <div className="placeholder__text" onClick={placeholderDisappear}>
            {placeholder} <span>{span}</span>
          </div>
          <img className="search__icon" src={search} alt="search" />
        </div>
        <div className="crafts">
          <div className="crafts__text">crafts</div>
          <div className="box">
            <img src={box} alt="present" />
          </div>
          <div className="basket">
            <img src={basket} alt="basket" />
          </div>
          <div className="price">
            <img src={price} alt="" />
          </div>
        </div>
        <img className="jewerly__items" src={items} alt="img" />
      </div>
      <div className="jewerly__clocks">
        <img className="jewerly__clock" src={clock} alt="" />
        <div className="jewerly__text">Jewelry</div>
        <div className="beauty">
          <div className="circle"></div>
          <svg className="svg">
            <polyline className="triangle" points="40,30 60,50 40,65 55,50" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Jewerly;
