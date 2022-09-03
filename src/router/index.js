import MainPage from "../pages/MainPage";
import ShopPage from "../pages/ShopPage";
import ProductItemPage from "../pages/ProductItemPage";
import ErrorPage from "../pages/Error/ErrorPage";

export const routes = [
  { path: '/', element: <MainPage /> },
  { path: '/shop', element: <ShopPage /> },
  { path: '/shop/:id', element: <ProductItemPage /> },
  {path: '*', element: <ErrorPage />}
]