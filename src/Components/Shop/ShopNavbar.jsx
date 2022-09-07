import React from "react";
import RegularBtn from "../UI/buttons/RegularBtn"
import { Link } from "react-router-dom"
import NumberIcon from "../UI/icons/NumberIcon"

function ShopNavbar() {
  const buttonsList = [
    {name: 'Корзина', value: 0, path: '/cart'},
    {name: 'Избранное', value: 0, path: '/favourite'},
    {name: 'Профиль', value: '', path: '/profile'}
  ]

  return (
    <div className="shop-navbar">
      {buttonsList.map(btn =>
      <Link key={btn.path} to={btn.path}>
        <RegularBtn>
          {btn.name}
          {btn.name !== 'Профиль'
          ? <NumberIcon filled>{btn.value}</NumberIcon>
          : null
          }
        </RegularBtn>
      </Link>
      )}
    </div>
  )
}
export default ShopNavbar
