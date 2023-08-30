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
        <Image src="https://cdn.modesens.com/banner/20220919-W-New.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/navi/F-tops_1682504343.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20220919-W-Dresses.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20220919-W-Jackets.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/navi/F-skirts_1682504342.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/navi/F-sneakers_1682504343.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/navi/F-sandals_1682504342.jpg" roundedCircle />
      </ImageContainer>
      <TextContainer>
        <p>SALE</p>
        <p>NEW<br/>ARRIVAL</p>
        <p>TOP</p>
        <p>DRESS</p>
        <p>JACKET</p>
        <p>SKIRT</p>
        <p>SNEAKER</p>
        <p>SANDAL</p>
      </TextContainer>
    </Container>
  );
}

export default RoundImage;
