import React from "react";
import RegularBtn from "./UI/buttons/RegularBtn";
import { Link } from "react-router-dom"

function MainPageNavbar() {
  const buttonsList = [
    {name: 'Контакты', path: '/contacts'},
    {name: 'События', path: '/events'},
    {name: 'Меню', path: '/menu'},
    {name: 'Магазин', path: '/shop'},
    {name: 'Акции', path: '/actions'}
  ]
  return (
    <div className="navbar-wrapper">
      {buttonsList.map(btn =>
        <Link key={btn.path} to={btn.path}>
          <RegularBtn>{btn.name}</RegularBtn>
        </Link>  
      )}
    </div>
  )
}

export default MainPageNavbar;