import React from 'react';
import Banner from '../Banner/Banner';
import LatestProduct from '../LatestProduct/LatestProduct';

const LatesteProductPromise=fetch('https://smartdeals-api-server.vercel.app/latest-product').then(res=>res.json())

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <LatestProduct LatesteProductPromise={LatesteProductPromise}></LatestProduct>
        </div>
    );
};

export default Home;