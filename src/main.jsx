import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Main from './Main/Main.jsx';
import Home from './Home/Home.jsx';
import SignIn from './Component/SignIN/signIn.jsx';
import SignUp from './Component/SignUP/signUp.jsx';
import ProductCard from './Component/ProductCard/productCard.jsx';
import AddProduct from './Component/AddProduct/addProduct.jsx';
import Product from './Component/Product/Product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
         path: "/",
          element: <Home></Home>
      },
          { 
            path: "signin", 
            element: <SignIn></SignIn> 
          },
          { 
            path: "signup", 
            element: <SignUp></SignUp> 
          },
          {
            path: "productCard",
            element: <ProductCard></ProductCard>
          },
          {
            path: "addProduct",
            element: <AddProduct></AddProduct>
          },
          {
            path: "product",
            element: <Product></Product>
          }
        ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
