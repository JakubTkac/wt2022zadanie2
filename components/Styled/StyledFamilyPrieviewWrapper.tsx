import styled from "styled-components";
import { DEVICES } from "../../Theme";

const StyledFamilyPrieviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 14rem;
  align-items: center;
  ul {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  li {
    font-size: 2rem;
  }
  button {
    background-color: gainsboro;
    border: 1px solid gray;
    color: black;
    font-size: 1rem;
    font-weight: bold;
    height: 10em;
    width: 10em;
    cursor: pointer;
    margin-bottom: 1.5em;
  }
  @media (${DEVICES["2XL"]}) {
    padding: 0 8rem;
  }
  @media (${DEVICES.XL}) {
    padding: 0 4rem;
    button {
      height: 7em;
      width: 7em;
    }
    li {
      font-size: 1.5rem;
    }
  }
  @media (${DEVICES.LG}) {
    padding: 0 1rem;
    button {
      height: 5em;
      width: 5em;
    }
    li {
      font-size: 1.5rem;
    }
  }
`;

export default StyledFamilyPrieviewWrapper;
