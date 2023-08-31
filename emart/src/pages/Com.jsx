import React from 'react'
import styled from "styled-components";
import Community from '../components/Community/Community';


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

const Com = () => {
  return (
    <div style={{ textAlign: "center", zIndex: "-3" }}>
    <Community/>
  </div>
  );
};

export default Com;