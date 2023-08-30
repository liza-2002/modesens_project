import React from 'react';

export default function Productdetails({ url, name, desc, price, stores, type }) {
    return (
        <div className="product-card">
            <img src={url} alt={name} />
            <h3>{name}</h3>
            <p>{desc}</p>
            <p>${price}</p>
            <p>Compare {stores} stores</p>
            <p>Type: {type}</p>
        </div>
    );
}


