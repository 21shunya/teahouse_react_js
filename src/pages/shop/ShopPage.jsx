import { useEffect, useState } from 'react';
import ProductsList from '../../Components/Shop/ProductsList';
import ShopHeader from '../../Components/Shop/ShopHeader';
import Input from '../../Components/UI/inputs/Input';
import Pagination from '../../Components/UI/Pagination';
import { getPaginatedItems } from '../../utils/changePages';
import Loader from '../../Components/UI/loader/Loader';
import cl from '../shop/ShopPage.module.css';

function ShopPage() {
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const newData = getPaginatedItems({ query: search, limit, offset: (page - 1) * 4 });
      setData(newData.data);
      setTotal(newData.totalLength);
      setLoading(false);
    }, 2000);
  }, [search, page]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <div className={cl.shop_page}>
      <div className={cl.shop_page_wrapper}>
        <ShopHeader />
        <Input
          placeholder="Search..."
          style={{ alignSelf: 'flex-end' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        {isLoading ? <Loader /> : <ProductsList productsList={data} limit={limit} page={page} />}
        <Pagination totalCount={total} limit={limit} setPage={setPage} page={page} />
      </div>
      <img src="shop-page-picture.png" alt="" />
    </div>
  );
}

export default ShopPage;
