import React from "react";
import SecondaryBtn from "../../UI/buttons/SecondaryBtn"
import AddingToCart from "./AddingToCart";

function DescriptionForm() {
  return (
    <div className="descr-form">
      <AddingToCart />
      <SecondaryBtn>В избранное</SecondaryBtn>
    </div>
  )
}

export default DescriptionForm