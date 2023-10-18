import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProducts from './Components/AddProducts.jsx';
import Update from './Components/Update.jsx';
import Root from './Components/Root';
import Error from './Components/Error';
import Home from './Components/Home';
import { ParallaxProvider } from 'react-scroll-parallax';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },

      {
        path: "addProduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "Update",
        element: <Update></Update>,
      }

    ]
  }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>

  </React.StrictMode>,
)
