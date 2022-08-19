import React from "react";
import ProductItem from "./ProductItem";

function ProductsList(props) {
  return (
    <div className="products-list">
      {props.productsList.map((item) => 
      <ProductItem key={item.id} item={item} />
      )}
    </div>
  )
}

export default ProductsList;