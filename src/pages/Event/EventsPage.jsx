import React, { useEffect, useRef, useState } from "react";
import EventsList from "../../Components/Event/EventsList";
import MainPageNavbar from "../../Components/MainPageNavbar"
import Logo from "../../Components/Logo"
import EventService from "../../API/EventService"
import Loader from "../../Components/UI/loader/Loader"
import cl from "./EventsPage.module.css"
import { useObserver } from "../../hooks/useObserver";

function EventsPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const limit = 10;
  const [page, setPage] = useState(1)
  const lastElement = useRef();

  useObserver(lastElement, page < 10, isLoading, () => {
    setPage(page + 1)
  })

  useEffect(() =>{
    setLoading(true)
    setTimeout(() => {
      fetchData();
    }, 1500);
  }, [page])
  
  async function fetchData() {
      setPosts([...posts, ...await EventService.getAllEvents(limit, page)])
      setLoading(false)
  }

  return (
    <div className={cl.page_wrapper}>
      <div className={cl.header}>
        <MainPageNavbar />
        <Logo />
      </div>
      <EventsList 
          lastElement={lastElement}
          posts={posts}
          page={page} 
          setPage={setPage}
          isLoading={isLoading}
        />
        {isLoading && <Loader />}
        <div ref={lastElement} className={cl.observed_elem}> </div>
    </div>
  )
}

export default EventsPage;