import styled from "styled-components";
import { DEVICES } from "../../Theme";

const StyledSlider = styled.div`
  overflow: hidden;
  img {
    object-fit: contain;
    width: 100%;
    height: 400px;
  }
  @media (${DEVICES["2XL"]}) {
    img {
      height: 300px;
    }
  }
  @media (${DEVICES.XL}) {
    img {
      height: 200px;
    }
  }
  @media (${DEVICES.LG}) {
    img {
      height: 300px;
    }
  }
`;

const ImgSlider = () => {
  return (
    <StyledSlider>
      <img src="./black-friday.jpg" alt="black friday image"></img>
    </StyledSlider>
  );
};

export default ImgSlider;
