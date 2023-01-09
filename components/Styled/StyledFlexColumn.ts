import styled from "styled-components";
import { DEVICES } from "../../Theme";

export const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;
  box-sizing: border-box;
  img {
    width: 100px;
    border-radius: 20em;
  }
  @media (${DEVICES["2XL"]}) {
    img {
      width: 80px;
      border-radius: 17em;
    }
  }
  @media (${DEVICES.XL}) {
    img {
      width: 60px;
      border-radius: 20em;
    }
  }
  @media (${DEVICES.LG}) {
    img {
      width: 30px;
      border-radius: 20em;
    }
  }
`;
