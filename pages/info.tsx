// @ts-ignore
import Head from "next/head";
// @ts-ignore
import Link from "next/link";
import StyledBackendInsertFlex from "../components/Styled/StyledBackendInsertFlex";

export default function Information() {
  return (
    <>
      <Head>
        <title>Zadanie2 Backend</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledBackendInsertFlex>
        <h1>Info o zadani</h1>
        <h2>Stack</h2>
        <ul>
          <h3>Frontend</h3>
          <li>NextJS 12.2</li>
          <p>React Framework na manažovanie multipage aplikácií</p>
          <p>
            12.2 preto lebo stale využíva na kompilaciu Babel a s 12.3 vyššie
            ktoré využívajú swc sú problemy pri pracovani so Styled Components
          </p>
          <h4>Packages</h4>
          <ul>
            <li>Supabase js</li>
            <p>Knižnica na komunikáciu s Databazou</p>
            <li>Styled Components</li>
            <p>
              Knižnica na pisanie css priamo v javascripte (react component)
            </p>
            <li>React Query</li>
            <p>Tanstack knižnica na manažovanie asynchronych states a query</p>
          </ul>
          <h3>Backend Database (BaaS)</h3>
          <li>Supabase</li>
          <p>Firebase alternatíva basenuta na PostgreSQL</p>
          <br />
          <h3>Potrebný software na inštaláciu</h3>
          <li>NodeJS</li>
        </ul>
        <h2>Inštalacia</h2>
        <p>
          Databaza je deploynuta online na Supabase serveri takže ju netreba
          nijak inštalovať v .env.local je uložený API key a URL s tým taktiež
          ne treba nič robiť, autentifikácia taktiež nie je žiadna
        </p>
        <p>
          Všetko čo teda treba urobiť je naklonovať si repo z gitu a
          nainštalovať nextjs aplikaciu
        </p>
        <ol>
          <li>git clone git@git.kemt.fei.tuke.sk:jt720ja/wt2022.git</li>
          <li>cd wt2022</li>
          <li>cd zadanie2</li>
          <li>npm i</li>
          <li>npm run start</li>
        </ol>
      </StyledBackendInsertFlex>
    </>
  );
}
