import React from "react";
import DescriptionForm from "../Components/Shop/ProductItem/DescriptionForm";
import ShopHeader from "../Components/Shop/ShopHeader";
import ProductItemTitle from "../Components/Shop/ProductItem/ProductItemTitle";
import "../styles/ShPageItem.css"
import { useParams } from "react-router-dom";
import { getItemById } from "../utils/ChangePages";
import { useState } from "react";
import ProductPageContent from "../Components/Shop/ProductItem/ProductPageContent";
import Loader from "../Components/UI/loader/Loader";

function ProductItemPage() {
  const [isLoading, setLoading] = useState(true);
  const [productItem, setProductItem] = useState({});
  const params = useParams();
  
  setTimeout(() => {
    setLoading(true)
    setProductItem(getItemById(params.id));
    setLoading(false)
  }, 2000);
  
  return (
    <div className="sh-page-item">
      <ShopHeader ProductItem />
      {isLoading 
      ? <Loader />
      : <ProductPageContent productItem={productItem}/>
      }
    </div>
  )
}

export default ProductItemPage