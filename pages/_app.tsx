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
        <meta name="theme-color" content="#F7C907" />
        <meta
          property="og:image"
          content="https://quantum-landing.vercel.app/metadata_preview.png"
        />
        <meta
          name="twitter:image"
          content="https://quantum-landing.vercel.app/metadata_preview.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Quantum_NFT" />
        <meta
          property="og:title"
          content="Quantum IO | NFT Automation Cloud Software"
        />
        <meta property="og:url" content="https://quantum-landing.vercel.app/" />
        <meta
          name="twitter:title"
          content="Quantum IO | NFT Automation Cloud Software"
        />
        <meta
          name="twitter:description"
          content="NFT Automation Hands-free Cloud Software with Drop & Restock Automation and Innovative solver system. Supporting NFT Platforms: VeVe | Solana | Ethereum"
        />
        <meta
          name="description"
          content="NFT Automation Hands-free Cloud Software with Drop & Restock Automation and Innovative solver system. Supporting NFT Platforms: VeVe | Solana | Ethereum"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
