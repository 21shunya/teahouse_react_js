import React from "react";
import EventsList from "../../Components/Event/EventsList";
import MainPageNavbar from "../../Components/MainPageNavbar"

function EventsPage() {
  return (
    <div>
      <MainPageNavbar />
      <EventsList />
    </div>
  )
}

export default EventsPage;