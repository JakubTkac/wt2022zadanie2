import styled from "styled-components";
import { DEVICES } from "../../Theme";

const StyledFamilyPrieviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0;
  width: 100%;
  margin-bottom: 3em;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }
  ul {
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  ol {
    margin: 0;
    width: 40%;
  }
  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
  }
  input {
    width: 40%;
    font-size: 1.5rem;
  }
  select {
    width: 40%;
    font-size: 2rem;
  }
  button {
    background-color: gainsboro;
    border: 1px solid gray;
    color: black;
    font-size: 1rem;
    font-weight: bold;
    height: 7em;
    width: 7em;
    cursor: pointer;
  }
  @media (${DEVICES["2XL"]}) {
  }
  @media (${DEVICES.XL}) {
    button {
      height: 7em;
      width: 7em;
    }
    li {
      font-size: 1.5rem;
    }
    input {
      width: 65%;
      font-size: 1rem;
    }
    select {
      width: 65%;
      font-size: 1.5rem;
    }
  }
  @media (${DEVICES.LG}) {
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
