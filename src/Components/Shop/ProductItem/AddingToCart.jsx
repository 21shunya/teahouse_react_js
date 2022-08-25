import React from "react";
import PrimaryBtn from "../../UI/buttons/PrimaryBtn";
import QuantityChange from "../../UI/QuantityChange";

function AddingToCart() {
  return (
    <div className="adding-to-cart">
      <div className="adding-to-cart-btns">
        <QuantityChange>1</QuantityChange>
        <PrimaryBtn>В корзину</PrimaryBtn>
      </div>
      <div className="cost-wrapper">
        <span>30g</span>
        <span>990rub</span>
      </div>
    </div>
  )
}

export default AddingToCart