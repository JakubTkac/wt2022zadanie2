import { useEffect, useReducer, useState } from "react";
import { supabase } from "../../config/supabase";
import styled from "styled-components";
// @ts-ignore
import Head from "next/head";
// @ts-ignore
import { useQuery } from "react-query";
import StyledBackendInsertFlex from "../../components/Styled/StyledBackendInsertFlex";
import StyledFamilyPrieviewWrapper from "../../components/Styled/StyledFamilyPrieviewWrapper";
import StyledBackendInsertHeading from "../../components/Styled/StyledBackendInsertHeading";

const StyledPreview = styled.div``;

export async function getStaticProps() {
  const { data } = await supabase.from("family_group").select("*").order("id");
  return {
    props: {
      data: data,
    },
  };
}

export default function BackendFilter({ data }) {
  const [sortData, setSortData] = useState(data);
  const [sortType, setSortType] = useState("id");

  const sortArray = (type) => {
    const sorted = [...data].sort((a, b) => {
      if (type === "age" || type === "id") {
        return a[type] - b[type];
      } else {
        return a[type].localeCompare(b[type]);
      }
    });
    setSortData(sorted);
  };

  useEffect(() => {
    sortArray(sortType);
  }, [sortType]);

  return (
    <>
      <Head>
        <title>Backend Vypis Udajov</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BT_icon.ico" />
      </Head>
      <StyledBackendInsertFlex>
        <StyledBackendInsertHeading>
          Preview of Family Members
        </StyledBackendInsertHeading>
        <h2>Sort Selection</h2>
        <select
          name="sortSelector"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="first_name">Meno</option>
          <option value="last_name">Priezvisko</option>
          <option value="age">Vek</option>
        </select>
        <StyledPreview>
          {sortData.map((member) => {
            return (
              <StyledFamilyPrieviewWrapper key={member.id}>
                <ul>
                  <li>
                    Meno: <b>{member.first_name}</b>
                  </li>
                  <li>
                    Priezvisko: <b>{member.last_name}</b>
                  </li>
                  <li>
                    Vek: <b>{member.age}</b>
                  </li>
                  <li>
                    Pribuzenstvo: <b>{member.kinship}</b>
                  </li>
                </ul>
              </StyledFamilyPrieviewWrapper>
            );
          })}
        </StyledPreview>
      </StyledBackendInsertFlex>
    </>
  );
}
