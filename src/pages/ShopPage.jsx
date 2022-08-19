import React, { useState } from "react";
import productsList from"../productsList.json"
import ProductsList from "../Components/Shop/ProductsList";
import ShopHeader from "../Components/Shop/ShopHeader";
import Input from "../Components/UI/inputs/Input";
import "../styles/ShopPage.css"
import Pagination from "../Components/UI/Pagination";

function ShopPage() {
  const [search, setSearch] = useState('');
   const [totalCount, setTotalCount] = useState(productsList.length);
   const [limit, setLimit] = useState(4)
   const [page, setPage] = useState(1);
  
  function getSearchedProducts() {
    if(search) {
      return productsList.filter(item => item.body.toLowerCase().includes(search.toLowerCase()))
    }
    return productsList
  }
  const searchedProducts = getSearchedProducts()

  return (
    <div className="shop-page">
      <div className="shop-page-wrapper">
        <ShopHeader />
        <Input 
          placeholder='Search...' 
          style={{alignSelf: 'flex-end'}}
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
        />
        <ProductsList productsList={searchedProducts} limit={limit} page={page}/>
        <Pagination totalCount={totalCount} limit={limit} setPage={setPage} page={page}/>
      </div>
      <img src="shop-page-picture.png" alt=""/>
    </div>
  )
}

export default ShopPage;