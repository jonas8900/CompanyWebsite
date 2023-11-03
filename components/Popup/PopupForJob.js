import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import { Link } from "react-scroll";
import PhoneIcon from "../Icons/PhoneIcon";
import MailIcon from "../Icons/MailIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PopupForJob({ animationTrigger, onClick }) {
	return (
		<StyledSection $animationtrigger={animationTrigger}>
			<StyledInformationArticle>
				<h2>Wir suchen Verstärkung!</h2>
				<p>
					Du bist Elektriker, Mechatroniker oder hast eine vergleichbare
					Qualifikation? Dann bist du bei uns genau richtig!
				</p>
				<StyledParagraph>
					Bei Interesse melden Sie sich bitte telefonisch oder per E-Mail:
					<StyledAnchorTag href="tel:0351471440">
						Telefon: 0351/ 471 44 0
					</StyledAnchorTag>
					,
					<StyledAnchorTag href="mailto:Info@emb-schulze.de">
						E-Mail: Info@emb-schulze.de
					</StyledAnchorTag>
				</StyledParagraph>
			</StyledInformationArticle>
			<StyledButtonWrapper>
				<Link
					href="#"
					to="career"
					smooth={true}
					duration={350}
					offset={-70}
					spy={true}
				>
					<Greenbutton onClick={onClick}>Zu den Jobs</Greenbutton>
				</Link>
				<Greenbutton onClick={onClick}>Schließen</Greenbutton>
			</StyledButtonWrapper>
		</StyledSection>
	);
}

const FadeIn = keyframes`
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
`;

const FadeOut = keyframes`
  0% {
  opacity: 1;
  }
  100% {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  }
`;

const StyledSection = styled.section`
	z-index: 99999;
	position: fixed;
	bottom: 0;
	background-color: white;
	box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
	border: 1px solid black;
	width: 100%;
	display: flex;
	animation: ${({ $animationtrigger }) =>
			$animationtrigger ? FadeOut : FadeIn}
		0.4s ease;
`;

const StyledAnchorTag = styled.a`
	color: black;
	margin-left: 0.5rem;
`;

const StyledInformationArticle = styled.article`
	width: 70%;
	padding-left: 1rem;
`;

const StyledParagraph = styled.p`
	font-size: 10px;
	margin-top: 0rem;
`;

const StyledButtonWrapper = styled.section`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.4rem;
	@media (min-width: 1025px) {
		flex-direction: row;
		gap: 8rem;
	}
`;
