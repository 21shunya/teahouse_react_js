import { ProductItem } from './ProductItem';
import cl from './Shop.module.css';
import React from 'react';

interface IProductItem {
  id: number;
  imgPath: string;
  title: string;
}

interface IProductsList {
  productsList: Array<IProductItem>;
}

export const ProductsList: React.FC<IProductsList> = ({ productsList }) => {
  return (
    <div className={cl.products_list}>
      {productsList.length ? (
        productsList.map((item) => <ProductItem key={item.id} item={item} />)
      ) : (
        <div>Товары отсутствуют</div>
      )}
    </div>
  );
};
