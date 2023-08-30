import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Productdetails(props) {
  const { url, name, desc, price, stores, id } = props; // Destructure 'id' from 'props'
  const navigate = useNavigate();

  function nav() {
    navigate(`/products/${id}`);
  }

  return (
    <Col sm={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text className="text-center">{desc}</Card.Text>
          <Card.Text className="text-center">${price}</Card.Text>
          <Card.Text className="text-center">Compare {stores} stores</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
