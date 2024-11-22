// src/Catalog.js
import React from 'react';
import Product from './Product';

function Catalog() {
    const products = [
        { name: 'Product 1', price: 29.99, description: 'Description for product 1' },
        { name: 'Product 2', price: 49.99, description: 'Description for product 2' },
        { name: 'Product 3', price: 19.99, description: 'Description for product 3' },
    ];

    return (
        <div className="catalog">
            <h1>Catalog</h1>
            <div className="product-list">
                {products.map((product, index) => (
                    <Product key={index} {...product} />
                ))}
            </div>
        </div>
    );
}

export default Catalog;
