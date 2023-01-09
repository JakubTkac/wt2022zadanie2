import styled from "styled-components";
import { DEVICES } from "../../Theme";

export const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  h2 {
    font-weight: bold;
    font-size: 4rem;
  }
  @media (${DEVICES["2XL"]}) {
    h2 {
      font-size: 3rem;
    }
  }
  @media (${DEVICES.XL}) {
    margin-top: 2rem;
    h2 {
      font-size: 2.5rem;
    }
  }
  @media (${DEVICES.LG}) {
    h2 {
      text-align: center;
      font-size: 1.5rem;
    }
  }
`;
