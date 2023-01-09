import styled from "styled-components";
import { DEVICES } from "../../Theme";

export const StyledMainContainer = styled.main`
  margin: 5vh 7.5rem;
  padding: 1em 2em;
  @media (${DEVICES["2XL"]}) {
    margin: 5vh 6rem;
    padding: 1em 2em;
  }
  @media (${DEVICES.XL}) {
    margin: 1em 4em;
    padding: 1em 2em;
  }
  @media (${DEVICES.LG}) {
    margin: 0 0;
    padding: 1em 1em;
  }
`;
