import React from "react";
import "./NewProducts.css";
import NewProd1 from "../img/NewProd1.png";
import newProd2 from "../img/newProd2.png";
import newProd3 from "../img/newProd3.png";
import NewProductsItem from "./NewProductsItem";

const NewProducts = ({ rightArrow, leftArrow, box, basket, price }) => {
  return (
    <div className="Products">
      <div className="ProductsFlex">
        <div className="products__text">New Products</div>
        <div className="arrows">
          <div className="arrow">
            <img src={leftArrow} alt="" />
          </div>
          <div className="arrow">
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
      <div className="newProducrImages">
        <NewProductsItem
          photo={NewProd1}
          box={box}
          basket={basket}
          price={price}
        />

        <NewProductsItem
          photo={newProd2}
          box={box}
          basket={basket}
          price={price}
        />

        <NewProductsItem
          photo={newProd3}
          box={box}
          basket={basket}
          price={price}
        />
      </div>
    </div>
  );
};

export default NewProducts;
