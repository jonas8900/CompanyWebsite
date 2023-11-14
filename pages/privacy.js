import styled, { keyframes } from "styled-components";
import Footer from "../components/Footer/Footer";
import BackToHome from "../components/Homescreen/BackToHome";
import PrivacyText from "../components/ImpressumAndPrivacy/PrivacyText";
import Greenbutton from "../components/Buttons/GreenButton";
import Link from "next/link";

export default function Privacy() {
	return (
		<StyledMain>
			<BackToHome />
			<StyledSection>
				<PrivacyText />
			</StyledSection>
			<StyledFooterSection>
				<Footer />
			</StyledFooterSection>
			<StyledButtonSection>
				<Link href="/">
					<Greenbutton>Zurück zur Hauptseite</Greenbutton>
				</Link>
			</StyledButtonSection>
		</StyledMain>
	);
}

const FadeIn = keyframes`
0% {opacity: 0;}
20% {opacity: 0;}
100% {opacity: 1;}

`;

const StyledSection = styled.section`
	margin: 2rem;
	border-left: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 5px 8px 12px -4px rgba(0, 0, 0, 0.2);
`;

const StyledFooterSection = styled.section`
	position: fixed;
	bottom: 0;
	width: 100%;
`;

const StyledButtonSection = styled.section`
	margin-left: 50%;
	margin-bottom: 6rem;
`;

const StyledMain = styled.main`
	animation: ${FadeIn} 0.8s linear;
`;
