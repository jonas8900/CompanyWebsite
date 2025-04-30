import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import { useEffect, useState } from "react";
import WindowCard from "../WindowCards/WindowCard";
import ContactData from "./ContactData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import ProgressDots from "./ProgressDot";

export default function Randompicture() {
	const [counter, setCounter] = useState(0);
	const [contactClicked, setContactClicked] = useState(false);
	const [animationToggle, setAnimationToggle] = useState(true);
	const [timerResetKey, setTimerResetKey] = useState(0);
	const steps = 8;


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
	useEffect(() => {
		if (typeof window !== "undefined") {
			if (contactClicked === true) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		}
	}, [contactClicked]);

	//useEffect to change the picture every 10 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prev) => (prev === 8 ? 0 : prev + 1));
		}, 10000); 

		return () => clearInterval(interval); 
	}, [timerResetKey]);

	function handleClickLeftButtonToChangePicture() {
		setCounter((prev) => (prev - 1 + steps) % steps);
		setTimerResetKey((prev) => prev + 1); 
	}

	function handleClickRightButtonToChangePicture() {
		setCounter((prev) => (prev + 1) % steps);
		setTimerResetKey((prev) => prev + 1);
	}

	function handleChangePictureOnCLick(number) {
		setCounter(number - 1);
		setTimerResetKey((prev) => prev + 1); 
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
						sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, (max-width: 1400px) 1080px"
						alt="Zufälliges Bild einer Krananlage"
						width={1920}
						height={1080}
						counter={counter + 1}
						rel="preload"
						priority={true}
						unoptimized
					/>
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
 0% {
  opacity: 0.5;
  }
  100% {
  opacity: 1;

  }
  
`;

const StyledWrapper = styled.section`
	margin-bottom: 12rem;
	position: relative;
	top: 0%;
	@media (min-width: 1025px) {
		margin-top: -8rem;
		margin-bottom: 4rem;
		height: 100%;
	}
	@media (min-width: 1440px) {
		margin-bottom: 0rem;
	}
`;

const StyledSecondHeadline = styled.h2`
	@media (min-width: 1025px) {
		font-size: 1.1rem;
		font-weight: 500;
	}
`;

const StyledRandomImage = styled(Image)`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	object-fit: cover;
	z-index: 0;
	animation: ${({ counter }) => counter >= 1 && Left} 1.5s ease;
	@media (min-width: 1025px) {
		height: 75%;
	}
`;

const StyledImageContainer = styled.section`
	position: relative;
	width: 100%;
	padding-top: 62%;
	@media (min-width: 1025px) {
		position: static;
		height: 100%;
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
		margin: auto;
		margin-top: -10%;
	}
	@media (min-width: 1025px) {
		width: 40%;
		margin: auto;
		margin-top: -16%;
	}
	@media (min-width: 1900px) {
		width: 30%;
		margin: auto;
		margin-top: -16%;
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
		bottom: 30%;
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
		top: 40%;
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
		top: 40%;
		margin: 0;
		transform: translateY(-50%);
	}
`;
