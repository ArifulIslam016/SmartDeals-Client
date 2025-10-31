import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';


const Roots = () => {
    return (
        <div>
        <Navbar></Navbar>
       <div className='max-w-[1640px] mx-auto'>
         <Outlet></Outlet>
       </div>
        </div>
    );
};

export default Roots;