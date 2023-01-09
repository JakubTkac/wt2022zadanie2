import styled from "styled-components";
import { DEVICES } from "../../Theme";

export const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 30%;
  justify-content: flex-start;
  padding-top: 1rem;
  box-sizing: border-box;
  h2 {
    width: 100%;
    margin: 0;
    padding-left: 2em;
    padding-bottom: 0.6em;
    text-align: start;
    box-sizing: border-box;
    font-size: 1.5rem;
  }
  span {
    width: 100%;
    text-align: start;
    padding-bottom: 0.4em;
    padding-left: 4em;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 1.25rem;
  }
  span:hover {
    text-decoration: underline;
  }
  @media (${DEVICES["2XL"]}) {
    h2 {
      font-size: 1.25rem;
    }
    span {
      font-size: 1rem;
    }
  }
  @media (${DEVICES.XL}) {
    h2 {
      font-size: 0.85rem;
    }
    span {
      font-size: 0.7rem;
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
    h2 {
      background-color: gray;
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
`;
