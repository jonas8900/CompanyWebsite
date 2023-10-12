import styled from "styled-components";
import AboutUs from "../components/AboutUs";
import Career from "../components/Career";
import Introtext from "../components/IntroText";
import Navigation from "../components/Navigation";
import Products from "../components/Products";
import Randompicture from "../components/Randompicturewithinfo";
import ScrollToTop from "../components/ScrollToTop";
import SpeechBubbleHelp from "../components/SpeechBubbleHelp";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home({scrollY}) {

  return (
    <>
      <Navigation />
      <ScrollToTop scrollY={scrollY}/>
      <SpeechBubbleHelp scrollY={scrollY} />
      <Randompicture />
      <Introtext/>
      <Products/>
      <AboutUs/>
      <Career/>
      <Contact/>
      <Footer/>
    </>
  );
}


