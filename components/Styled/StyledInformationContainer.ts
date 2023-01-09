import styled from "styled-components";
import { DEVICES } from "../../Theme";

export const StyledInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 30%;
  box-sizing: border-box;
  padding-left: 2em;
  align-items: flex-start;
  span {
    width: 100%;
    font-weight: bold;
    box-sizing: border-box;
  }
  @media (${DEVICES["2XL"]}) {
    span {
      font-size: 0.95em;
    }
  }
  @media (${DEVICES.XL}) {
    span {
      font-size: 0.6rem;
    }
  }
  @media (${DEVICES.LG}) {
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    height: 10vh;
    gap: 0;
    span {
      background-color: gainsboro;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      padding-left: 2em;
      text-align: start;
      font-size: 1.1rem;
      flex-grow: 1;
      text-decoration: none;
      color: black;
      border-bottom: 1px solid gray;
    }
    span:hover {
      background-color: grey;
    }
  }
`;
