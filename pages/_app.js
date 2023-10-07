import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [scrollY, setScrollY] = useState(0);


useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  handleScroll();
      window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

 }, []);


  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Elektromaschinenbau Schulze</title>
        <meta name="description" content="Wir sind der richtige Ansprechpartner, wenn es um Krananlagen geht! Unser erfahrenes Team bietet umfassende Leistungen wie Wartung, Reparatur und die Erfüllung der UVV-Vorschriften für Ihre Krananlagen. Verlassen Sie sich auf unsere Expertise."/>
        
      </Head>
      <Component {...pageProps} scrollY={scrollY}/>
    </>
  );
}
