import React from "react";
import ShopNavbar from "./ShopNavbar";
import Logo from "../Logo"
import RegularBtn from "../UI/buttons/RegularBtn";
import { useNavigate } from 'react-router-dom';

function ShopHeader(props) {
  const navigate = useNavigate();
  return (
    <div className="shop-header">
      <Logo />
      {props.ProductItem 
      ? <div className="pr-item-navbar">
          <RegularBtn onClick={() => navigate(-1)}>
            Каталог
          </RegularBtn>
          <ShopNavbar />
        </div>
      : <ShopNavbar />
      }
    </div>
  )
}

export default ShopHeader