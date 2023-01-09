import styled from "styled-components";
import { DEVICES } from "../../Theme";

const StyledImgContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 1em;
  box-sizing: border-box;
  white-space: pre-line;
  word-wrap: break-word;
  img {
    object-fit: contain;
    width: 300px;
    height: 300px;
    z-index: 2;
  }
  p {
    text-align: center;
    position: absolute;
    font-size: 1.4rem;
    z-index: 1;
    color: white;
    width: 250px;
    transform: translate(10%, 10%);
    /* 10 lines max*/
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
  }
  @media (${DEVICES["2XL"]}) {
    img {
      width: 250px;
      height: 250px;
    }
    p {
      font-size: 1.1rem;
      width: 200px;
      transform: translate(12.5%, 10%);
    }
  }
  @media (${DEVICES.XL}) {
    margin-bottom: 0.4em;
    img {
      width: 180px;
      height: 180px;
    }
    p {
      font-size: 1rem;
      width: 150px;
      -webkit-line-clamp: 8;
      transform: translate(10%, 10%);
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    color: brown;
    font-size: 1.5rem;
    margin-bottom: 1em;
    text-align: center;
  }
  h3:hover {
    color: red;
    cursor: pointer;
  }
  &:hover {
    ${StyledImgContainer} {
      cursor: pointer;
    }
  }
  &:hover {
    ${StyledImgContainer} {
      p {
        z-index: 3;
        color: black;
      }
    }
  }
  &:hover {
    ${StyledImgContainer} {
      img {
        opacity: 20%;
      }
    }
  }
  input {
    width: 8em;
    margin-bottom: 0.5em;
    text-align: center;
  }
  button {
    background-color: gainsboro;
    border: 1px solid gray;
    color: black;
    font-size: 1em;
    font-weight: bold;
    height: 4em;
    width: 10em;
    cursor: pointer;
    margin-bottom: 1.5em;
  }
  button:hover {
    background-color: grey;
    color: white;
  }
  @media (${DEVICES["2XL"]}) {
    h3 {
      font-size: 1.1rem;
    }
    input {
      width: 6em;
    }
    button {
      width: 8em;
    }
  }
  @media (${DEVICES.XL}) {
    h3 {
      font-size: 1rem;
    }
    input {
      width: 4.5em;
    }
    button {
      font-weight: normal;
      height: 3em;
      width: 6em;
    }
  }
`;

const StyledPriceWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  @media (${DEVICES["2XL"]}) {
    width: 66%;
  }
  @media (${DEVICES.XL}) {
    width: 40%;
  }
`;

const StyledPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 2em;
`;
const StyledPriceText = styled.p`
  font-size: 1.5em;
  @media (${DEVICES["2XL"]}) {
    font-size: 1.1em;
  }
  @media (${DEVICES.XL}) {
    font-size: 0.7em;
  }
`;
const StyledPrice = styled.p`
  font-size: 1.5em;
  &:after {
    content: " €";
  }
  @media (${DEVICES["2XL"]}) {
    font-size: 1.1em;
  }
  @media (${DEVICES.XL}) {
    font-size: 0.7em;
  }
`;

const StyledPriceDPH = styled.p`
  font-size: 2em;
  color: red;
  font-weight: bold;
  &:after {
    content: " €";
  }
  @media (${DEVICES["2XL"]}) {
    font-size: 1.6em;
  }
  @media (${DEVICES.XL}) {
    font-size: 1.4em;
  }
`;

interface IProduct {
  productTitle: string;
  description: string;
  imgSrc: string;
  price: number;
}

const Product: React.FC<IProduct> = ({
  productTitle,
  description,
  imgSrc,
  price,
}): JSX.Element => {
  return (
    <StyledContainer>
      <StyledImgContainer>
        <p>{description}</p>
        <img src={imgSrc} alt={productTitle + " obrazok"} />
      </StyledImgContainer>
      <h3>{productTitle}</h3>
      <input type="number" />
      <button>Do Kosika</button>
      <StyledPriceWrapper>
        <StyledPriceContainer>
          <StyledPriceText>s DPH</StyledPriceText>
          <StyledPriceDPH>{Math.round(price * 1.2 * 100) / 100}</StyledPriceDPH>
        </StyledPriceContainer>
        <StyledPriceContainer>
          <StyledPriceText>bez DPH</StyledPriceText>
          <StyledPrice>{price}</StyledPrice>
        </StyledPriceContainer>
      </StyledPriceWrapper>
    </StyledContainer>
  );
};

export default Product;
