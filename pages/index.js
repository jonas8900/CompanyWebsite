import AboutUs from "../components/AboutUs";
import Career from "../components/Career";
import Introtext from "../components/IntroText";
import Navigation from "../components/Navigation";
import Products from "../components/Products";
import Randompicture from "../components/Randompicturewithinfo";
import ScrollToTop from "../components/ScrollToTop";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

export default function Home({ scrollY }) {
	return (
		<>
			<Navigation />
			<ScrollToTop scrollY={scrollY} />
			<SideBar />
			<Randompicture />
			<Introtext />
			<Products />
			<AboutUs />
			<Career />
			<Contact />
			<Footer />
		</>
	);
}
