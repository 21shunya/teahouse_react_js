import { AddingToCart } from './AddingToCart';
import cl from './ProductItem.module.css';
import React from 'react';
import { SecondaryBtn } from '../../ui/buttons/SecondaryBtn';

interface IDescriptionForm {
  productItem: { id: number; portion: number; costPerServing: number };
}

export const DescriptionForm: React.FC<IDescriptionForm> = ({ productItem }) => {
  return (
    <div className={cl.descr_form}>
      <AddingToCart productItem={productItem} />
      <SecondaryBtn>В избранное</SecondaryBtn>
    </div>
  );
};
