import React from 'react'
import styled from "styled-components";
import Lander from '../components/Lander/Lander'


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

const Mod = () => {
  return (
    <div style={{ textAlign: "center", zIndex: "-3" }}>
        <Lander/>
  </div>
  );
};
export default Mod;