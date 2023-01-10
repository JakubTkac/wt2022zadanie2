import styled from "styled-components";
import { DEVICES } from "../../Theme";

const StyledBackendInsertFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  select {
    font-size: 1.5rem;
  }
  @media (${DEVICES["2XL"]}) {
    padding: 0 2.5rem;
  }
  @media (${DEVICES.XL}) {
    padding: 0 1.5rem;
  }
  @media (${DEVICES.LG}) {
    padding: 0 0.5rem;
  }
`;

export default StyledBackendInsertFlex;
