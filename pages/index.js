import AboutUs from "../components/AboutUs/AboutUs";
import Career from "../components/Career/Career";
import Introtext from "../components/Homescreen/IntroText";
import Navigation from "../components/Navigation/Navigation";
import Products from "../components/Products/Products";
import Randompicture from "../components/Homescreen/Randompicturewithinfo";
import ScrollToTop from "../components/Sidebar/ScrollToTop";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/Sidebar/SideBar";
import styled from "styled-components";

export default function Home({ scrollY, device, setDevice }) {
	return (
		<>
			<Navigation scrollY={scrollY} device={device} setDevice={setDevice} />
			<Randompicture />
			<ScrollToTop scrollY={scrollY} />
			<SideBar />
			<StyledSectionForWidth>
				<Introtext />
				<Products device={device} setDevice={setDevice} />
			</StyledSectionForWidth>
			<Career device={device} />
			<Contact />

			<Footer />
		</>
	);
}

const StyledSectionForWidth = styled.section`
	@media (min-width: 1920px) {
		width: 80%;
		margin: 0 auto;
	}
`;
