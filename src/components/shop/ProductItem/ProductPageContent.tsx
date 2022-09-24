import { DescriptionForm } from './DescriptionForm';
import ProductItemTitle from './ProductItemTitle';
import cl from './ProductItem.module.css';
import React from 'react';

interface IProductPageContent {
  productItem: {
    id: number;
    title: string;
    cost: string;
    type: string;
    portion: number;
    costPerServing: number;
    imgPath: string;
    description: string;
    recommends: string;
  };
}

export const ProductPageContent: React.FC<IProductPageContent> = ({ productItem }) => {
  return (
    <div className={cl.content_wrapper}>
      <img
        className={cl.product_image}
        src={require(`../../../assets/${productItem.imgPath}`)}
        alt=""
      />
      <div className={cl.description_title}>
        <ProductItemTitle productItem={productItem} />
        <div className={cl.description_wrapper}>
          <DescriptionForm productItem={productItem} />
          <div className={cl.text_wrapper}>
            <span>Описание: {productItem.description}</span>
            <span>Рекомендации: {productItem.recommends}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
