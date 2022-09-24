import React from 'react';
import { Link } from 'react-router-dom';
import cl from './ErrorPage.module.css';
import leaf from '../../assets/leaf.svg';

const ErrorPage: React.FC = () => {
  const leafList = [];

  for (let i = 0; i < 12; i++) {
    const l = `le_${i}`;
    if (i % 2 === 0) {
      leafList.push([cl.left_leaf, cl[l]]);
    } else {
      leafList.push([cl.right_leaf, cl[l]]);
    }
  }

  return (
    <div className={cl.page_wrapper}>
      <div className={cl.leaves_container}>
        <Link className={cl.link} to="/">
          Page Not Found
        </Link>
        {leafList.map((item, index) => (
          <img
            // disabled="disabled"
            key={index}
            className={item.join(' ')}
            src={leaf}
            alt="leaf"
          />
        ))}
      </div>
    </div>
  );
};

export default ErrorPage;
