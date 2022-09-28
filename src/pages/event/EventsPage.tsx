import React, { useEffect, useRef, useState } from 'react';
import { EventsList } from '../../components/event/EventsList';
import { MainPageNavbar } from '../../components/MainPageNavbar';
import { Logo } from '../../components/ui/logo/Logo';
import EventService from '../../api/EventService';
import { Loader } from '../../components/ui/loader/Loader';
import cl from './EventsPage.module.css';
import { useObserver } from '../../hooks/useObserver';

interface IEvent {
  id: number;
  title: string;
  body: string;
}

const EventsPage: React.FC = () => {
  const [posts, setPosts] = useState<Array<IEvent>>([]);
  const [isLoading, setLoading] = useState(true);
  const limit = 10;
  const [page, setPage] = useState(1);
  const lastElement = useRef<HTMLDivElement>(null);

  useObserver(lastElement, page < 10, isLoading, () => {
    setPage(page + 1);
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
    <div className={cl.page_wrapper}>
      <div className={cl.header}>
        <MainPageNavbar />
        <Logo />
      </div>
      <EventsList posts={posts} />
      {isLoading && <Loader />}
      <div ref={lastElement} className={cl.observed_elem}>
        {' '}
      </div>
    </div>
  );
};

export default EventsPage;
