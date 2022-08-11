import React from "react";
import ProductsList from "../Components/Shop/ProductsList";
import ShopHeader from "../Components/Shop/ShopHeader";
import "../styles/ShopPage.css"

function ShopPage() {
  return (
    <div className="shop-page">
      <div className="shop-page-wrapper">
        <ShopHeader />
        <ProductsList />
      </div>
      <img src="shop-page-picture.png" alt=""/>
    </div>
  )
}

export default ShopPage;