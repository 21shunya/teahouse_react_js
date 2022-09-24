import { RegularBtn } from './ui/buttons/RegularBtn';
import { Link } from 'react-router-dom';
import cl from '../pages/MainPage.module.css';
import React from 'react';

export const MainPageNavbar: React.FC = () => {
  const buttonsList = [
    { name: 'Контакты', path: '/contacts' },
    { name: 'События', path: '/events' },
    { name: 'Меню', path: '/menu' },
    { name: 'Магазин', path: '/shop' },
    { name: 'Акции', path: '/actions' },
  ];
  return (
    <div className={cl.navbar_wrapper}>
      {buttonsList.map((btn) => (
        <Link key={btn.path} to={btn.path}>
          <RegularBtn green={false}>{btn.name}</RegularBtn>
        </Link>
      ))}
    </div>
  );
};
