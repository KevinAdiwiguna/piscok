import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Main } from "./View/Main"
import { Err404 } from "./View/Err404"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Err404 />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);


