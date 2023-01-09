// @ts-ignore
import Head from "next/head";
// @ts-ignore
import Link from "next/link";
import { supabase } from "../config/supabase";
import styled from "styled-components";
import { DEVICES } from "../Theme";

const StyledBackendFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
`;
const StyledBackendHeading = styled.h1`
  font-size: 4rem;
`;
const StyledBackendWrapper = styled.div`
  display: flex;
  min-height: 400px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  gap: 2em;
  h2 {
    width: 100%;
    font-size: 5rem;
    margin: 0;
    height: 6rem;
    background-color: gainsboro;
  }
  h2:hover {
    background-color: gray;
  }
  @media (${DEVICES.LG}) {
    h2 {
      height: 3rem;
      font-size: 2.5rem;
    }
  }
`;

export default function Backend() {
  return (
    <>
      <Head>
        <title>Zadanie2 Backend</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledBackendFlex>
        <StyledBackendHeading>Backend Menu</StyledBackendHeading>
        <StyledBackendWrapper>
          <Link href="/backend/insert">
            <h2>INSERT</h2>
          </Link>
          <Link href="/backend/vypis_udajov">
            <h2>VYPIS_UDAJOV</h2>
          </Link>
        </StyledBackendWrapper>
      </StyledBackendFlex>
    </>
  );
}
