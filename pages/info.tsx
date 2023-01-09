// @ts-ignore
import Head from "next/head";
// @ts-ignore
import Link from "next/link";
import StyledBackendInsertFlex from "../components/Styled/StyledBackendInsertFlex";
import styled from "styled-components";

const StyledInformation = styled.div`
  h1 {
    margin: 0;
    margin-bottom: 4rem;
    margin-top: 2rem;
    font-size: 5rem;
  }
  h2 {
    margin: 0;
    margin-bottom: 2rem;
    margin-top: 6rem;
    font-size: 4rem;
  }
  h3 {
    margin: 0;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    font-size: 3rem;
  }
  h4 {
    margin: 0;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 2rem;
  }
  p {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  li {
    font-weight: bold;
    font-size: 1.75rem;
    margin-bottom: 0.25rem;
  }
`;

export default function Information() {
  return (
    <>
      <Head>
        <title>Zadanie2 Backend</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledBackendInsertFlex>
        <StyledInformation>
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
              <p>
                Tanstack knižnica na manažovanie asynchronych states a query
              </p>
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
          <h2>Zadanie</h2>
          <ul>
            <h3>1. Uloha</h3>
            <ul>
              <p>
                Frontend sa nachadza na landing page "/index". Jednotlive
                komponenty sa nachadzaju v "/component" directory. Vsetky data
                pochadzaju z "[name]Items.ts suborov ktore obsahuju objekt dat
                ktore su nasledne mapovane do jednotlivych komponentov ako prop
                (Product.tsx, MainNavbar.tsx, Sidebar.tsx...). Styled componenty
                ktore boli vytvorene pomocou Styled Components npm packagu ktore
                su reused alebo obsahuju prilis vela css sa nachadzaju v
                "/components/styled" directory
              </p>
            </ul>
            <h3>2. Uloha</h3>
            <ul>
              <p>
                Backend cast zadania sa nachadza na "/backend" route v aplikacii
                kde sa nachadzaju 2 buttony kazdy vedie na iny route INSERT je
                zadanie 2a, VYPIS_UDAJOV je zadanie 2b
              </p>
              <p>
                Databaza sa nachadza na supabase serveroch a sklada sa z 2
                tables
              </p>
              <img src="/Tables.png" alt="Tables" />
              <p>
                1. Table Kinship. Obsahuje len ID a Type ktory je zaroven
                primary key s ktorym sa linkuje druhy table Family Group
              </p>
              <img src="/Kinship.png" alt="Kinship" />
              <p>
                Family group sa sklada z id, first_name, last_name, middle_name,
                age, kinship
              </p>
              <img src="/FamilyGroup.png" alt="Familu group" />
              <h4>Uloha 2a.</h4>
              <ul>
                <p>
                  Zadanie sa nachadza na route "/backend/insert". Stranka
                  obsahuje form do ktoreho sa da vlozit meno priezvisko ved a
                  pribuzenstvo. Pri zmene sa vykonava handleChange handler ktory
                  do useReducer hooku uklada data pri on click na button
                  "pridat" sa spusti addhandleitem ktory data z reducer hooku
                  posle na supabase databazu kde su nasledne ulozene. Nizsie sa
                  nachadza aj preview dat ktore su fetchovane na kazdy refresh a
                  pri kazdej zmene pomocou react query. defaultne su sortnute
                  podla ID. Pri kazdom iteme sa nachadza aj Delete button ktory
                  spusta handledatadelete handler ktory posle request na
                  supabase databazu spolu s ID itemu ktory sa ma vymazat
                </p>
              </ul>
              <h4>Uloha 2b.</h4>
              <ul>
                <p>
                  Zadanie sa nachadza na route "/backend/vypis_udajov". Na
                  stranke sa nachadza select pomocou ktoreho sa daju data
                  sortnut podla meno priezviska alebo veku. Pri loade sa data
                  defaultne sortnu podla ID
                </p>
              </ul>
              <h4>Uloha 2c.</h4>
              <ul>
                <p>
                  Informacie o zadani sa nachadzaju v README.md alebo na route
                  "/info"
                </p>
              </ul>
              <h4>Uloha 2d.</h4>
              <ul>
                <p>
                  Databaza je deploynuta na Supabase Serveri. Aplikacia je
                  deploynuta na vercel serveri: "
                  <a href="https://jakub-tkac-wt2022-zadanie2.vercel.app/">
                    https://jakub-tkac-wt2022-zadanie2.vercel.app/
                  </a>{" "}
                  "
                </p>
              </ul>
            </ul>
            <h3>Uloha 3</h3>
            <ul>
              <p>
                <a href="https://git.kemt.fei.tuke.sk/jt720ja/wt2022">
                  https://git.kemt.fei.tuke.sk/jt720ja/wt2022
                </a>
              </p>
            </ul>
          </ul>
        </StyledInformation>
      </StyledBackendInsertFlex>
    </>
  );
}
