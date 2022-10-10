import React from 'react';
import { EventsList } from '../../components/event/EventsList';
import cl from './EventsPage.module.css';
import MainHeader from '../../components/MainHeader';

const EventsPage: React.FC = () => {
  return (
    <div className={cl.page_wrapper}>
      <div className={cl.content_wrapper}>
        <MainHeader />
        <EventsList />
      </div>
    </div>
  );
};

export default EventsPage;
