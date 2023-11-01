import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import BackToHome from "../components/Homescreen/BackToHome";
import PrivacyText from "../components/ImpressumAndPrivacy/PrivacyText";
import Greenbutton from "../components/Buttons/GreenButton";
import Link from "next/link";

export default function Privacy() {
	return (
		<>
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
		</>
	);
}

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
