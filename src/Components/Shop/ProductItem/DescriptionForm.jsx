import React from "react";
import SecondaryBtn from "../../UI/buttons/SecondaryBtn"
import AddingToCart from "./AddingToCart";

function DescriptionForm({productItem}) {
  return (
    <div className="descr-form">
      <AddingToCart productItem={productItem}/>
      <SecondaryBtn>В избранное</SecondaryBtn>
    </div>
  )
}

export default DescriptionForm