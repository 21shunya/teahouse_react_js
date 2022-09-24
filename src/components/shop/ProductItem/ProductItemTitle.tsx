import cl from './ProductItem.module.css';
import React from 'react';

interface IProductItemTitle {
  productItem: { title: string; cost: string; type: string };
}

export const ProductItemTitle: React.FC<IProductItemTitle> = ({ productItem }) => {
  return (
    <div className={cl.title_substrate}>
      <div className={cl.title_wrapper}>
        <span className={cl.title_h1}>{productItem.title}</span>
        <span className={cl.title_h5}>
          {productItem.cost} {productItem.type}
        </span>
      </div>
    </div>
  );
};

export default ProductItemTitle;
