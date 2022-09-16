import React from "react";
import Logo from "../Components/UI/logo/Logo";
import MainPageNavbar from "../Components/MainPageNavbar";
import info from "../aboutInfo.json"
import cl from "./MainPage.module.css"

function MainPage() {
  return (
    <div className={cl.page_wrapper}>
      <div className={cl.content_wrapper}>
        <div className={cl.header}>
          <MainPageNavbar />
          <Logo />
        </div>
        <div className={cl.content}>
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