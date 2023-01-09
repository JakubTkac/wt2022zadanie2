import { StyledInformationContainer } from "../Styled/StyledInformationContainer";
import { StyledLinkContainer } from "../Styled/StyledLinkContainer";
import { StyledInformationWrapper } from "../Styled/StyledInformationWrapper";

const Information = () => {
  return (
    <StyledInformationWrapper>
      <StyledInformationContainer>
        <span>E-shop: +421 9 321 321 12</span>
        <span>Servis: +421 1 321 321 23</span>
        <span>E-mail: tkacbaran@gmail.com</span>
      </StyledInformationContainer>
      <StyledLinkContainer>
        <h2>O nas</h2>
        <span>Kontaktné údaje</span>
        <span>Náš tím</span>
        <span>Kariéra</span>
      </StyledLinkContainer>
      <StyledLinkContainer>
        <h2>Obchodné podmienky</h2>
        <span>Obchodné podmienky</span>
        <span>Reklamačné podmienky</span>
        <span>Cenník</span>
      </StyledLinkContainer>
      <StyledLinkContainer>
        <h2>Všetko o Nákupe</h2>
        <span>Doprava tovaru</span>
        <span>Poistenie tovaru</span>
      </StyledLinkContainer>
    </StyledInformationWrapper>
  );
};

export default Information;
