import styled from "styled-components";
import { DEVICES } from "../../Theme";

const ContentWrapper = styled.div`
  margin-top: 4rem;
  margin-left: 4rem;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  @media (${DEVICES["2XL"]}) {
    margin-top: 2rem;
  }
  @media (${DEVICES.XL}) {
    margin-top: 4rem;
    margin-left: 2rem;
  }
  @media (${DEVICES.XL}) {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

interface IStyledContentWrapper {
  children: JSX.Element[];
}

const StyledContentWrapper: React.FC<IStyledContentWrapper> = ({
  children,
}): JSX.Element => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export default StyledContentWrapper;
