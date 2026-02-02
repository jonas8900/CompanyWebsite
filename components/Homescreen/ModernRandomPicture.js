import Image from "next/image";
import styled, { keyframes, css } from "styled-components"; // css importieren
import Greenbutton from "../Buttons/GreenButton";
import { useEffect, useState } from "react";
import WindowCard from "../WindowCards/WindowCard";
import ContactData from "./ContactData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import ProgressDots from "./ProgressDot";
import { useBodyScrollLock } from "../../lib/helper/BodyScrollBar";
import { Link } from "react-scroll";

export default function ModernRandomPicture() {
	const [counter, setCounter] = useState(0);
	const [contactClicked, setContactClicked] = useState(false);
	const [animationToggle, setAnimationToggle] = useState(true);
	const [isInfoBoxHovered, setIsInfoBoxHovered] = useState(false); // Neuer State
	const steps = 6;


	function handleContactUsButton() {
		setAnimationToggle(!animationToggle);
		if (contactClicked === true) {
			setTimeout(() => {
				setContactClicked(!contactClicked);
			}, 350);
		} else {
			setContactClicked(!contactClicked);
		}
	}
	//useEffect to prevent scrolling in the blured background when contact window is open
	useBodyScrollLock(contactClicked);

	function handleClickLeftButtonToChangePicture() {
		setCounter((prev) => (prev - 1 + steps) % steps);
	}

	function handleClickRightButtonToChangePicture() {
		setCounter((prev) => (prev + 1) % steps);
	}

	function handleChangePictureOnCLick(number) {
		setCounter(number - 1);
	}


	return (
		<>
			<StyledWrapper id="introtext">
				<StyledProgressSection>
					<ProgressDots
						counter={counter}
						onDotClick={handleChangePictureOnCLick}
						totalDots={steps} 
					/>
				</StyledProgressSection>
				<StyledImageContainer data-image-src={`/Random-Kranbild-${counter}.webp`} $ishovered={isInfoBoxHovered}> {/* Prop hinzugefügt */}
					<StyledArrowLeft
						icon={faCaretLeft}
						onClick={handleClickLeftButtonToChangePicture}
					/>

					<StyledArrowRight
						icon={faCaretRight}
						onClick={handleClickRightButtonToChangePicture}
					/>

					<StyledRandomImage
						key={counter}
						src={`/Random-Kranbild-${counter}.webp`}
						alt="Zufälliges Bild einer Krananlage"
						fill
						priority={true}
						sizes="100vw"
					/>

					{/* Mobile-only Text */}
					<StyledMobileImageText>
						<h1>Ihr Partner für maßgeschneiderte Lösungen im Sonderkranbau und Service</h1>
					</StyledMobileImageText>

					{/* Desktop-only Info Box */}
					<StyledInfoBox
						onMouseEnter={() => setIsInfoBoxHovered(true)}
						onMouseLeave={() => setIsInfoBoxHovered(false)}
						$ishovered={isInfoBoxHovered}
					>
						<div className="content">
							<h1>Ihr Partner für maßgeschneiderte Lösungen im Sonderkranbau und Service</h1>
							<p>Schauen Sie sich jetzt um oder kontaktieren Sie uns</p>
							<div className="buttons">
								<Link to="products" smooth={true} duration={500}>
									<Greenbutton>Unsere Produkte</Greenbutton>
								</Link>
								<Greenbutton onClick={handleContactUsButton}>Kontakt</Greenbutton>
							</div>
						</div>
					</StyledInfoBox>


				</StyledImageContainer>


				<StyledCardWrapper $contactclicked={contactClicked}>
					<StyledCardSection>
						<h1>Was wir können</h1>
						<StyledSecondHeadline>Ganz einfach:</StyledSecondHeadline>
						<p>
							Krananlagen – von maßgefertigter Herstellung bis zu jährlichen
							Sicherheitsprüfungen und allem dazwischen.
						</p>
						<StyledGreenButtonSection>
							<Greenbutton onClick={handleContactUsButton} margin={-2}>
								Kontaktieren Sie uns
							</Greenbutton>
						</StyledGreenButtonSection>
						{contactClicked && (
							<WindowCard
								headline={"Kontakt"}
								infotext={`Wir sind für Sie da. Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns auf Sie!`}
								onClick={handleContactUsButton}
								contactData={<ContactData />}
								animationTrigger={animationToggle}
							></WindowCard>
						)}
					</StyledCardSection>
				</StyledCardWrapper>
			</StyledWrapper>
		</>
	);
}

const StyledWrapper = styled.section`
	margin-bottom: 12rem;
	position: relative;
	top: 0%;
	@media (min-width: 1025px) {
		margin-top: -8rem;
		margin-bottom: 15rem;
		height: 100%;
	}
	@media (min-width: 1440px) {
		margin-bottom: 20rem;
	}
`;

