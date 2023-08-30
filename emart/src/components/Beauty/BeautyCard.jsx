import React, { useState, useEffect } from 'react';
import ProductDetails from '../Product/Productdetails'; // Update the path as per your file structure
import { Container, Row } from 'react-bootstrap';

export default function BeautyCard() {
    const [fetchedData, setFetchedData] = useState([]);
    const [filter, setFilter] = useState(''); // Initial filter state

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setFetchedData(data.Beauty);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    // Filtering logic based on 'type' field
    const filteredData = fetchedData.filter(product => product.type === filter);

    return (
        <Container>
            <h1 className="mt-4">Beauty Products</h1>
            <div>
                <select onChange={e => setFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="womens">Women's</option>
                    <option value="mens">Men's</option>
                    {/* Add more options if needed */}
                </select>
            </div>
            <Row>
                {filteredData.map((product, index) => (
                    <ProductDetails key={product.url} {...product} />
                ))}
            </Row>
        </Container>
    );
}
