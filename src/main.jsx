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
