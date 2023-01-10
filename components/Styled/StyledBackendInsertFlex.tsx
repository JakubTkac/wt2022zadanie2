import styled from "styled-components";
import { DEVICES } from "../../Theme";

const StyledBackendInsertFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  h2 {
    font-size: 4rem;
  }
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
  input {
    font-size: 1.5rem;
  }
  label {
    font-weight: bolder;
    font-size: 2rem;
  }
`;

export default StyledBackendInsertFlex;
