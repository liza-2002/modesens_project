import React from "react";
import styled from "styled-components";
// import Navbar from '../components/Nav/Navbar'
import MenFirstSlide from '../components/MenComponent/MenFirstSlide'
import BrandSlide from '../components/WomenComponent/BrandSlide'
import TrendNow from '../components/MenComponent/TrendNow'
import SpecialOffer from '../components/MenComponent/SpecialOffer'
import CommunityPost from '../components/WomenComponent/CommunityPost'
import RoundImage from '../components/MenComponent/RoundImage'
// import {Footer} from '../components/Footer/Footer'
//import Gut from '../components/Gutter/Gut'
import { MenGUt } from "../components/Gutter/MenGUt";


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

const Men = () => {
  return (
    <div style={{ textAlign: "center", zIndex: "-3" }}>
    {/* <Navbar/> */}
    <MenFirstSlide/>
    <br/>
    <br/>
    <br/>
    <BrandSlide/>
    <br/>
    <br/>
    <RoundImage/>
    <br/>
    <MenGUt/>
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

export default Men;
