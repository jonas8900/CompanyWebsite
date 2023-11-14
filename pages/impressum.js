import styled, { keyframes } from "styled-components";
import Footer from "../components/Footer/Footer";
import BackToHome from "../components/Homescreen/BackToHome";
import ImpressumText from "../components/ImpressumAndPrivacy/ImpressumText";
import Greenbutton from "../components/Buttons/GreenButton";
import Link from "next/link";

export default function Impressum() {
	return (
		<StyledMain>
			<BackToHome />
			<StyledSection>
				<ImpressumText />
			</StyledSection>{" "}
			<StyledButtonSection>
				<Link href="/">
					<Greenbutton>Zurück zur Hauptseite</Greenbutton>
				</Link>
			</StyledButtonSection>
			<StyledFooterSection>
				<Footer />
			</StyledFooterSection>
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

const StyledFooterSection = styled.section``;

const StyledButtonSection = styled.section`
	margin-left: 50%;
	margin-bottom: 2rem;
	transform: translateX(-50%, 50%);
`;

const StyledMain = styled.main`
	animation: ${FadeIn} 0.8s linear;
`;
