import MainPage from '../pages/MainPage';
import ShopPage from '../pages/shop/ShopPage';
import ProductItemPage from '../pages/shop/ProductItemPage';
import ErrorPage from '../pages/error/ErrorPage';
import EventsPage from '../pages/event/EventsPage';
import CartPage from '../pages/shop/CartPage';

export const routes = [
  { path: '/', element: <MainPage /> },
  { path: '/shop', element: <ShopPage /> },
  { path: '/shop/:id', element: <ProductItemPage /> },
  { path: '/shop/cart', element: <CartPage /> },
  { path: '/events', element: <EventsPage /> },
  { path: '*', element: <ErrorPage /> },
];
