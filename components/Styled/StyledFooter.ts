import styled from "styled-components";
import { DEVICES } from "../../Theme";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 160px;
  width: 100%;
  padding: 0 2em;
  justify-content: space-evenly;
  background-color: darkgray;
  @media (${DEVICES["2XL"]}) {
    height: 130px;
  }
  @media (${DEVICES.XL}) {
    height: 100px;
    padding: 0 1em;
  }
  @media (${DEVICES.LG}) {
    padding: 0 5%;
    border-bottom: 1px solid gray;
    position: relative;
    height: 40px;
    flex: 1 3;
    justify-content: space-around;
    width: 100%;
  }
`;
