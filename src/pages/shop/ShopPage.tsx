import React, { useEffect, useState } from 'react';
import { ProductsList } from '../../components/shop/ProductsList';
import { Input } from '../../components/ui/inputs/Input';
import Pagination from '../../components/ui/Pagination';
import { getPaginatedItems } from '../../utils/changePages';
import { Loader } from '../../components/ui/loader/Loader';
import cl from './ShopPage.module.css';

export const ShopPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);
  const limit = 4;
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Array<IProductItem>>([]);
  const [isLoading, setLoading] = useState(true);

  interface IProductItem {
    id: number;
    imgPath: string;
    title: string;
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const newData = getPaginatedItems({ query: search, limit, offset: (page - 1) * 4 });
      setData(newData.data);
      setTotal(newData.totalLength);
      setLoading(false);
    }, 1000);
  }, [search, page]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <div className={cl.shop_page_wrapper}>
      <Input
        placeholder="Search..."
        style={{ alignSelf: 'flex-end' }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />
      {isLoading ? <Loader /> : <ProductsList productsList={data} />}
      <Pagination totalCount={total} limit={limit} setPage={setPage} page={page} />
    </div>
  );
};

export default ShopPage;
