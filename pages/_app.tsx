import { createGlobalStyle } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #010403;
    color: white;
    font-family: "Clear", sans-serif;
    overflow-x: hidden;
  }
  
  * {
    scroll-behavior: smooth;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quantum</title>
        <link rel="stylesheet" href="/font/font.css" />
        {/*<link href="/favicon.png" rel="icon" />*/}
        {/*<meta name="theme-color" content="#F7C907" />*/}
        {/*<meta*/}
        {/*  property="og:image"*/}
        {/*  content="https://farmaland-landing.vercel.app/metadata_preview.png"*/}
        {/*/>*/}
        {/*<meta*/}
        {/*  name="twitter:image"*/}
        {/*  content="https://farmaland-landing.vercel.app/metadata_preview.png"*/}
        {/*/>*/}
        {/*<meta name="twitter:card" content="summary_large_image" />*/}
        {/*<meta name="twitter:site" content="@farmalandnft" />*/}
        {/*<meta property="og:title" content="Farmaland" />*/}
        {/*<meta*/}
        {/*  property="og:url"*/}
        {/*  content="https://farmaland-landing.vercel.app/"*/}
        {/*/>*/}
        {/*<meta name="twitter:title" content="Farmaland" />*/}
        {/*<meta*/}
        {/*  name="twitter:description"*/}
        {/*  content="A Play 2 Earn Farming Game On Mobile. Earn $MILK coins and build your Farm to conquer Farmaland. Trade your coins in the Marketplace for items and upgrades."*/}
        {/*/>*/}
        {/*<meta*/}
        {/*  name="description"*/}
        {/*  content="A Play 2 Earn Farming Game On Mobile. Earn $MILK coins and build your Farm to conquer Farmaland. Trade your coins in the Marketplace for items and upgrades."*/}
        {/*/>*/}
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
