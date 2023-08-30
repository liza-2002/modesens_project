import React from "react";

import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import { Community } from "../../Data/Community.js";
const noOfItems = 10;
const noOfCards = 4;
const autoPlayDelay = 800;
const chevronWidth = 80;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1200px;

  margin: 0 auto;
  margin-bottom: 100px;
`;

const Container = styled.div`
   
    position: relative;
   width:100%;
   height: 296px;
`

const SlideItem = styled.img`
  height: 100%;
  width: 100%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
 border: 1px solid #868686;
`;
const lineStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const horizontalLineStyle = {
    flex: '1',
    height: '1px',
    backgroundColor: '#000',
  };

  const textStyle = {
    margin: '0 10px',
  };





const carouselItems = Community.map((e) => (
  <Container  className="slideDiv">

    <div style={{  display: "flex",border: "none",justifyContent: "center",padding: "20px 8px", height: "100%",width:"85%",margin: "auto"}}>
      <SlideItem style={{width: "100%"}} src={e.src} />
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
          <br/>
      <div>
      <div style={lineStyle}>
        <div style={horizontalLineStyle}></div>
        <div style={textStyle}><h3>Community Posts</h3></div>
        <div style={horizontalLineStyle}></div>
      </div>
    </div>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={
            <button
              style={{ border: "none", background: "white", fontSize: "35px",fontWeight:"100",color:"gray" }}
            >
              {" "}
              {"→"}
            </button>
          }
          leftChevron={
            <button
              style={{ border: "none", background: "white", fontSize: "35px",fontWeight:"100",color:"gray" }}
            >
              {"←"}
            </button>
          }
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
        <button>View All</button>
      </Wrapper>
    );
  }
}
