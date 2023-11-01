import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import OutsideClickHandler from "react-outside-click-handler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function WindowCard({
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
						<StyledIcon icon={faCircleXmark} onClick={onClick} />
						<section>
							<h3>{headline}</h3>
							<p>{infotext}</p>
						</section>
						<StyledContactData>{contactData}</StyledContactData>
						<Greenbutton onClick={onClick} $value={value}>
							Schließen
						</Greenbutton>
					</StyledInformationCard>
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

const StyledIcon = styled(FontAwesomeIcon)`
	width: 2rem;
	height: 2rem;
	position: absolute;
	right: -0.5rem;
	top: -0.5rem;
	color: red;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		scale: 1.2;
	}
`;

const StyledContactData = styled.article`
	margin-top: 2rem;
	margin-bottom: 2rem;
	border-top: 1px solid grey;
`;

const StyledInformationCard = styled.article`
	padding: 1rem;
	position: fixed;
	top: 35%;
	transform: translate(-0%, -35%);
	border-radius: 9px;
	background-color: var(--color-third);
	width: 80%;
	left: 10%;
	right: 10%;
	margin: auto;
	z-index: 1;
	width: 92%;
	left: 4%;
	right: 4%;
	@media (min-width: 1025px) {
		width: 50%;
		left: 25%;
		right: 25%;
	}
`;
