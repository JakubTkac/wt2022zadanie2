import styled from "styled-components";
import { useState } from "react";
// @ts-ignore
import Link from "next/link";
import Information from "./Information";

const StyledMobileButton = styled.button`
  background-color: gainsboro;
  border: 1px solid gray;
  color: black;
  font-size: 1em;
  font-weight: bold;
  height: 2em;
  width: 4em;
  cursor: pointer;
  position: absolute;
  right: 2em;
  z-index: 10;
  button:hover {
    background-color: grey;
    color: white;
  }
`;

const MobileButton = () => {
  const [displaySection, setDisplaySection] = useState(false);
  return (
    <>
      <StyledMobileButton onClick={() => setDisplaySection(!displaySection)}>
        Menu
      </StyledMobileButton>
      {displaySection && <Information />}
    </>
  );
};

const InformationDropdown = () => {
  return <MobileButton />;
};

export default InformationDropdown;
