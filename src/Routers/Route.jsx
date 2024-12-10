import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Hero from '../Components/Hero';
import Skills from '../Pages/Skills';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: '/skills',
          element: <Skills></Skills>
        },
        {
          path: '/portfolio',
          element: <Portfolio></Portfolio>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
      ]
    },
  ]);

export default Route;