const StyledSecondHeadline = styled.h2`
	@media (min-width: 1025px) {
		font-size: 1.1rem;
		font-weight: 500;
	}
`;


const StyledImageContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vh; 
  overflow: hidden;

  @media (min-width: 1025px) {
    height: 90vh;
    &:before { // Pseudo-Element für den unscharfen Hintergrund
      content: '';
      position: absolute;
      top: -10%; // Leichte Überlappung, um Ränder des Blurs zu verdecken
      left: -10%;
      width: 120%;
      height: 120%;
      background-image: url(${props => props['data-image-src']}); // Verwendet das aktuelle Bild
      background-size: cover;
      background-position: center;
      filter: blur(8px) brightness(${props => props.$ishovered ? 0.6 : 0.8}); // Helligkeit bei Hover anpassen
      transition: filter 0.3s ease; // Transition hinzufügen
      z-index: 0; // Unter dem Hauptbild
      pointer-events: none;
    }
  }
`;

const StyledRandomImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  z-index: 1; // Über dem unscharfen Hintergrund

  @media (min-width: 1025px) {
    object-fit: contain; // Gesamtes Bild auf Desktop
    z-index: 2; // Hauptbild über dem unscharfen Hintergrund und dem Overlay
  }
`;

const StyledMobileImageText = styled.div`
  position: absolute;
  z-index: 4;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(90%, 500px);
  padding: 1.5rem 1rem;
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.16);
  text-align: center;

  h1 {
    margin: 0;
    color: #fff;
    font-weight: 600;
    font-size: clamp(1.2rem, 4vw, 1.8rem);
  }

  @media (min-width: 1025px) {
    display: none; 
  }
`;

const StyledInfoBox = styled.div`
	display: none;

	@media (min-width: 1025px) {
		display: block;
		position: absolute;
		z-index: 5;
		left: 5%;
		top: 50%;
		transform: translateY(-50%);
		width: clamp(400px, 35%, 650px);
		padding: 2rem;
		border-radius: 12px;
		background: rgba(10, 10, 10, 0.1); // Initial subtiler
		backdrop-filter: blur(0px); // Initial kein Blur
		transition: background 0.3s ease, backdrop-filter 0.3s ease; // Transition hinzufügen

		${props => props.$ishovered && css`
			background: rgba(10, 10, 10, 0.4); // Bei Hover dunkler
			backdrop-filter: blur(12px); // Bei Hover Blur
		`}

		h1 {
			color: white;
			font-size: 2.5rem;
			font-weight: 700;
			text-shadow: 0 2px 8px rgba(0,0,0,0.5);
			margin-bottom: 1rem;
		}

		p {
			color: #eee;
			font-size: 1.1rem;
			margin-bottom: 2rem;
		}

		.buttons {
			display: flex;
			gap: 1rem;
		}
	}
`;

const StyledCardSection = styled.article`
	width: 85%;
	margin: auto;
	margin-left: 2rem;
`;

const StyledGreenButtonSection = styled.section`
	margin-left: 27%;
	@media (min-width: 330px) {
		margin-left: 35%;
	}
	@media (min-width: 390px) {
		margin-left: 50%;
	}
	@media (min-width: 600px) {
		margin-left: 50%;
	}
	@media (min-width: 1250px) {
		margin-left: 60%;
	}
	@media (min-width: 2200px) {
		margin-left: 70%;
	}
`;

const StyledCardWrapper = styled.section`
	position: absolute;
	border-radius: 9px;
	background-color: var(--color-third);
	width: 80%;
	left: 10%;
	right: 10%;
	margin: auto;
	margin-top: -1rem;
	z-index: 999;

	@media (min-width: 768px) {
		width: 60%;
	}
	@media (min-width: 1025px) {
		width: 40%;
	}
	@media (min-width: 1900px) {
		width: 30%;
	}
`;

const StyledProgressSection = styled.section`
	position: absolute;
	z-index: 2;
	bottom: 1.5rem;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: center;

	div {
		cursor: pointer;
	}
`;

const StyledArrowRight = styled(FontAwesomeIcon)`
	position: absolute;
	z-index: 2;
	right: 1rem;
	top: 50%;
	transform: translateY(-50%);
	width: 2.5rem;
	height: 2.5rem;
	color: white;
	cursor: pointer;
	transition: color 0.3s ease;

	&:hover {
		color: var(--color-secondary);
	}
`;

const StyledArrowLeft = styled(FontAwesomeIcon)`
	position: absolute;
	z-index: 2;
	left: 1rem;
	top: 50%;
	transform: translateY(-50%);
	width: 2.5rem;
	height: 2.5rem;
	color: white;
	cursor: pointer;
	transition: color 0.3s ease;

	&:hover {
		color: var(--color-secondary);
	}
`;
