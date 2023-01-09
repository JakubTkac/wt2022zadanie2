import styled from "styled-components";
import { sidebarItems } from "./sidebarItems";
import { DEVICES } from "../../Theme";
// @ts-ignore

const StyledSidebar = styled.div`
  background-color: gainsboro;
  height: 40rem;
  border: 1px solid gray;
  border-top: 0px;
  min-width: 250px;
  h3 {
    margin: 0;
    text-transform: uppercase;
    font-size: 2.15rem;
    background-color: gray;
    padding-left: 1.5rem;
    box-sizing: border-box;
  }
  p {
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    width: 100%;

    height: 3rem;
    padding-left: 1.5rem;
  }
  p:hover {
    text-decoration: underline;
  }
  @media (${DEVICES["2XL"]}) {
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
  @media (${DEVICES.XL}) {
    p {
      margin-top: 0.6rem;
      width: 100%;
      height: 2rem;
    }
  }
  @media (${DEVICES.LG}) {
    height: auto;
    min-width: auto;
    border-bottom: 0;
    margin-bottom: 2rem;
    h3 {
      display: flex;
      justify-content: center;
      border-bottom: 1px solid gray;
      font-size: 1.5rem;
      background-color: gray;
    }
    p {
      display: flex;
      justify-content: center;
      border-bottom: 1px solid gray;
      margin: 0;
      padding: 0.5rem 0;
      padding-left: 0;
    }
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h3>Kategorie</h3>
      {sidebarItems.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </StyledSidebar>
  );
};

export default Sidebar;
