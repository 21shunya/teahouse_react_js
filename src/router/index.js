import MainPage from "../pages/MainPage";
import ShopPage from "../pages/ShopPage";
import ProductItemPage from "../pages/ProductItemPage";

export const routes = [
  { path: '/', element: <MainPage /> },
  { path: '/shop', element: <ShopPage /> },
  { path: '/shop1', element: <ProductItemPage /> },
]