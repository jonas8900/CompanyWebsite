import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import { useEffect, useState } from "react";
import WindowCard from "../WindowCards/WindowCard";
import ContactData from "./ContactData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import ProgressDots from "./ProgressDot";
import { useBodyScrollLock } from "../../lib/helper/BodyScrollBar";

export default function Randompicture() {
	const [counter, setCounter] = useState(0);
	const [contactClicked, setContactClicked] = useState(false);
	const [animationToggle, setAnimationToggle] = useState(true);
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

	//useEffect to change the picture every 10 seconds

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
			<StyledImageContainer>
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

				<StyledImageOverlay />

				<StyledImageText>
					<h1>Ihr Partner für maßgeschneiderte Lösungen im Sonderkranbau und Service</h1>
				</StyledImageText>
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

const Left = keyframes`
	0% {opacity: 0; transform: translateX(100%);}
	20% {opacity: 0.5; transform: translateX(50%);}
	100% {opacity: 1; transform: translateX(0%);}
`;


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
  padding-top: 62%;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding-top: 38%;
  }

    @media (min-width: 1440px) {
    padding-top: 40%;
  }
`;

const StyledRandomImage = styled(Image)`
  object-fit: cover;
  z-index: 0;
  animation: ${({ counter }) => counter >= 1 && Left} 1.5s ease;
`;

const StyledImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledImageText = styled.div`
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: min(900px, calc(100% - 5rem));
  padding: 1.1rem 1.25rem;
  border-radius: 18px;

  background: rgba(10, 10, 10, 0.35);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);

  text-align: center;

  &::before {
    content: "";
    position: absolute;
    left: 18px;
    right: 18px;
    top: 10px;
    height: 3px;
    border-radius: 999px;
    background: linear-gradient(
      90deg,
      rgba(125, 255, 125, 0.0),
      rgba(125, 255, 125, 1),
      rgba(125, 255, 125, 0.0)
    );
  }

  h1 {
    margin: 0.25rem 0 0;
    color: #fff;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.08;

    font-size: clamp(14px, 3vw, 2.1rem);
    text-shadow: 0 10px 26px rgba(0,0,0,0.55);
  }

  @media (min-width: 768px) {
	top: 70%;
		h1 {
			font-weight: 800;
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
	z-index: ${({ $contactclicked }) => ($contactclicked ? 99999 : 999)};

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
	padding: 0rem;
	left: 50%;
	right: 50%;
	display: flex;
	justify-content: center;

	div {
		cursor: pointer;
	}

	@media (min-width: 1025px) {
		bottom: 5%;
	}
`;

const StyledArrowRight = styled(FontAwesomeIcon)`
	position: absolute;
	z-index: 2;
	right: 0%;
	top: 40%;
	width: 2.5rem;
	height: 2.5rem;
	color: white;
	border: none;
	margin: 0.3rem;
	cursor: pointer;

	&:hover {
		color: var(--color-secondary);
		transition: all 0.5s ease;
	}
	&:not(:hover) {
		color: white;
		transition: all 0.5s ease;
	}

	&:active {
		color: var(--color-fifth);
		transition: all 0.1s ease;
	}
	@media (min-width: 1025px) {
		width: 4rem;
		height: 4rem;
		top: 50%;
		margin: 0;
		transform: translateY(-50%);
	}
`;

const StyledArrowLeft = styled(FontAwesomeIcon)`
	position: absolute;
	z-index: 2;
	left: 0%;
	top: 40%;
	width: 2.5rem;
	height: 2.5rem;
	color: white;
	border: none;
	margin: 0.3rem;
	cursor: pointer;

	&:hover {
		color: var(--color-secondary);
		transition: all 0.5s ease;
	}
	&:not(:hover) {
		color: white;
		transition: all 0.5s ease;
	}

	&:active {
		color: var(--color-fifth);
		transition: all 0.1s ease;
	}
	@media (min-width: 1025px) {
		width: 4rem;
		height: 4rem;
		top: 50%;
		margin: 0;
		transform: translateY(-50%);
	}
`;
