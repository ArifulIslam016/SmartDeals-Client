import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';


const Roots = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
    );
};

export default Roots;