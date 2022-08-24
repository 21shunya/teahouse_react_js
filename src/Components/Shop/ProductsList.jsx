import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function ProductsList({productsList}) {

  return (
    <div className="products-list">
      {productsList.map((item) => 
       <ProductItem key={item.id} item={item} /> 
      )}
    </div>
  )
}

export default ProductsList;