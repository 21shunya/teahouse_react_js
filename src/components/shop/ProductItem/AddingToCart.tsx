import { PrimaryBtn } from '../../ui/buttons/PrimaryBtn';
import QuantityChange from '../../ui/QuantityChange';
import cl from './ProductItem.module.css';
import React from 'react';

interface IAddingToCart {
  productItem: { portion: number; costPerServing: number };
}

export const AddingToCart: React.FC<IAddingToCart> = ({ productItem }) => {
  const quantity = 1;
  return (
    <div className={cl.adding_to_cart}>
      <div className={cl.adding_to_cart_btns}>
        <QuantityChange>{quantity}</QuantityChange>
        <PrimaryBtn>В корзину</PrimaryBtn>
      </div>
      <div className={cl.cost_wrapper}>
        <span>{productItem.portion}г.</span>
        <span>{productItem.costPerServing}р.</span>
      </div>
    </div>
  );
};
