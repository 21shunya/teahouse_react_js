import React from "react";
import EventsList from "../../Components/Event/EventsList";
import MainPageNavbar from "../../Components/MainPageNavbar"
import Logo from "../../Components/Logo"
import cl from "./EventsPage.module.css"

function EventsPage() {
  return (
    <div className={cl.page_wrapper}>
      <div className={cl.header}>
        <MainPageNavbar />
        <Logo />
      </div>
      <EventsList />
    </div>
  )
}

export default EventsPage;