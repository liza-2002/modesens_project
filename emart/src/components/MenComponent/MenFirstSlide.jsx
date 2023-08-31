import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function MenFirstSlide() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
         <img className="d-block w-100"
         src="https://modesens.com/banner/17323/getimg/?img=%2Fbanner%2F20230831-modesens-Wanan-1140x400-EN.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17329/getimg/?img=%2Fbanner%2F20230830-modesens-Bernardelli-1140x400-M.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/16278/getimg/?img=%2Fbanner%2F20230626-modesens-sale-1140x400-EN_1687847854.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17152/getimg/?img=%2Fbanner%2F20230807-modesens-acnestudios-1140x400-M_1691397269.jpg?w=1140"
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
      <br/>
      <br/>
      <h2>TOP MEN BRANDS</h2>
        <p>Get the look you want—choose from 12,000+ of the hottest designers.</p>
    </>
  )
}