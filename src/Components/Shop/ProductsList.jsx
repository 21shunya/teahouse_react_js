import React from "react";
import ProductItem from "./ProductItem";

function ProductsList({productsList, limit, page}) {
  let pageItems = []
  for (let i = (page-1)*limit; i < page*limit; i++) {
    pageItems.push(productsList[i])
  }

  return (
    <div className="products-list">
      {pageItems.map((item) => 
       <ProductItem key={item.id} item={item} /> 
      )}
    </div>
  )
}

export default ProductsList;