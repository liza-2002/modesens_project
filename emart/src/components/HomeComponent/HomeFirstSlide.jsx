import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function HomeFirstSlide() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
         <img className="d-block w-100"
         src="https://modesens.com/banner/15140/getimg/?img=%2Fbanner%2F20230301-modesens-NewArrivals-Anthropologie-1140x400-H.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img className="d-block w-100"
         src="https://modesens.com/banner/16406/getimg/?img=%2Fbanner%2F20230718-modesens-Cettire-1140x400.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/16185/getimg/?img=%2Fbanner%2F20230510-modesens-Revolve-1140x400.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17099/getimg/?img=%2Fbanner%2F20230801-modesens-Shopbop-1140x400.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/15139/getimg/?img=%2Fbanner%2F20230301-modesens-NewToSale-Bloomingdale%27s-1140x400-H.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/16280/getimg/?img=%2Fbanner%2F20230626-modesens-sale-1140x400-EN_1687847854.jpg?w=1140"
        
         alt="First slide"/>
        </Carousel.Item>
        
      </Carousel>
    </>
    
  )
}
