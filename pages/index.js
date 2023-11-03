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
import PopupForJob from "../components/Popup/PopupForJob";
import { useState } from "react";

export default function Home({ scrollY, device, setDevice }) {
	const [popUp, setPopUp] = useState(true);
	const [animationTrigger, setAnimationTrigger] = useState(false);

	function handlePopUp() {
		setAnimationTrigger(true);
		setTimeout(() => {
			setPopUp(false);
			setAnimationTrigger(false);
		}, 350);
	}

	return (
		<>
			<Navigation scrollY={scrollY} device={device} setDevice={setDevice} />
			<Randompicture />
			<ScrollToTop scrollY={scrollY} />
			<SideBar />
			{popUp && (
				<PopupForJob
					animationTrigger={animationTrigger}
					onClick={handlePopUp}
				/>
			)}
			<StyledSectionForWidth>
				<Introtext />
				<Products device={device} setDevice={setDevice} />
			</StyledSectionForWidth>
			<Career device={device} scrollY={scrollY} />
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
