import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './routes/homePage';
import CalculatorPage from './routes/calculatorPage';
import QuotePage from './routes/quotePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>404</div>,
  },
  {
    path: '/calculator',
    element: <CalculatorPage />,
  },
  {
    path: '/quote',
    element: <QuotePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
