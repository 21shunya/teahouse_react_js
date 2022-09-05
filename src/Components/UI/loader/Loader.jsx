import React from "react";
import cl from "./Loader.module.css"
import loader from "../../../assets/loader.svg"

function Loader() {
  return (
    <div className={cl.loader_wrapper}>
      <img className={cl.loader_img} src={loader} alt='' />
    </div>
  )
}

export default Loader