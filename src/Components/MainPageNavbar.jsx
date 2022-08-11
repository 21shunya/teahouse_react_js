import React from "react";
import RegularBtn from "./UI/buttons/RegularBtn";
import { Link } from "react-router-dom"

function MainPageNavbar() {
  return (
    <div className="navbar-wrapper">
      <Link to='/'>
        <RegularBtn>Контакты</RegularBtn>
      </Link>
      <Link to='/'>
        <RegularBtn>События</RegularBtn>
      </Link>
      <Link to='/'>
        <RegularBtn>Меню</RegularBtn>
      </Link>
      <Link to='/shop'>
        <RegularBtn>Магазин</RegularBtn>
      </Link>
      <Link to='/'>
        <RegularBtn>Акции</RegularBtn>
      </Link>
    </div>
  )
}

export default MainPageNavbar;