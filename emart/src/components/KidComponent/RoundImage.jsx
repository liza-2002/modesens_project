import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 95px;
`;

function RoundImage() {
  return (
    <Container>
      <ImageContainer>
        <Image src="https://cdn.modesens.com/banner/20220919-W-Sale.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20220919-K-New.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20220919-K-Babygirls.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20220919-K-Babyboys.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20220919-K-Girls.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20220919-K-Boys.jpg" roundedCircle />
    
      </ImageContainer>
      <TextContainer>
        <p>SALE</p>
        <p>NEW<br/>ARRIVAL</p>
        <p>BABYGIRL</p>
        <p>BABYBOY</p>
        <p>GIRLS</p>
        <p>BOYS</p>
      </TextContainer>
    </Container>
  );
}

export default RoundImage;