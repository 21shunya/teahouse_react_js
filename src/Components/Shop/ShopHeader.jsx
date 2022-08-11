import React from "react";
import ShopNavbar from "./ShopNavbar";
import Logo from "../Logo"

function ShopHeader() {
  return (
    <div className="shop-header">
      <Logo />
      <ShopNavbar />
    </div>
  )
}

export default ShopHeader