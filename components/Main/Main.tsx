import MainNavbar from "../MainNavbar/MainNavbar";
import { StyledMainWrapper } from "../Styled/StyledMainWrapper";
import Sidebar from "../Sidebar/Sidebar";
import StyledContentWrapper from "../Styled/StyledContentWrapper";
import ImgSlider from "../ImgSlider/ImgSlider";
import { StyledWrapper } from "../Styled/StyledWrapper";
import { StyledGridWrapper } from "../Styled/StyledGridWrapper";
import { productItems } from "../Product/productItems";
import Product from "../Product/Product";
import { StyledMainContainer } from "../Styled/StyledMainContainer";

const Main = () => {
  return (
    <StyledMainContainer>
      <MainNavbar />
      <StyledMainWrapper>
        <Sidebar />
        <StyledContentWrapper>
          <ImgSlider />
          <StyledWrapper>
            <h2>Baran & Tkáč - Ponuka</h2>
            <StyledGridWrapper>
              {productItems.map((item) => {
                return (
                  <Product
                    key={item.id}
                    productTitle={item.title}
                    description={item.description}
                    imgSrc={item.img}
                    price={item.price}
                  />
                );
              })}
            </StyledGridWrapper>
          </StyledWrapper>
        </StyledContentWrapper>
      </StyledMainWrapper>
    </StyledMainContainer>
  );
};

export default Main;
