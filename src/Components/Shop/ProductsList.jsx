import React from "react";
import productsList from"../../productsList.json"
import ProductItem from "./ProductItem";

function ProductsList() {
  return (
    <div className="products-list">
      {productsList.map((item) => 
      <ProductItem key={item.id} item={item} />
      )}
    </div>
  )
}

export default ProductsList;