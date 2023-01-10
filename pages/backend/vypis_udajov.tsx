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

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

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
  const [nameFilterData, setNameFilterData] = useState("");
  const [surnameFilterData, setSurnameFilterData] = useState("");
  const [ageFilterData, setAgeFilterData] = useState("");

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

  let result = data
    .filter((data) => {
      return data.first_name.search(nameFilterData) != -1;
    })
    .filter((data) => {
      return data.last_name.search(surnameFilterData) != -1;
    });
  // @ts-ignore
  if (ageFilterData < 0 || ageFilterData === "") {
  } else {
    result = result.filter((data) => {
      return data.age === Number(ageFilterData);
    });
  }

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
          onChange={(e) => setSortType(e.target.value)}>
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
        <h2>Filter Data</h2>
        <StyledSearch>
          <div>
            <label>Meno:</label>
            <input
              type="text"
              name="first_name"
              onChange={(event) => {
                setNameFilterData(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Priezvisko:</label>
            <input
              type="text"
              name="last_name"
              onChange={(event) => {
                setSurnameFilterData(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Vek:</label>
            <input
              type="number"
              name="age"
              value={ageFilterData}
              onChange={(event) => {
                // @ts-ignore
                setAgeFilterData(event.target.value);
              }}
            />
          </div>
        </StyledSearch>
        {result.map((member) => {
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
      </StyledBackendInsertFlex>
    </>
  );
}
