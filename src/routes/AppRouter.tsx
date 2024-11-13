import React from 'react';
import { RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import SalaryCalculator from '../pages/SalaryCalculator';

type CustomRouteConfig = RouteObject & {
  element: React.ReactNode;
  children?: CustomRouteConfig[];
};

const routes: CustomRouteConfig[] = [
  {
    path: '/',
    element: <MainLayout title="Home Layout" />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'SalaryCalculator', element: <SalaryCalculator /> }
    ]
  }
];

export default routes;
