# Info o zadani

## Inštalacia

Databaza je deploynuta online na Supabase serveri takže ju netreba
nijak inštalovať v .env.local je uložený API key a URL s tým taktiež
ne treba nič robiť, autentifikácia taktiež nie je žiadna

Všetko čo teda treba urobiť je naklonovať si repo z gitu a
nainštalovať nextjs aplikaciu

```bash
1 git clone git@git.kemt.fei.tuke.sk:jt720ja/wt2022.git
2 cd wt2022
3 cd zadanie2
4 npm i
5 npm run build
6 npm run start
```

Ak by boli nejaké problemy s inštaláciou aplikacia je taktiež aj deploynuta na verceli [https://jakub-tkac-wt2022-zadanie2.vercel.app/](https://jakub-tkac-wt2022-zadanie2.vercel.app/)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Stack

### Frontend

- NextJS 12.2

    React Framework na manažovanie multipage aplikácií 12.2 preto lebo stale využíva na kompilaciu Babel a s 
  
    12.3 vyššie ktoré využívajú swc sú problemy pri pracovani so Styled Components

#### Packages

- Supabase js
  
  Knižnica na komunikáciu s Databazou

- Styled Components

  Knižnica na pisanie css priamo v javascripte (react component)

- React Query

  Tanstack knižnica na manažovanie asynchronych states a query

### Backend Database (BaaS)

- Supabase

  Firebase alternatíva basenuta na PostgreSQL

### Potrebný software na inštaláciu

- NodeJS
