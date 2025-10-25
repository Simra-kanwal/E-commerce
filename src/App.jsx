
import React from 'react';
import {  createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx';
import Products from './Components/Products/Products.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Cart from './Components/Cart/Cart.jsx'
import SingleProduct from './Components/singleProduct/SingleProduct.jsx';
import Layout from './Components/AppLayout/Layout.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import { Provider } from './Components/ContextAPI/ProductContext.jsx';
import {FilterContextProvider} from './Components/ContextAPI/FilterContext.jsx'
import { CartProvider } from './Components/ContextAPI/CartContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "singleProduct/:id",
        element:<SingleProduct />
      },
      {
        path: "Products/singleProduct/:id",
        element:<SingleProduct />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ]
  }
])


function App() {
  return (
    <>
      <Provider>
        <FilterContextProvider>
          <CartProvider>
            <RouterProvider router={router} /> 
          </CartProvider>
        </FilterContextProvider>
      </Provider>
    </>
  )
}

export default App
