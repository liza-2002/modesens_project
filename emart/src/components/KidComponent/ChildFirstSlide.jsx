import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

export default function ChildFirstSlide() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
         <img className="d-block w-100"
         src="https://modesens.com/banner/15132/getimg/?img=%2Fbanner%2F20230301-modesens-NewArrivals-Nickis-1140x400-K.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img className="d-block w-100"
         src="https://modesens.com/banner/15299/getimg/?img=%2Fbanner%2F20230320-modesens-ESSENTIALS-1140x400-K_1679041564.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/15131/getimg/?img=%2Fbanner%2F20230301-modesens-NewToSale-Nike-1140x400-K.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/17098/getimg/?img=%2Fbanner%2F20230801-modesens-Shopbop-1140x400.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/16184/getimg/?img=%2Fbanner%2F20230510-modesens-Revolve-1140x400.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/16405/getimg/?img=%2Fbanner%2F20230718-modesens-Cettire-1140x400.jpg?w=1140"
        
         alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100"
         src="https://modesens.com/banner/16279/getimg/?img=%2Fbanner%2F20230626-modesens-sale-1140x400-EN_1687847854.jpg?w=1140"
         alt="First slide"/>
        </Carousel.Item>
      </Carousel>
      <br/>
      <br/>

      <h2>TOP KIDS' BRANDS</h2>
    <p>Get the look you want—choose from 12,000+ of the hottest designers.</p>
    </>
  )
}