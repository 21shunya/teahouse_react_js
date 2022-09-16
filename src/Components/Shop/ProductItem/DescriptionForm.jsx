import React from "react";
import SecondaryBtn from "../../UI/buttons/SecondaryBtn"
import AddingToCart from "./AddingToCart";
import cl from "./ProductItem.module.css"

function DescriptionForm({productItem}) {
  return (
    <div className={cl.descr_form}>
      <AddingToCart productItem={productItem}/>
      <SecondaryBtn>В избранное</SecondaryBtn>
    </div>
  )
}

export default DescriptionForm