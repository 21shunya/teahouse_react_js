import React from "react";
import DescriptionForm from "../Components/Shop/ProductItem/DescriptionForm";
import ShopHeader from "../Components/Shop/ShopHeader";
import ProductItemTitle from "../Components/Shop/ProductItem/ProductItemTitle";
import "../styles/ShPageItem.css"
import productsList from "../productsList.json"
import { useParams } from "react-router-dom";

function ProductItemPage() {
  const params = useParams();
  const productItem = productsList[params.id - 1]
  
  return (
    <div className="sh-page-item">
      <ShopHeader ProductItem />
      <div className="sh-item-wrapper">
        <img className="sh-item-image" src={require(`../assets/${productItem.imgPath}`)} alt="" />
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
    </div>
  )
}

export default ProductItemPage