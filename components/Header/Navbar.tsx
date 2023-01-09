import styled from "styled-components";
import { DEVICES } from "../../Theme";
// @ts-ignore
import Link from "next/link";

const StyledNavbar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  margin: 1em 1em;
  justify-content: space-around;
  gap: 0.5rem;
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
  }
  @media (${DEVICES.XL}) {
    a {
      font-size: 1.1rem;
    }
  }
  @media (${DEVICES.LG}) {
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    height: 10vh;
    gap: 0;
    a {
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
    a:hover {
      background-color: grey;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link href="../" passHref legacyBehavior>
        <a>Home/Frontend</a>
      </Link>
      <Link href="/backend" passHref legacyBehavior>
        <a>Backend</a>
      </Link>
      <Link href="/info" passHref legacyBehavior>
        <a>Information</a>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
