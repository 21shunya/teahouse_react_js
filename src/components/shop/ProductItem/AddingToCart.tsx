import QuantityChange from '../../ui/QuantityChange';
import cl from './ProductItem.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCartAction } from '../../../store/action-creators/cart';
import { PrimaryBtn } from '../../ui/buttons/PrimaryBtn';

interface IAddingToCart {
  productItem: { id: number; portion: number; costPerServing: number };
}

export const AddingToCart: React.FC<IAddingToCart> = ({ productItem }) => {
  const quantity = 1;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCartAction(productItem.id));
  };

  return (
    <div className={cl.adding_to_cart}>
      <div className={cl.adding_to_cart_btns}>
        <QuantityChange>{quantity}</QuantityChange>
        <PrimaryBtn onClick={() => addToCart()}>В корзину</PrimaryBtn>
      </div>
      <div className={cl.cost_wrapper}>
        <span>{productItem.portion}г.</span>
        <span>{productItem.costPerServing}р.</span>
      </div>
    </div>
  );
};
