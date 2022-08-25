import React from "react";
import ShopNavbar from "./ShopNavbar";
import Logo from "../Logo"

function ShopHeader(props) {
  return (
    <div className="shop-header">
      <Logo />
      {props.ProductItem 
      ? <ShopNavbar />
      : <ShopNavbar />
      }
    </div>
  )
}

export default ShopHeader