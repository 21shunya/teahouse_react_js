import React from "react";
import DescriptionForm from "../Components/Shop/ProductItem/DescriptionForm";
import ShopHeader from "../Components/Shop/ShopHeader";
import ProductItemTitle from "../Components/Shop/ProductItem/ProductItemTitle";
import "../styles/ShPageItem.css"
import productsList from "../productsList.json"

function ProductItemPage() {
  return (
    <div className="sh-page-item">
      <ShopHeader ProductItem />
      <div className="sh-item-wrapper">
        <img className="sh-item-image" src="var=1.png" alt="" />
        <div className="sh-item-descr-title">
          <ProductItemTitle productItem={productsList[0]}/>
          <div className="sh-p-descr-wrapper">
            <DescriptionForm productItem={productsList[0]}/>
            <div className="descr-text-wrapper">
              <span>Описание: {productsList[0].description}</span>
              <span>Рекомендации: {productsList[0].recommens}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItemPage