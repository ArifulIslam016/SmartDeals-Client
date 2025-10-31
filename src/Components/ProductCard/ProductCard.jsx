import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({Product}) => {
    const{image,_id,price_min,price_max,title}=Product;
    
    return (
       <div className="card bg-base-100  shadow-sm">
  <figure className="px-4 pt-4">
    <img
      src={`${image}`}
      alt={`Image NOt Availabe right now${title}`}
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">Card Title</h2>
    <p>Price:{price_min}-{price_max}</p>
    <div className="card-actions">
      <Link to={`/product-details/${_id}`} className="btn btn-primary w-full">View Details</Link>
    </div>
  </div>
</div>
    );
};

export default ProductCard;
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