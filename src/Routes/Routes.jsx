import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Components/Home/Home";
import AllProducts from "../Components/AllProducts/AllProducts";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import MyBids from "../Components/MyBids/MyBids";
import DetailedProduct from "../Components/DetailedProduct/DetailedProduct";
import MyProducts from "../Components/MyProducts/MyProducts";
import PrivateProvider from "../PrivateRoute/PrivateProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allProducts",
        Component: AllProducts,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "/mybids",
        element: (
          <PrivateProvider>
            <MyBids></MyBids>
          </PrivateProvider>
        ),
      },

      {
        path: "/myproducts",
        element: (
          <PrivateProvider>
            <MyProducts></MyProducts>
          </PrivateProvider>
        ),
      },
      {
        path: "/product-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`).then((res) =>
            res.json()
          ),
        Component: DetailedProduct,
      },
    ],
  },
]);
