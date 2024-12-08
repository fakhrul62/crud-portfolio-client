import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../Layout/Root';
import Home from '../Pages/Home';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
      ]
    },
  ]);

export default Route;