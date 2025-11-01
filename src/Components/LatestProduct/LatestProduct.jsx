import React, { use } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const LatestProduct = ({LatesteProductPromise}) => {
    const LatestProductData=use(LatesteProductPromise)
    return (
        <div>
            <h1 className="text-center text-6xl font-extrabold py-20">
        Recent<span className="bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent"> Products </span>
      </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
                LatestProductData.map(singleProduct=><ProductCard key={singleProduct._id} Product={singleProduct}></ProductCard>)
            }
            </div>
        </div>
    );
};

export default LatestProduct;
