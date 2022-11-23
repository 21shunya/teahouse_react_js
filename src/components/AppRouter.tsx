import { Route, Routes } from 'react-router-dom';
import { mainRoutes, shopRoutes, productRoute } from '../router';
import React from 'react';
import ShopLayout from './layouts/ShopLayout';
import ProductLayout from './layouts/ProductLayout';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {mainRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path={'/shop'} element={<ShopLayout />}>
        {shopRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path={'/shop'} element={<ProductLayout />}>
        <Route path={productRoute.path} element={productRoute.element} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
