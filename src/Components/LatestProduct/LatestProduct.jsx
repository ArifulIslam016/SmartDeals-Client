import React, { use } from 'react';

const LatestProduct = ({LatesteProductPromise}) => {
    const LatestProductData=use(LatesteProductPromise)
    console.log(LatestProductData)
    return (
        <div>
            
        </div>
    );
};

export default LatestProduct;
/**
 * category
: 
"Electronics"
condition
: 
"used"
created_at
: 
"2025-10-27T13:00:00.000Z"
description
: 
"Dell XPS 13 with 11th Gen i7, 16GB RAM, 512GB SSD, like new."
email
: 
"seller8@example.com"
image
: 
"https://example.com/images/dellxps13.jpg"
location
: 
"Dhaka"
price_max
: 
115000
price_min
: 
95000
seller_contact
: 
"+8801788888888"
seller_image
: 
"https://example.com/images/seller8.jpg"
seller_name
: 
"Tanvir Alam"
status
: 
"pending"
title
: 
"Dell XPS 13"
usage
: 
"8 months old"
_id
: 
"654f1a000001000000000008"
 */