import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EventService from "../../API/EventService"
import cl from "./EventsList.module.css"

function EventsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    async function fetchData() {
    setPosts(await EventService.getAllEvents())
    }
    fetchData();
  }, [])


  return (
    <div className={cl.list}>
      {posts.map(post => 
        <div className={cl.list_item} key={post.id}>
          <span>{post.title}</span>
          <span>{post.body}</span>
        </div>
      )}
    </div>
  )
}

export default EventsList;