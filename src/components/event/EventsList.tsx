import cl from './EventsList.module.css';
import React, { useEffect, useRef, useState } from 'react';
import EventService from '../../api/EventService';
import { Loader } from '../ui/loader/Loader';
import { useObserver } from '../../hooks/useObserver';
import EventPhotoContainers from './EventPhotoContainers';

interface IEvent {
  id: number;
  title: string;
}

export const EventsList: React.FC = () => {
  const [posts, setPosts] = useState<Array<IEvent>>([]);
  const [isLoading, setLoading] = useState(true);
  const limit = 10;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<Array<number>>([]);
  const lastElement = useRef<HTMLDivElement>(null);

  useObserver(lastElement, page < 10, isLoading, () => {
    setPage(page + 1);
    setTotalPages([...totalPages, page]);
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchData();
    }, 500);
  }, [page]);

  async function fetchData() {
    setPosts([...posts, ...(await EventService.getAllEvents(limit, page))]);
    setLoading(false);
  }

  return (
    <div className={cl.list_wrapper}>
      {posts.length ? (
        totalPages.map((page) =>
          page > 1 ? (
            <div key={page} className={[cl.list, cl.list_margin].join(' ')}>
              {['left', 'right'].map((pos) => (
                <EventPhotoContainers key={pos} pos={pos} posts={posts} page={page} />
              ))}
            </div>
          ) : (
            <div key={page} className={cl.list}>
              {['left', 'right'].map((pos) => (
                <EventPhotoContainers key={pos} pos={pos} posts={posts} page={page} />
              ))}
            </div>
          ),
        )
      ) : (
        <div className={cl.list}>There are no events yet</div>
      )}

      {isLoading && <Loader />}
      <div ref={lastElement} className={cl.observed_elem}>
        {' '}
      </div>
    </div>
  );
};
