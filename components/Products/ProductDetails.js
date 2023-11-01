import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";

export default function ProductDetails({
	headline,
	infotext,
	onClick,
	value,
	animationTrigger,
	contactData,
	imageGalery,
}) {
	return (
		<>
			<StyledWindow $animationtrigger={animationTrigger}>
				<StyledInformationCard>
					<section>
						<h3>{headline}</h3>
						<StyledIntroText>{infotext}</StyledIntroText>
					</section>
					<StyledContactData>{contactData}</StyledContactData>
					{/* <StyledImageGalery>{imageGalery}</StyledImageGalery> */}
				</StyledInformationCard>
				<StyledImageWrapper>
					<Greenbutton onClick={onClick} $value={value}>
						Schließen
					</Greenbutton>
				</StyledImageWrapper>
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
	z-index: 99999;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(20px);
	animation: ${({ $animationtrigger }) =>
			$animationtrigger ? FadeOut : FadeIn}
		0.4s ease;
`;

const StyledImageGalery = styled.article`
	background-color: var(--color-third);
	display: flex;
	gap: 1rem;
	margin-bottom: 2rem;
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
