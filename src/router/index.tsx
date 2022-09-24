import MainPage from '../pages/MainPage';
import ShopPage from '../pages/shop/ShopPage';
import ProductItemPage from '../pages/shop/ProductItemPage';
import ErrorPage from '../pages/error/ErrorPage';
import EventsPage from '../pages/event/EventsPage';

export const routes = [
  { path: '/', element: <MainPage /> },
  { path: '/shop', element: <ShopPage /> },
  { path: '/shop/:id', element: <ProductItemPage /> },
  { path: '/events', element: <EventsPage /> },
  { path: '*', element: <ErrorPage /> },
];
