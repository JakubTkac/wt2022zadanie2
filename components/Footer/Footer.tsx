import { StyledFooter } from "../Styled/StyledFooter";
import { StyledFlexColumn } from "../Styled/StyledFlexColumn";
import useBetterMediaQuery from "../../config/useBetterMediaQuery";
import { SCREENS } from "../../Theme";
import Information from "./Information";
import InformationDropdown from "./InformationDropdown";
import { StyledFlex } from "../Styled/StyledFlex";

const Footer = () => {
  const isLargerThenScreen = useBetterMediaQuery(`(min-width: ${SCREENS.LG})`);
  return (
    <StyledFlex>
      <StyledFooter>
        <StyledFlexColumn>
          <img src={"/BT_icon.png"} alt="BT HEADER LOGO"></img>
        </StyledFlexColumn>
        {isLargerThenScreen ? <Information /> : <InformationDropdown />}
      </StyledFooter>
    </StyledFlex>
  );
};

export default Footer;
