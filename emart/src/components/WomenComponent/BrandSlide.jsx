import React from "react";

import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import { Brand } from "../../WomenData/Brand.js";
const noOfItems = 10;
const noOfCards = 4;
const autoPlayDelay = 1000;
const chevronWidth = 40;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  max-height:150px;
  // margin-bottom: 2px; // Adjust this value to control the space below the carousel
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 296px;
`;


const SlideItem = styled.img`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const carouselItems = Brand.map((e) => (
  <Container  className="slideDiv">

    <div style={{  display: "flex",border: "none",justifyContent: "center",padding: "10px 8px", height: "80%",width:"60%",margin: "auto"}}>
      <SlideItem style={{width: "100%",height:"30%"}} src={e.src} />
    </div>
    
  </Container>
));

export default class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () =>
    this.setState((prevState) => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
    }));

  onChange = (value) => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          children={carouselItems}
        />
      </Wrapper>
    );
  }
}