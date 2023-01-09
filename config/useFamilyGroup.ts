// @ts-ignore
import { useQuery } from "react-query";
import { supabase } from "./supabase";

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
