import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Productdetails from './Productdetails';
import data from '../data.json';

export default function BeautyBox() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    setFetchedData(data.Beauty);
  }, []);

  return (
    <Container>
      <Row>
        {fetchedData.map((ele) => (
          <Productdetails key={ele.url} {...ele} />
        ))}
      </Row>
    </Container>
  );
}
