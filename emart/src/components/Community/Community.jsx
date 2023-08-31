import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function HomeFirstSlide() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
         <img className="d-block w-100"
         src="https://modesens.com/banner/17248/getimg/?img=%2Fbanner%2F20230818-modesens-Blog1-1440x250.jpg?w=1440"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17249/getimg/?img=%2Fbanner%2F20230818-modesens-Blog2-1440x250.jpg?w=1440"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17298/getimg/?img=%2Fbanner%2F20230825-modesens-blog2-1440x250.jpg?w=1440"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17247/getimg/?img=%2Fbanner%2F20230818-modesens-hashtag-1440x250.jpg?w=1440"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17297/getimg/?img=%2Fbanner%2F20230825-modesens-blog1-1440x250.jpg?w=1440"
         alt="First slide"/>
        </Carousel.Item>
    

        
      </Carousel>
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1768000s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1778345s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1770300s?w=800" thumbnail />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1053417s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1615855s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1159750s?w=800" thumbnail />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1769339s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1769884s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1625454s?w=800" thumbnail />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1769343s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1769519s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1765901?w=400" thumbnail />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1769340s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1768006s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/product/31166720_103?w=400" thumbnail />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1768007s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1769520s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1470418s?w=800" thumbnail />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1739123s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1768001s?w=800" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn.modesens.com/umedia/1767163s?w=800" thumbnail />
        </Col>
      </Row>
    </Container>
    </>
    
  )
}