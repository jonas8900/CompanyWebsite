import AboutUs from "../components/AboutUs/AboutUs";
import Career from "../components/Career/Career";
import Introtext from "../components/Homescreen/IntroText";
import Navigation from "../components/Navigation/Navigation";
import Products from "../components/Products/Products";
import Randompicture from "../components/Career/Randompicturewithinfo";
import ScrollToTop from "../components/Sidebar/ScrollToTop";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/Sidebar/SideBar";

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
