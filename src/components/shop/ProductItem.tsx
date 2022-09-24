import { useNavigate } from 'react-router-dom';
import cl from './Shop.module.css';
import React from 'react';

interface IProductItem {
  item: { id: number; imgPath: string; title: string };
}

export const ProductItem: React.FC<IProductItem> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className={cl.product_item_wrapper} onClick={() => navigate(`${item.id}`)}>
      <div style={{ backgroundImage: `url(${item.imgPath})` }} className={cl.img_wrapper}>
        <div className={cl.img_gradient}></div>
      </div>
      <div className={cl.product_text}>{item.title}</div>
    </div>
  );
};
