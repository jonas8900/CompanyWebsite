import AboutUs from "../components/AboutUs";
import Introtext from "../components/IntroText";
import Navigation from "../components/Navigation";
import Products from "../components/Products";
import Randompicture from "../components/Randompicturewithinfo";
import ScrollToTop from "../components/ScrollToTop";
import SpeechBubbleHelp from "../components/SpeechBubbleHelp";

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
    </>
  );
}
