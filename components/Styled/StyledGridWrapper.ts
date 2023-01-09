import styled from "styled-components";
import { DEVICES } from "../../Theme";

export const StyledGridWrapper = styled.div`
  display: grid;
  margin-top: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  @media (${DEVICES["2XL"]}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (${DEVICES.XL}) {
    gap: 1.5em;
  }
  @media (${DEVICES.LG}) {
    grid-template-columns: 1fr;
  }
`;
