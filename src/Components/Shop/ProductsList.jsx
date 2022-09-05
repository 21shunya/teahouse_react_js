import React from "react";
import ProductItem from "./ProductItem";

function ProductsList({productsList}) {

  return (
    <div className="products-list">
      {productsList.length 
        ? productsList.map((item) => 
          <ProductItem key={item.id} item={item} /> 
         )
        : <div>Товары отсутствуют</div>
      }
    </div>
  )
}

export default ProductsList;