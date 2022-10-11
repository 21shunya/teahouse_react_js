import { AddingToCart } from './AddingToCart';
import cl from './ProductItem.module.css';
import React from 'react';
import { SecondaryBtn } from '../../ui/buttons/SecondaryBtn';
import { useActions } from '../../../hooks/useActions';

interface IDescriptionForm {
  productItem: { id: number; portion: number; costPerServing: number };
}

export const DescriptionForm: React.FC<IDescriptionForm> = ({ productItem }) => {
  const { addFavoriteAction } = useActions();
  return (
    <div className={cl.descr_form}>
      <AddingToCart productItem={productItem} />
      <SecondaryBtn onClick={() => addFavoriteAction(productItem.id)}>В избранное</SecondaryBtn>
    </div>
  );
};
