import React from "react";

function ProductItemTitle({productItem}) {
  return (
    <div className="sh-p-title-substrate">
      <div className="sh-p-title-wrapper">
        <span className="sh-p-title-h1">{productItem.title}</span>
        <span className="sh-p-title-h5">{productItem.cost}{productItem.type}</span>
      </div>
    </div>
  )
}

export default ProductItemTitle