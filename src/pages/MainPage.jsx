import React from "react";
import Logo from "../Components/Logo";
import MainPageNavbar from "../Components/MainPageNavbar";
import "../styles/MainPage.css"
import info from "../aboutInfo.json"

function MainPage() {
  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <div className="header">
          <MainPageNavbar />
          <Logo />
        </div>
        <div className="content">
          <h2>{info.title}</h2>
          {info.description.map((paragraph, index) =>
          <p key={index}>{paragraph}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainPage;