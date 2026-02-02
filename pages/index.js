import Career from "../components/Career/Career";
import Introtext from "../components/Homescreen/IntroText";
import Navigation from "../components/Navigation/Navigation";
import Products from "../components/Products/Products";
import ModernRandomPicture from "../components/Homescreen/ModernRandomPicture";
import ScrollToTop from "../components/Sidebar/ScrollToTop";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/Sidebar/SideBar";
import styled, { keyframes } from "styled-components";
import PopupForJob from "../components/Popup/PopupForJob";
import useLocalStorageState from "use-local-storage-state";
import Head from "next/head";
import Certificates from "../components/Certificates/Certificates";

export default function Home({ scrollY, device, setDevice }) {
	const [popUp, setPopUp] = useLocalStorageState("popUp", {
		defaultValue: true,
	});
	const [animationTrigger, setAnimationTrigger] = useLocalStorageState(
		"animationTrigger",
		{ defaultValue: false }
	);

	function handlePopUp() {
		setAnimationTrigger(true);
		setTimeout(() => {
			setPopUp(false);
			setAnimationTrigger(false);
		}, 350);
	}

	return (
		<>
			<Head>
				<meta
					name="description"
					content="Wir sind der richtige Ansprechpartner, wenn es um Krananlagen geht! Unser erfahrenes Team bietet umfassende Leistungen wie Wartung, Reparatur und die Erfüllung der UVV-Vorschriften für Ihre Krananlagen. Verlassen Sie sich auf unsere Expertise."
				/>
				<link
					rel="canonical"
					href="https://www.elektromaschinenbau-schulze.de/"
				/>
			</Head>
			<StyledMain>
				<Navigation scrollY={scrollY} device={device} setDevice={setDevice} />
				<ModernRandomPicture />
				<ScrollToTop scrollY={scrollY} />
				<SideBar />
				{popUp && (
					<PopupForJob
						animationTrigger={animationTrigger}
						onClick={handlePopUp}
					/>
				)}
				<StyledSectionForWidth>
					<TestingHeadling>TESTING-PREVIEW-BRANCH</TestingHeadling>
					<Introtext />
					<Products device={device} setDevice={setDevice} />
					<Certificates device={device} />
				</StyledSectionForWidth>
				<Career device={device} scrollY={scrollY} />
				<Contact />
				<Footer />
			</StyledMain>
		</>
	);
}

const FadeIn = keyframes`
0% {opacity: 0;}
20% {opacity: 0;}
100% {opacity: 1;}

`;

const StyledSectionForWidth = styled.section`
	@media (min-width: 1920px) {
		width: 80%;
		margin: 0 auto;
	}
`;

const TestingHeadling = styled.h1`
	color: red;
	position: fixed;
	font-size: 0.6rem;
	top: 10%;
	left: 1rem;
	z-index: 100000;
	background-color: white;
	font-size: 0.9rem;

	@media (min-width: 768px) {
		font-size: 1rem;
		padding: 1rem;
	}
`;

const StyledMain = styled.main`
	animation: ${FadeIn} 0.8s linear;
`;
