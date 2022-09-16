import React from "react";
import PrimaryBtn from "../../UI/buttons/PrimaryBtn";
import QuantityChange from "../../UI/QuantityChange";
import cl from "./ProductItem.module.css"

function AddingToCart({productItem}) {
  return (
    <div className={cl.adding_to_cart}>
      <div className={cl.adding_to_cart_btns}>
        <QuantityChange>1</QuantityChange>
        <PrimaryBtn>В корзину</PrimaryBtn>
      </div>
      <div className={cl.cost_wrapper}>
        <span>{productItem.portion}г.</span>
        <span>{productItem.costPerServing}р.</span>
      </div>
    </div>
  )
}

export default AddingToCart