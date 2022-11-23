import MainPage from '../pages/MainPage';
import ShopPage from '../pages/shop/ShopPage';
import ProductItemPage from '../pages/shop/ProductItemPage';
import ErrorPage from '../pages/error/ErrorPage';
import EventsPage from '../pages/event/EventsPage';
import CartPage from '../pages/shop/CartPage';
import FavouritePage from '../pages/shop/FavouritePage';

export const mainRoutes = [
  { path: '/', element: <MainPage /> },
  { path: '/events', element: <EventsPage /> },
  { path: '*', element: <ErrorPage /> },
];

export const shopRoutes = [
  { path: '/shop', element: <ShopPage /> },
  { path: '/shop/cart', element: <CartPage /> },
  { path: '/shop/favourite', element: <FavouritePage /> },
];

export const productRoute = { path: '/shop/:id', element: <ProductItemPage /> };
