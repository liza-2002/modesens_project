
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function WomenFirstSlide() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
         <img className="d-block w-100"
         src="https://modesens.com/banner/17316/getimg/?img=%2Fbanner%2F20230829-modesens-BaseBlu-1140x400.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17316/getimg/?img=%2Fbanner%2F20230829-modesens-BaseBlu-1140x400.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17302/getimg/?img=%2Fbanner%2F20230828-modesens-FWRD-1140x400-F-US.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17295/getimg/?img=%2Fbanner%2F20230828-modesens-Gucci-1140x400-F-US.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/16277/getimg/?img=%2Fbanner%2F20230626-modesens-sale-1140x400-EN_1687847854.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/16403/getimg/?img=%2Fbanner%2F20230718-modesens-Cettire-1140x400.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/16182/getimg/?img=%2Fbanner%2F20230510-modesens-Revolve-1140x400.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17096/getimg/?img=%2Fbanner%2F20230801-modesens-Shopbop-1140x400.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
      </Carousel>
    </>
  )
}