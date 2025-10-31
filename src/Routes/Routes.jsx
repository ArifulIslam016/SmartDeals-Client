import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Components/Home/Home";
import AllProducts from "../Components/AllProducts/AllProducts";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import MyBids from "../Components/MyBids/MyBids";

export const router=createBrowserRouter([
    {path:'/',
    Component:Roots,
    children:[
        {
            index:true,
            Component:Home
        },{
            path:'/allProducts',
            Component:AllProducts,
        },{
            path:'register',
            Component:Register
        
        },{
            path:'login',
            Component:Login

        },{
            path:"/mybids",
            element: <MyBids></MyBids>
        },

    {
        path:"/myproducts",
        element: <MyBids></MyBids>

    }
        
    ]
    }
    

])