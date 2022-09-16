import React from "react";
import ShopNavbar from "./ShopNavbar";
import Logo from "../UI/logo/Logo"
import cl from "./Shop.module.css"

function ShopHeader(props) {
  let headerClasses = [cl.header]
  if (props.productPage) headerClasses.push(cl.product_header)

  return (
    <div className={headerClasses.join(' ')}>
      <Logo />
      <ShopNavbar productPage={props.productPage}/>
    </div>
  )
}

export default ShopHeader