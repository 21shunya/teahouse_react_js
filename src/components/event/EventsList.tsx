import cl from './EventsList.module.css';
import React from 'react';

interface IEvent {
  id: number;
  title: string;
  body: string;
}

interface IEventList {
  posts: IEvent[];
}

export const EventsList: React.FC<IEventList> = ({ posts }) => {
  return (
    <div className={cl.list}>
      {posts.map((post) => (
        <div className={cl.list_item} key={post.id}>
          <span>
            {post.id}. {post.title}
          </span>
          <span>{post.body}</span>
        </div>
      ))}
    </div>
  );
};
