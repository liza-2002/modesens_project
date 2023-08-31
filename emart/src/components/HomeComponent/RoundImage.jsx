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
        <Image src="https://cdn.modesens.com/banner/20230704new-88x88-H_1688440430.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20230704bath-88x88-H_1688440428.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20230704bed-88x88-H_1688440429.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20230704Furniture-88x88-H_1688440429.jpg" roundedCircle />
        <Image src="https://cdn.modesens.com/banner/20230704homedecor-88x88-H_1688440429.jpg" roundedCircle />
    
      </ImageContainer>
      <TextContainer>
        <p>SALE</p>
        <p>NEW<br/>ARRIVAL</p>
        <p>BIRTH</p>
        <p>BED</p>
        <p>FURNITURE</p>
        <p>HOMEDECOR</p>
      </TextContainer>
    </Container>
  );
}


export default RoundImage;