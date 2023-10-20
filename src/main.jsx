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
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Components/AuthProvider';
import PrivateRoute from './Components/PrivateRoute';
import BrandCard from './Components/BrandCard';
import AddMainPageProduct from './Components/AddMainPageProduct';
import MainPageCard from './Components/MainPageCard';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';

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
        path: '/products/:brandName',
        element: <Products></Products>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}`)
      },
      {
        path: '/product/:productId',
        element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.productId}`)
      },
      {
        path:'/cart',
        element:<PrivateRoute><Cart></Cart></PrivateRoute>
      },

      {
        path: "/addProduct",
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },

      //bakayaro page
      {
        path: "mainPageProduct",
        element: <AddMainPageProduct></AddMainPageProduct>
      },

      {
        path: "/Update",
        element: <Update></Update>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ]
  }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </AuthProvider>
  </React.StrictMode>,
)
