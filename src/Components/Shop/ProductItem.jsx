import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem(props) {
  const { item } = {...props}
  const navigate = useNavigate();

  return (
    <div className="product-item-wrapper" onClick={() => navigate(`${item.id}`)}>
      <div style={{backgroundImage: `url(${item.imgPath})`}} className="product-item-img-wrapper">
        <div className="pr-item-img-gradient"></div>
      </div>
      <div className="product-item-text">{item.title}</div>
    </div>
  )
}

export default ProductItem