import React from "react";
import ProductItem from "./ProductItem";
import cl from "./Shop.module.css"

function ProductsList({productsList}) {

  return (
    <div className={cl.products_list}>
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