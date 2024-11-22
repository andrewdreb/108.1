// src/Product.js
import React from 'react';

function Product({ name, price, description }) {
    return (
        <div className="product">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
        </div>
    );
}

export default Product;
