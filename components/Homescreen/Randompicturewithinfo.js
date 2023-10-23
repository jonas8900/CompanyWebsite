import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import { useEffect, useState } from "react";
import WindowCard from "../WindowCards/WindowCard";
import ContactData from "./ContactData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Randompicture() {
	const [counter, setCounter] = useState(1);
	const [contactClicked, setContactClicked] = useState(false);
	const [animationToggle, setAnimationToggle] = useState(true);

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

	//use a function with to change the picture every 10 seconds
	useEffect(() => {
		const timeOutForCount = setInterval(() => {
			setCounter((increaseCount) => {
				if (increaseCount >= 5) {
					return 1;
				} else {
					return increaseCount + 1;
				}
			});
		}, 10000);

		return () => clearInterval(timeOutForCount);
	}, []);

	function handleClickLeftButtonToChangePicture() {
		if (counter === 1) {
			setCounter(5);
		} else {
			setCounter(counter - 1);
		}
	}
	function handleClickRightButtonToChangePicture() {
		if (counter === 5) {
			setCounter(1);
		} else {
			setCounter(counter + 1);
		}
	}

	return (
		<>
			<StyledWrapper id="randompicture">
				<StyledProgressSection>
					<StyledProgressDiv1 $counter={counter}></StyledProgressDiv1>
					<StyledProgressDiv2 $counter={counter}></StyledProgressDiv2>
					<StyledProgressDiv3 $counter={counter}></StyledProgressDiv3>
					<StyledProgressDiv4 $counter={counter}></StyledProgressDiv4>
					<StyledProgressDiv5 $counter={counter}></StyledProgressDiv5>
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
						src={`/Random-Kranbild-${counter}.jpg`}
						sizes="(max-width: 600px) 400px, (max-width: 1024px) 1800px"
						alt="Zufälliges Bild einer Krananlage"
						width={1477}
						height={615}
						counter={counter}
						priority={true}
					/>
				</StyledImageContainer>

				<StyledCardWrapper $contactclicked={contactClicked}>
					<StyledCardSection>
						<h1>Was wir können</h1>
						<p>
							Planung, Lieferung, Montage, Reparatur und Wartung von
							individuellen Krananlagen.
						</p>
						<Greenbutton onClick={handleContactUsButton}>
							Kontaktieren Sie uns
						</Greenbutton>
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
		filter: brightness(0.65);
		height: 75%;
	}
`;

const StyledImageContainer = styled.section`
	position: relative;
	width: 100%;
	padding-top: 56.25%;
	@media (min-width: 1025px) {
		position: static;
	}
`;

const StyledCardSection = styled.article`
	width: 70%;
	margin: auto;
	margin-left: 2rem;
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
	z-index: ${({ $contactclicked }) => ($contactclicked ? 1000 : 1)};
	@media (min-width: 1025px) {
		width: 40%;
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
	color: black;
	border: none;
	margin: 0.3rem;

	&:hover {
		color: white;
		transition: all 0.5s ease;
	}
	&:not(:hover) {
		color: black;
		transition: all 0.5s ease;
	}

	&:active {
		color: var(--color-fifth);
		transition: all 0.1s ease;
	}
`;

const StyledArrowLeft = styled(FontAwesomeIcon)`
	position: absolute;
	z-index: 2;
	left: 0%;
	top: 40%;
	width: 2.5rem;
	height: 2.5rem;
	color: black;
	border: none;
	margin: 0.3rem;

	&:hover {
		color: white;
		transition: all 0.5s ease;
	}
	&:not(:hover) {
		color: black;
		transition: all 0.5s ease;
	}

	&:active {
		color: var(--color-fifth);
		transition: all 0.1s ease;
	}
`;

const StyledProgressDiv1 = styled.div`
	width: 0.7rem;
	height: 0.7rem;
	margin: 0.3rem;
	min-width: 0.7rem;
	min-height: 0.7rem;
	background-color: ${({ $counter }) =>
		$counter === 1 ? "var(--color-primary)" : "var(--color-third)"};
	@media (min-width: 1025px) {
		width: 1rem;
		height: 1rem;
		min-width: 1rem;
		min-height: 1rem;
	}
`;

const StyledProgressDiv2 = styled.div`
	width: 0.7rem;
	height: 0.7rem;
	margin: 0.3rem;
	min-width: 0.7rem;
	min-height: 0.7rem;
	background-color: ${({ $counter }) =>
		$counter === 2 ? "var(--color-primary)" : "var(--color-third)"};
	@media (min-width: 1025px) {
		width: 1rem;
		height: 1rem;
		min-width: 1rem;
		min-height: 1rem;
	}
`;

const StyledProgressDiv3 = styled.div`
	width: 0.7rem;
	height: 0.7rem;
	margin: 0.3rem;
	min-width: 0.7rem;
	min-height: 0.7rem;
	background-color: ${({ $counter }) =>
		$counter === 3 ? "var(--color-primary)" : "var(--color-third)"};
	@media (min-width: 1025px) {
		width: 1rem;
		height: 1rem;
		min-width: 1rem;
		min-height: 1rem;
	}
`;

const StyledProgressDiv4 = styled.div`
	width: 0.7rem;
	height: 0.7rem;
	margin: 0.3rem;
	min-width: 0.7rem;
	min-height: 0.7rem;
	background-color: ${({ $counter }) =>
		$counter === 4 ? "var(--color-primary)" : "var(--color-third)"};
	@media (min-width: 1025px) {
		width: 1rem;
		height: 1rem;
		min-width: 1rem;
		min-height: 1rem;
	}
`;

const StyledProgressDiv5 = styled.div`
	width: 0.7rem;
	height: 0.7rem;
	margin: 0.3rem;
	min-width: 0.7rem;
	min-height: 0.7rem;
	background-color: ${({ $counter }) =>
		$counter === 5 ? "var(--color-primary)" : "var(--color-third)"};
	@media (min-width: 1025px) {
		width: 1rem;
		height: 1rem;
		min-width: 1rem;
		min-height: 1rem;
	}
`;
