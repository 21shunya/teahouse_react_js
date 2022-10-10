import info from '../aboutInfo.json';
import cl from './MainPage.module.css';
import React from 'react';
import MainHeader from '../components/MainHeader';

const MainPage: React.FC = () => {
  return (
    <div className={cl.page_wrapper}>
      <div className={cl.content_wrapper}>
        <MainHeader />
        <div className={cl.content}>
          <h2>{info.title}</h2>
          {info.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
