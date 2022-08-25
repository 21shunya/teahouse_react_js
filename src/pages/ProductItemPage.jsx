import React from "react";
import DescriptionForm from "../Components/Shop/ProductItem/DescriptionForm";
import ShopHeader from "../Components/Shop/ShopHeader";
import ProductItemTitle from "../Components/Shop/ProductItem/ProductItemTitle";
import "../styles/ShPageItem.css"

function ProductItemPage() {
  return (
    <div className="sh-page-item">
      <ShopHeader ProductItem />
      <div className="sh-item-wrapper">
        <img className="sh-item-image" src="var=1.png" alt="" />
        <div className="sh-item-descr-title">
          <ProductItemTitle />
          <div className="sh-p-descr-wrapper">
            <DescriptionForm />
            <div className="descr-text-wrapper">
              some text
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItemPage