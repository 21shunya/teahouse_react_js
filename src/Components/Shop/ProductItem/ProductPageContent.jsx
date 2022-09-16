import React from "react";
import DescriptionForm from "./DescriptionForm";
import ProductItemTitle from "./ProductItemTitle";
import cl from "./ProductItem.module.css"

function ProductPageContent({productItem}) {
  return (
    <div className={cl.content_wrapper}>
        <img className={cl.product_image} src={require(`../../../assets/${productItem.imgPath}`)} alt="" />
        <div className={cl.description_title}>
          <ProductItemTitle productItem={productItem}/>
          <div className={cl.description_wrapper}>
            <DescriptionForm productItem={productItem}/>
            <div className={cl.text_wrapper}>
              <span>Описание: {productItem.description}</span>
              <span>Рекомендации: {productItem.recommens}</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductPageContent