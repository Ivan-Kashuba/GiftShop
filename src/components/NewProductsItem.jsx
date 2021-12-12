import React from "react";
import "./NewProductsItem.css";
const NewProductsItem = ({ photo, box, basket, price }) => {
  return (
    <div className="newImgItem">
      <img className="ItemProdImg" src={photo} alt="" />
      <div className="child__top newImg__content">
        <div className="child__text">Baby Shop</div>
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
    </div>
  );
};

export default NewProductsItem;
