
import React from 'react'
import Navbar from '../components/Nav/Navbar'
import styled from "styled-components";
// import Navbar from '../components/Nav/Navbar'
import HomeFirstSlide from '../components/HomeComponent/HomeFirstSlide'
import BrandSlide from '../components/WomenComponent/BrandSlide'
import TrendNow from '../components/HomeComponent/TrendNow'
import SpecialOffer from '../components/HomeComponent/SpecialOffer'
import CommunityPost from '../components/WomenComponent/CommunityPost'
import RoundImage from '../components/HomeComponent/RoundImage'
// import {Footer} from '../components/Footer/Footer'
import Gut from '../components/Gutter/Gut'


const Wrapper = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 25%;
  border-right: 1px solid #f5f5f5;
`;
const Right = styled.div`
  width: 75%;
  padding-left: 10px;
`;

const Home = () => {
  return (
    <div style={{ textAlign: "center", zIndex: "-3" }}>

    {/* <Navbar/> */}
    <HomeFirstSlide/>
    <br/>
    <br/>
    <br/>
    <BrandSlide/>
    <br/>
    <br/>
    <RoundImage/>
    <br/>
    <Gut/>
    <br/>
    <TrendNow/>
    <br/>
    <SpecialOffer/>
    <CommunityPost/>
    {/* <br/>
    <Footer/> */}
  </div>
  );
};

export default Home;
