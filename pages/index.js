import Career from "../components/Career/Career";
import Introtext from "../components/Homescreen/IntroText";
import Navigation from "../components/Navigation/Navigation";
import Products from "../components/Products/Products";
import Randompicture from "../components/Homescreen/Randompicturewithinfo";
import ScrollToTop from "../components/Sidebar/ScrollToTop";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/Sidebar/SideBar";
import styled, { keyframes } from "styled-components";
import PopupForJob from "../components/Popup/PopupForJob";
import useLocalStorageState from "use-local-storage-state";
import Head from "next/head";

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
				<title>Elektromaschinenbau Schulze</title>
				<meta
					name="description"
					content="Wir sind der richtige Ansprechpartner, wenn es um Krananlagen geht! Unser erfahrenes Team bietet umfassende Leistungen wie Wartung, Reparatur und die Erfüllung der UVV-Vorschriften für Ihre Krananlagen. Verlassen Sie sich auf unsere Expertise."
				/>
				<link rel="canonical" href="https://elektromaschinenbau.vercel.app/" />
			</Head>
			<StyledMain>
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

const StyledMain = styled.main`
	animation: ${FadeIn} 0.8s linear;
`;
