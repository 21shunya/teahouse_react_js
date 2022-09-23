import { useState } from 'react';
import ShopHeader from '../../Components/Shop/ShopHeader';
import { useParams } from 'react-router-dom';
import { getItemById } from '../../utils/changePages';

import ProductPageContent from '../../Components/Shop/ProductItem/ProductPageContent';
import Loader from '../../Components/UI/loader/Loader';
import cl from '../shop/ShopPage.module.css';

function ProductItemPage() {
  const [isLoading, setLoading] = useState(true);
  const [productItem, setProductItem] = useState({});
  const params = useParams();

  setTimeout(() => {
    setLoading(true);
    setProductItem(getItemById(params.id));
    setLoading(false);
  }, 2000);

  return (
    <div className={cl.product_page}>
      <ShopHeader productPage />
      {isLoading ? <Loader /> : <ProductPageContent productItem={productItem} />}
    </div>
  );
}

export default ProductItemPage;
