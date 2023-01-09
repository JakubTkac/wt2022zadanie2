import styled from "styled-components";
import { DEVICES } from "../../Theme";

export const StyledInformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  @media (${DEVICES.LG}) {
    position: absolute;
    top: 219px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 0;
  }
`;
