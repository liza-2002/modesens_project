import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

function RoundImage() {
  return (
    <Container>
      <ImageContainer>
        <Image src="https://cdn.modesens.com/banner/20220919-W-Sale.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20220919-M-New.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/navi/M-tops_1682562305.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/navi/M-jeans_1682562303.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20220919-M-Jackets.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/navi/M-shorts_1682562304.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/navi/M-sneakers_1682562305.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/navi/M-sandals_1682562304.jpg" roundedCircle />
      </ImageContainer>
      <TextContainer>
        <p>SALE</p>
        <p>NEW<br/>ARRIVAL</p>
        <p>TOPS</p>
        <p>JEANS</p>
        <p>JACKET</p>
        <p>SHORTS</p>
        <p>SNEAKER</p>
        <p>SANDAL</p>
      </TextContainer>
    </Container>
  );
}

export default RoundImage;