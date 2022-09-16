import React from "react";
import { useNavigate } from "react-router-dom";
import cl from "./Shop.module.css"

function ProductItem(props) {
  const { item } = {...props}
  const navigate = useNavigate();

  return (
    <div className={cl.product_item_wrapper} onClick={() => navigate(`${item.id}`)}>
      <div style={{backgroundImage: `url(${item.imgPath})`}} className={cl.img_wrapper}>
        <div className={cl.img_gradient}></div>
      </div>
      <div className={cl.product_text}>{item.title}</div>
    </div>
  )
}

export default ProductItem