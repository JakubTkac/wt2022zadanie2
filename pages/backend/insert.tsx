// @ts-ignore
import Head from "next/head";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import { supabase } from "../../config/supabase";
import styled from "styled-components";
import { useReducer, useState } from "react";
// @ts-ignore
import { QueryClient, useMutation, useQuery } from "react-query";
import StyledBackendInsertFlex from "../../components/Styled/StyledBackendInsertFlex";
import StyledFamilyPrieviewWrapper from "../../components/Styled/StyledFamilyPrieviewWrapper";
import StyledBackendInsertHeading from "../../components/Styled/StyledBackendInsertHeading";
import { DEVICES } from "../../Theme";
const StyledPreview = styled.div``;
const StyledEditDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  button {
    height: 4em;
    width: 4em;
    font-size: 2rem;
  }
  @media (${DEVICES.XL}) {
    button {
      font-size: 1.5rem;
      height: 3.5rem;
      width: 3.5rem;
    }
  }
`;
const StyledEditForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  span {
    font-size: 1.5rem;
  }
  input {
    font-size: 1.25rem;
  }
  select {
    width: 100%;
  }
  @media (${DEVICES.XL}) {
    span {
      font-size: 1rem;
    }
    input {
      font-size: 0.75rem;
    }
    select {
      font-size: 1rem;
      width: 100%;
    }
    @media (${DEVICES.LG}) {
      span {
        font-size: 0.75rem;
      }
      input {
        font-size: 0.5rem;
      }
      select {
        font-size: 0.75rem;
        width: 100%;
      }
  }
`;

type TReducerState = {
  firstName: string;
  lastName: string;
  age: number;
  kinship: string;
};
type TEditReducerState = {
  reducer: TReducerState;
  id: number;
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
  const [displayEditSection, setDisplayEditSection] = useState(false);

  const [formData, setFormData] = useReducer(formReducer, {
    firstName: "",
    lastName: "",
    age: 0,
    kinship: "undefined",
  });
  const [formEditData, setFormEditData] = useReducer(formReducer, {
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
  const handleEditChange = (event) => {
    setFormEditData({
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
        return error;
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

  const editTodoMutation = useMutation({
    mutationFn: async (formEditData: TEditReducerState) => {
      console.log(formEditData);
      const { data, error } = await supabase
        .from("family_group")
        .update({
          first_name: formEditData.reducer.firstName,
          last_name: formEditData.reducer.lastName,
          age: formEditData.reducer.age,
          kinship: formEditData.reducer.kinship,
        })
        .match({ id: formEditData.id });
      return data;
    },
    onSuccess: () => {
      alert("Family Member EDITED successfully");
      setFormData({
        reset: true,
      });
      return queryClient.invalidateQueries("family_group");
    },
    onError: () => {
      alert("error");
    },
  });

  const _handleEditItem = async (id) => {
    const newFormEditData = {
      reducer: formEditData,
      id: id,
    };
    editTodoMutation.mutate(newFormEditData);
    setFormEditData({
      reset: true,
    });
  };

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
              value={formData.kinship || "undefined"}>
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
          <StyledEditDiv>
            <StyledBackendInsertHeading>
              Preview of Family Members and Delete
            </StyledBackendInsertHeading>
            {displayEditSection ? (
              <StyledEditForm>
                <div>
                  <span>Meno: </span>
                  <input
                    placeholder="Edit Meno"
                    type="text"
                    name="firstName"
                    onChange={handleEditChange}
                    value={formEditData.firstName || ""}
                  />
                </div>
                <div>
                  <span>Priezvisko: </span>
                  <input
                    type="text"
                    placeholder="Edit Priezvisko"
                    name="lastName"
                    onChange={handleEditChange}
                    value={formEditData.lastName || ""}
                  />
                </div>
                <div>
                  <span>Vek: </span>
                  <input
                    type="number"
                    placeholder="Edit Vek"
                    name="age"
                    onChange={handleEditChange}
                    value={formEditData.age || ""}
                  />
                </div>
                <div>
                  <span>Pribuzenstvo: </span>
                  <select
                    name="kinship"
                    value={formEditData.kinship || "undefined"}
                    onChange={handleEditChange}>
                    <option value="mama">Mama</option>
                    <option value="otec">Otec</option>
                    <option value="brat">Brat</option>
                    <option value="sestra">Sestra</option>
                  </select>
                </div>
              </StyledEditForm>
            ) : (
              <></>
            )}
            <button
              onClick={() => {
                setDisplayEditSection(!displayEditSection);
              }}>
              Edit
            </button>
          </StyledEditDiv>
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
                  <div>
                    {displayEditSection ? (
                      <button
                        onClick={() => {
                          _handleEditItem(member.id);
                        }}>
                        Submit
                      </button>
                    ) : (
                      <></>
                    )}
                    <button
                      onClick={() => {
                        handleDataDelete(member.id);
                      }}>
                      Delete
                    </button>
                  </div>
                </StyledFamilyPrieviewWrapper>
              );
            })
          )}
        </StyledPreview>
      </StyledBackendInsertFlex>
    </>
  );
}
