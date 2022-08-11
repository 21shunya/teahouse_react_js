import React from "react";
import RegularBtn from "../UI/buttons/RegularBtn"
import { Link } from "react-router-dom"

function ShopNavbar() {
  return (
    <div className="shop-navbar">
      <Link to='/'>
        <RegularBtn>Корзина</RegularBtn>
      </Link>
      <Link to='/'>
        <RegularBtn>Избранное</RegularBtn>
      </Link>
      <Link to='/'>
        <RegularBtn>Профиль</RegularBtn>
      </Link>
    </div>
  )
}
export default ShopNavbar
