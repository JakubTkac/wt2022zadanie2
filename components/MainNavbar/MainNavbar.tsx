import styled from "styled-components";
import { mainNavbarItems } from "./mainNavbarItems";
import { DEVICES } from "../../Theme";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5rem;
  align-items: center;
  padding: 0 2em;
  height: 70px;
  background-color: gainsboro;
  border: 1px solid gray;
  p {
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    font-size: 2.2rem;
    cursor: pointer;
    text-align: center;
    align-items: center;
  }
  p:hover {
    background-color: gray;
  }
  @media (${DEVICES["2XL"]}) {
    gap: 3rem;
    height: 50px;
    p {
      font-size: 1.7rem;
    }
  }
  @media (${DEVICES.XL}) {
    gap: 2rem;
    height: 40px;
    p {
      padding: 0 0.4rem;
      font-size: 1.5rem;
    }
  }
  @media (${DEVICES.LG}) {
    gap: 1em;
    height: auto;
    border-bottom: 0;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0;
    margin-bottom: 2rem;
    p {
      border: 0;
      border-bottom: 1px solid gray;
      margin: 0 0.2rem;
      padding: 0;
      font-size: 1.5rem;
      width: 100%;
      height: 100%;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }
`;

const MainNavbar = () => {
  return (
    <StyledNavbar>
      {mainNavbarItems.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </StyledNavbar>
  );
};

export default MainNavbar;
