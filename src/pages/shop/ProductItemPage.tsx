import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../../utils/changePages';
import { ProductPageContent } from '../../components/shop/ProductItem/ProductPageContent';
import { Loader } from '../../components/ui/loader/Loader';

interface IProductItem {
  id: number;
  title: string;
  cost: string;
  type: string;
  portion: number;
  costPerServing: number;
  imgPath: string;
  description: string;
  recommends: string;
}
const init = {
  id: 1,
  title: 'string',
  cost: 'string',
  type: 'string',
  portion: 1,
  costPerServing: 1,
  imgPath: 'string',
  description: 'string',
  recommends: 'string',
};

const ProductItemPage: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [productItem, setProductItem] = useState<IProductItem>(init);
  const { id } = useParams<{ id: string }>();

  setTimeout(() => {
    setLoading(true);
    setProductItem(getItemById(Number(id)));
    setLoading(false);
  }, 1000);

  return isLoading ? <Loader /> : <ProductPageContent productItem={productItem} />;
};

export default ProductItemPage;
