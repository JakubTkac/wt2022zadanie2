// @ts-ignore
import Head from "next/head";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import { supabase } from "../../config/supabase";
import styled from "styled-components";
import { useReducer } from "react";
// @ts-ignore
import { QueryClient, useMutation, useQuery } from "react-query";
import StyledBackendInsertFlex from "../../components/Styled/StyledBackendInsertFlex";
import StyledFamilyPrieviewWrapper from "../../components/Styled/StyledFamilyPrieviewWrapper";
import StyledBackendInsertHeading from "../../components/Styled/StyledBackendInsertHeading";

const StyledPreview = styled.div``;

type TReducerState = {
  firstName: string;
  lastName: string;
  age: number;
  kinship: string;
};

const formReducer = (state: TReducerState, event) => {
  if (event.reset) {
    return {
      firstName: "",
      lastName: "",
      age: 0,
      kinship: "undefined",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

const deleteFamilyMember = async (id) => {
  console.log(id);
  try {
    const { data, error } = await supabase
      .from("family_group")
      .delete()
      .eq("id", id);
    if (error) throw error;
    alert("Deleted Successfully");
  } catch (error) {
    alert(error.message);
  }
};

export default function BackendInsert() {
  const queryClient = new QueryClient();

  const [formData, setFormData] = useReducer(formReducer, {
    firstName: "",
    lastName: "",
    age: 0,
    kinship: "undefined",
  });

  const { data, isLoading, isError, isSuccess } = useQuery(
    "family_group",
    async () => {
      const { data, error } = await supabase
        .from("family_group")
        .select("*")
        .order("id");
      if (error) {
        throw new Error(error.message);
      }
      return data;
    }
  );

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const { mutate: addTodoMutation } = useMutation(
    async (formData: TReducerState) => {
      const { data, error } = await supabase
        .from("family_group")
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            age: formData.age,
            kinship: formData.kinship,
          },
        ])
        .single();
      if (error) {
        alert(error);
      }
      return data;
    },
    {
      onSuccess: () => {
        alert("Family Member created successfully");
        setFormData({
          reset: true,
        });
        return queryClient.invalidateQueries("family_group");
      },
    }
  );

  const _handleAddItem = async (event) => {
    event.preventDefault();
    addTodoMutation(formData);
    setFormData({
      reset: true,
    });
  };

  const handleDataDelete = async (id) => {
    deleteFamilyMember(id);
  };

  return (
    <>
      <Head>
        <title>Backend Insert</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BT_icon.ico" />
      </Head>

      <StyledBackendInsertFlex>
        <StyledBackendInsertHeading>Backend Insert</StyledBackendInsertHeading>
        <form onSubmit={_handleAddItem}>
          <fieldset>
            <h3>Meno</h3>
            <input
              placeholder="Sem napiste Meno"
              type="text"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName || ""}
            />
          </fieldset>
          <fieldset>
            <h3>Priezvisko</h3>
            <input
              type="text"
              placeholder="Sem napiste Priezvisko"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName || ""}
            />
          </fieldset>
          <fieldset>
            <h3>Vek</h3>
            <input
              type="number"
              placeholder="Sem napiste Vek"
              name="age"
              onChange={handleChange}
              value={formData.age || ""}
            />
          </fieldset>
          <fieldset>
            <h3>Pribuzenstvo</h3>
            <select
              name="kinship"
              onChange={handleChange}
              value={formData.kinship || "undefined"}
            >
              <option value="mama">Mama</option>
              <option value="otec">Otec</option>
              <option value="brat">Brat</option>
              <option value="sestra">Sestra</option>
            </select>
          </fieldset>
          <fieldset>
            <button type="submit">Pridat</button>
          </fieldset>
        </form>
        <StyledPreview>
          <StyledBackendInsertHeading>
            Preview of Family Members and Delete
          </StyledBackendInsertHeading>
          {isLoading ? (
            <h1>Is loading...</h1>
          ) : (
            data!.map((member) => {
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
                  <button
                    onClick={() => {
                      handleDataDelete(member.id);
                    }}
                  >
                    Delete
                  </button>
                </StyledFamilyPrieviewWrapper>
              );
            })
          )}
        </StyledPreview>
      </StyledBackendInsertFlex>
    </>
  );
}
