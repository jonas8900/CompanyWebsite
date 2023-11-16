import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import OutsideClickHandler from "react-outside-click-handler";

export default function ProductDetails({
	headline,
	infotext,
	onClick,
	value,
	animationTrigger,
	contactData,
}) {
	return (
		<>
			<StyledWindow $animationtrigger={animationTrigger}>
				<OutsideClickHandler
					onOutsideClick={() => {
						onClick();
					}}
				>
					<StyledInformationCard>
						<StyledThirdHeadline>{headline}</StyledThirdHeadline>
						<StyledIntroText>{infotext}</StyledIntroText>

						<StyledContactData>{contactData}</StyledContactData>
					</StyledInformationCard>
					<StyledImageWrapper>
						<Greenbutton onClick={onClick} $value={value}>
							Schließen
						</Greenbutton>
					</StyledImageWrapper>
				</OutsideClickHandler>
			</StyledWindow>
		</>
	);
}

const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}

`;

const FadeOut = keyframes`
0% { opacity: 1;}
100% { opacity: 0; }
`;

const StyledWindow = styled.section`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(20px);
	animation: ${({ $animationtrigger }) =>
			$animationtrigger ? FadeOut : FadeIn}
		0.4s ease;
`;

const StyledThirdHeadline = styled.h3`
	position: sticky;
	top: -1.2rem;
	padding: 0.4rem;
	margin-top: 0;
	background-color: var(--color-third);
	text-decoration: underline;
	text-decoration-color: var(--color-primary);
	color: var(--color-fourth);
	text-align: center;
`;

const StyledIntroText = styled.h4`
	font-size: var(--font-size-text);
	font-weight: 400;
	color: black;
`;

const StyledContactData = styled.article`
	margin-top: 2rem;
	margin-bottom: 2rem;
	border-top: 1px solid grey;
`;

const StyledInformationCard = styled.article`
	padding: 1rem;
	position: fixed;
	top: 40%;
	transform: translate(-0%, -40%);
	border-radius: 9px;
	background-color: var(--color-third);
	width: 90%;
	max-width: 1000px;
	left: 5%;
	right: 5%;
	margin: auto;
	z-index: 1;
	max-height: 80%;
	overflow-y: scroll;
`;

const StyledImageWrapper = styled.article`
	position: fixed;
	bottom: 2rem;
	right: 3rem;
`;

