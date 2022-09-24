import { Route, Routes } from 'react-router-dom';
import { routes } from '../router';
import React from 'react';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
