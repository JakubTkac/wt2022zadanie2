import styled from "styled-components";
import { DEVICES } from "../../Theme";

export const StyledMainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (${DEVICES.LG}) {
    flex-direction: column;
  }
`;
