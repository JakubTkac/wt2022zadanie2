import styled from "styled-components";
import { DEVICES } from "../../Theme";

const StyledBackendInsertHeading = styled.h1`
  font-size: 4rem;
  @media (${DEVICES.XL}) {
    font-size: 2rem;
  }
  @media (${DEVICES.LG}) {
    font-size: 2rem;
  }
`;

export default StyledBackendInsertHeading;
