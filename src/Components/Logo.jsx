import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to='/' className="logo-wrapper">
      <h1 className="first-line">Чайная.</h1>
      <div className="second-line">
        <h3>Коллеционный китайский чай</h3>
        <h1>
          <span>Дом</span>
          <span>чая.</span>
        </h1>
      </div>
    </NavLink>
  )
}

export default Logo;