import { StyledFlex } from "../Styled/StyledFlex";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import styled from "styled-components";
import { DEVICES, SCREENS } from "../../Theme";
// @ts-ignore
import { useMediaQuery } from "usehooks-ts";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import useBetterMediaQuery from "../../config/useBetterMediaQuery";

const StyledContainer = styled.div`
  padding: 0 5%;
  height: 65px;
  display: flex;
  flex: 1 3;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: darkgray;
  @media (${DEVICES.LG}) {
    height: 40px;
    position: relative;
  }
`;

const StyledNavbarLogo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  margin: 1em 1em;
  gap: 3rem;
  justify-content: flex-start;
  p {
    font-size: 2rem;
  }
  img {
    width: 60px;
    border-radius: 2em;
  }
  div {
    cursor: pointer;
  }
  @media (${DEVICES.XL}) {
    p {
      font-size: 1.5rem;
    }

    img {
      width: 50px;
    }
  }
  @media (${DEVICES.LG}) {
    p {
      font-size: 0.8rem;
    }
    img {
      width: 40px;
    }
  } ;
`;

const Header = () => {
  const isLargerThenScreen = useBetterMediaQuery(`(min-width: ${SCREENS.LG})`);
  return (
    <StyledFlex>
      <StyledContainer>
        <StyledNavbarLogo>
          <div>
            <Link href="../">
              <img src={"/BT_icon.png"} alt="BT HEADER LOGO" />
            </Link>
          </div>
          <p>Baran & Tkáč - Computer E-shop</p>
        </StyledNavbarLogo>
        {isLargerThenScreen ? <Navbar /> : <Dropdown />}
      </StyledContainer>
    </StyledFlex>
  );
};

export default Header;
