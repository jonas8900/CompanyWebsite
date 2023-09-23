import Introtext from "../components/IntroText";
import Navigation from "../components/Navigation";
import Products from "../components/Products";
import Randompicture from "../components/Randompicturewithinfo";
import SpeechBubbleHelp from "../components/SpeechBubbleHelp";

export default function Home() {
  return (
    <>
      <Navigation />
      <SpeechBubbleHelp />
      <Randompicture />
      <Introtext />
      <Products />
    </>
  );
}
