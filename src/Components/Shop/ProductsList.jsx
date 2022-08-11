import React from "react";
import productsList from"../../productsList.json"
import ProductItem from "./ProductItem";

function ProductsList() {
  return (
    <div className="products-list">
      <ProductItem item={productsList[0]}/>
      {/* {productsList.map((item) => 
        <div key={item.id}>
          {item.body}
          <img src={item.img} alt='pic of product' />
        </div>
      )} */}
    </div>
  )
}

export default ProductsList;