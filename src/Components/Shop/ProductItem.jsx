import React from "react";

function ProductItem(props) {
  const { item } = {...props}

  return (
    <div className="product-item-wrapper">
      <div style={{backgroundImage: `url(${item.img})`}} className="product-item-img-wrapper">
        <div className="pr-item-img-gradient"></div>
      </div>
      <div className="product-item-text">{item.body}</div>
    </div>
  )
}

export default ProductItem