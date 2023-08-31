import React from "react";
import Navbar from "../components/Nav/Navbar";
import WomenFirstSlide from "../components/WomenComponent/WomenFirstSlide";
import BrandSlide from "../components/WomenComponent/BrandSlide";
import TrendNow from "../components/WomenComponent/TrendNow";
import SpecialOffer from "../components/WomenComponent/SpecialOffer";
import CommunityPost from "../components/WomenComponent/CommunityPost";
import RoundImage from "../components/WomenComponent/RoundImage";
import Gut from "../components/Gutter/Gut";
import { MenGUt } from "../components/Gutter/MenGUt";
// import BeautyCard from '../components/Beauty/BeautyCard'

export default function Home() {
  return (
    <div style={{ textAlign: "center", zIndex: "-3" }}>
      
      <WomenFirstSlide />
      <br />
      <br />
      <br />
      <BrandSlide />
      <br />
      <RoundImage />
      <br />
      <TrendNow />
      <br />
      <Gut />
      <br/>
      <SpecialOffer />
      <br />
      <CommunityPost />
    </div>
  );
}
