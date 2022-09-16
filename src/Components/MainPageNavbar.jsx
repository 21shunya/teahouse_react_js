import React from "react";
import RegularBtn from "./UI/buttons/RegularBtn";
import { Link } from "react-router-dom"
import cl from "../pages/MainPage.module.css"

function MainPageNavbar() {
  const buttonsList = [
    {name: 'Контакты', path: '/contacts'},
    {name: 'События', path: '/events'},
    {name: 'Меню', path: '/menu'},
    {name: 'Магазин', path: '/shop'},
    {name: 'Акции', path: '/actions'}
  ]
  return (
    <div className={cl.navbar_wrapper}>
      {buttonsList.map(btn =>
        <Link key={btn.path} to={btn.path}>
          <RegularBtn>{btn.name}</RegularBtn>
        </Link>  
      )}
    </div>
  )
}

export default MainPageNavbar;