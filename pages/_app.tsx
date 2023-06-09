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

  body, html {
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
        <title>Quantum IO</title>
        <link rel="stylesheet" href="/font/font.css" />
        <link href="/favicon.png" rel="icon" />
        <meta name="theme-color" content="#55F7FF" />
        <meta
          property="og:image"
          content="https://qntmru.io/metadata_preview.png"
        />
        <meta
          name="twitter:image"
          content="https://qntmru.io/metadata_preview.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Quantum_NFT" />
        <meta
          property="og:title"
          content="Quantum IO | Automation Cloud Software"
        />
        <meta property="og:url" content="https://qntmru.io/" />
        <meta
          name="twitter:title"
          content="Quantum IO | Automation Cloud Software"
        />
        <meta
          name="twitter:description"
          content="Automation Hands-free Cloud Software with Drop & Restock Automation and Innovative solver system."
        />
        <meta
          name="description"
          content="Automation Hands-free Cloud Software with Drop & Restock Automation and Innovative solver system."
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
