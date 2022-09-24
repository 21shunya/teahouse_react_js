import cl from './Loader.module.css';
import React from 'react';
import loader from '../../../assets/loader.svg';

export const Loader: React.FC = () => {
  return (
    <div className={cl.loader_wrapper}>
      <img className={cl.loader_img} src={loader} alt="" />
    </div>
  );
};
