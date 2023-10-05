import AboutUs from "../components/AboutUs";
import Introtext from "../components/IntroText";
import Navigation from "../components/Navigation";
import Products from "../components/Products";
import Randompicture from "../components/Randompicturewithinfo";
import SpeechBubbleHelp from "../components/SpeechBubbleHelp";

export default function Home() {
  const sectionIds = {
    start: "start",
    products: "products",
    aboutUs: "about-us",
  };

  return (
    <>
      <Navigation sectionIds={sectionIds}/>
      <SpeechBubbleHelp />
      <Randompicture />
      <Introtext/>
      <Products/>
      <AboutUs/>
    </>
  );
}
