// @ts-ignore
import Head from "next/head";
import Main from "../components/Main/Main";
// @ts-ignore
import { createClient } from "@supabase/supabase-js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zadanie2 Index Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BT_icon.ico" />
      </Head>
      <Main />
    </>
  );
}
