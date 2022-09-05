import React from "react";
import DescriptionForm from "./DescriptionForm";
import ProductItemTitle from "./ProductItemTitle";

function ProductPageContent({productItem}) {
  return (
    <div className="sh-item-wrapper">
        <img className="sh-item-image" src={require(`../../../assets/${productItem.imgPath}`)} alt="" />
        <div className="sh-item-descr-title">
          <ProductItemTitle productItem={productItem}/>
          <div className="sh-p-descr-wrapper">
            <DescriptionForm productItem={productItem}/>
            <div className="descr-text-wrapper">
              <span>Описание: {productItem.description}</span>
              <span>Рекомендации: {productItem.recommens}</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductPageContent