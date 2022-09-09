import React from "react";
import cl from "./EventsList.module.css"

function EventsList({posts, page, setPage, isLoading, lastElement}) {
  
  return (
    <div className={cl.list}>
      {posts.map(post => 
        <div className={cl.list_item} key={post.id}>
          <span>{post.id}. {post.title}</span>
          <span>{post.body}</span>
        </div>
      )}
    </div>
  )
}

export default EventsList;