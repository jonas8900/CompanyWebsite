import {
	faCaretLeft,
	faEnvelope,
	faPhone,
	faQuestion,
	faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import directLink from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import ContactFormular from "../Contact/ContactFormular";
import ToastMessage from "../ToastMessage/ToastMessage";

export default function SideBar() {
	const [arrowClicked, setArrowClicked] = useState(true);
	const [arrowAnimation, setArrowAnimation] = useState(true);
	const [questionClicked, setQuestionClicked] = useState(false);
	const [formularClicked, setFormularClicked] = useState(false);
	const [messageSuccess, setMessageSuccess] = useState(false);
	const [animationTrigger, setAnimationTrigger] = useState(false);
	const [submitClicked, setSubmitClicked] = useState(false);
	const [capture, setCapture] = useState("");

	function handleArrowClicked() {
		setArrowAnimation(!arrowAnimation);
		setTimeout(() => {
			setArrowClicked(!arrowClicked);
		}, 250);
	}

	function handleQuestionClick() {
		setQuestionClicked(!questionClicked);
	}

	function handleClickFormularButton() {
		setFormularClicked(true);
		setCapture("");
	}

	function handleCloseWindow() {
		setAnimationTrigger(true);
		setTimeout(() => {
			setFormularClicked(false);
			setAnimationTrigger(false);
		}, 350);
	}

	function handleSubmitButtonClicked() {
		setSubmitClicked(true);
		setTimeout(() => {
			setSubmitClicked(false);
		}, 3000);
	}

	async function handleSubmitFormular(event) {
		handleSubmitButtonClicked();
		event.preventDefault();

		if (!capture || capture === null || "") {
			alert("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
			return;
		}

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			setMessageSuccess(true);
			setTimeout(() => {
				setMessageSuccess(false);
				setFormularClicked(false);
			}, 3000);
		} else {
			alert("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
		}
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (formularClicked) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		}
	}, [formularClicked]);

	return (
		<>
			<OutsideClickHandler
				onOutsideClick={() => {
					setTimeout(() => {
						setArrowAnimation(false);
						setArrowClicked(false);
						setQuestionClicked(false);
					}, 270);
				}}
			>
				<StyledWrapper $arrowclicked={arrowAnimation}>
					<StyledSectionForArrow $arrowclicked={arrowAnimation}>
						<StyledArrow
							onClick={handleArrowClicked}
							icon={faCaretLeft}
							$arrowclicked={arrowAnimation}
							aria-label="Menü Aufklappen"
						/>
					</StyledSectionForArrow>
					{arrowClicked && (
						<StyledSectionForSideBar $arrowclicked={arrowAnimation}>
							<StyledButton
								$questionclicked={questionClicked}
								aria-label="Hilfe"
							>
								<StyledIcon icon={faQuestion} onClick={handleQuestionClick} />
							</StyledButton>
							{/* <Link
								to="career"
								spy={true}
								smooth={false}
								offset={-70}
								href="#"
								duration={350}
							>
								<StyledButton aria-label="Zu unserer Karriere-Seite gehen">
									<StyledIcon icon={faUserGraduate} />
								</StyledButton>
							</Link> */}
							<StyledButton
								onClick={handleClickFormularButton}
								aria-label="Kontaktformular"
							>
								<StyledIcon icon={faEnvelope} />
							</StyledButton>
						</StyledSectionForSideBar>
					)}
					{questionClicked && (
						<>
							<StyledArticle>
								<StyledSubHeadline>
									Rufen Sie jetzt unseren Berater an !
								</StyledSubHeadline>
								<StyledParagraph>
									<StyledLink href="tel:051127789680">
										<StyledPhoneIcons icon={faPhone} />
										<b>0511 27789680</b>
									</StyledLink>
								</StyledParagraph>
								<StyledParagraph>
									<StyledLink href="mailto:info@emb-schulze.de">
										<StyledInfoIcons icon={faEnvelope} />

										<b>info@emb-schulze.de</b>
									</StyledLink>
								</StyledParagraph>
								<StyledClosedHelp
									icon={faX}
									onClick={handleQuestionClick}
									aria-label="Schließen"
								/>
							</StyledArticle>
						</>
					)}
				</StyledWrapper>
			</OutsideClickHandler>
			{formularClicked && (
				<ContactFormular
					animationTrigger={animationTrigger}
					onSubmit={handleSubmitFormular}
					onClick={handleCloseWindow}
					onChange={(value) => setCapture(value)}
					disabled={submitClicked}
					successValue={submitClicked}
				/>
			)}

			{messageSuccess && (
				<AnimationSection $animationtrigger={animationTrigger}>
					<ToastMessage>Senden erfolgreich!</ToastMessage>
				</AnimationSection>
			)}
		</>
	);
}

const fadeInRight = keyframes`
  0% {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
`;

const fadeOutRight = keyframes`
 0% {
  opacity: 1;
  }
  100% {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  }
`;

const PhoneRing = keyframes`

    0% {
        transform: rotate(0) scale(1) skew(1deg)
    }
    10% {
        transform: rotate(-25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-third);
        padding: 0rem;
    }
    20% {
        transform: rotate(25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-primary);
        color: black;
    }
    30% {
        transform: rotate(-25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
		background-color: var(--color-primary);
        color: black;
    }
    40% {
        transform: rotate(25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-primary);
        color: black
    }
    50% {
        transform: rotate(0) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 100%;
        background-color: var(--color-primary);

    }
    100% {
        transform: rotate(0) scale(1) skew(1deg);
    }

`;

const WobbleEffect = keyframes` 

0% {
			transform:rotate(0deg);
			transform-origin:50% 0;
		}
		10% {
			transform:rotate(2deg);
		}
		20% {
			transform:rotate(-4deg);
		}
		30% {
			transform:rotate(6deg);
		}
		40% {
			transform:rotate(-6deg);
		}
		40% {
			transform:rotate(8deg);
		}
		60% {
			transform:rotate(-8deg);
		}
		70% {
			transform:rotate(6deg);
		}
		80% {
			transform:rotate(-6deg);
		}
		90% {
			transform:rotate(4deg);
		}
		100% {
			transform:rotate(0deg);
			transform-origin:50% 0;
		}

`;

const ToastFadeIn = keyframes`
 0% {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  }
`;

const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;

const StyledSectionForSideBar = styled.section`
	position: relative;
	z-index: 100;
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
	animation: ${({ $arrowclicked }) =>
			$arrowclicked ? fadeInRight : fadeOutRight}
		0.4s ease;
`;

const AnimationSection = styled.section`
	animation: ${({ $messagesuccess }) => $messagesuccess && ToastFadeIn} 0.4s
		ease;
`;

const StyledButton = styled.button`
	background-color: var(--color-fourth);
	width: 3rem;
	height: 3rem;
	display: flex;

	border: none;
	box-shadow: ${({ $questionclicked }) =>
		$questionclicked
			? "5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"
			: "none"};
	&:active {
		box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
			5px 5px 15px 5px rgba(0, 0, 0, 0);
	}
`;

const StyledIcon = styled(FontAwesomeIcon)`
	width: 2rem;
	height: 2rem;
	color: white;
	align-self: center;
	justify-self: center;
`;

const StyledSectionForArrow = styled.section`
	position: relative;
	right: ${({ $arrowclicked }) => ($arrowclicked ? "0rem" : "-1rem")};
	transition: all 0.2s linear;
`;

const StyledArrow = styled(FontAwesomeIcon)`
	width: 2rem;
	height: 2rem;
	color: var(--color-secondary);
	transform: ${({ $arrowclicked }) => ($arrowclicked ? "rotate(180deg)" : "")};
	transition: all 0.4s ease;
	cursor: pointer;
	&:hover {
		color: var(--color-fifth);
		scale: 1.2;
	}

	@media (min-width: 768px) {
		width: 2.5rem;
		height: 2.5rem;
	}
`;

const StyledWrapper = styled.section`
	position: fixed;
	bottom: 10%;
	transform: translateY(-90%);
	right: 0%;
	display: flex;
	width: 4rem;
	height: 8rem;
	z-index: 9999;
	justify-content: center;
	align-items: center;
`;

const StyledArticle = styled.article`
	background-color: var(--color-fourth);
	width: 20rem;
	height: 7rem;
	@media (min-width: 768px) {
		width: 25rem;
		height: 9rem;
	}
	animation: ${({ helpbuttonclicked }) => helpbuttonclicked && FadeIn} 1s ease;
	position: fixed;
	top: -3rem;

	right: 2.4rem;
	transform: translateY(-70%);
`;

const StyledSubHeadline = styled.h2`
	color: white;
	text-align: center;
`;

const StyledParagraph = styled.p`
	color: white;
	text-align: center;
`;

const StyledLink = styled(directLink)`
	text-decoration: none;
	color: white;
`;

const StyledPhoneIcons = styled(FontAwesomeIcon)`
	width: 1rem;
	height: 1rem;
	margin-right: 1rem;
	text-align: center;
	&:hover {
		animation: ${PhoneRing} 1s linear both infinite;
	}
`;

const StyledClosedHelp = styled(FontAwesomeIcon)`
	width: 1rem;
	height: 1rem;
	position: absolute;
	right: 0.5rem;
	top: 0.5rem;
	color: white;
	border: 1px solid white;

	&:hover {
		color: red;
	}
	&:active {
		color: red;
	}
`;

const StyledInfoIcons = styled(FontAwesomeIcon)`
	width: 1rem;
	height: 1rem;
	margin-right: 1rem;
	text-align: center;
	&:hover {
		animation: ${WobbleEffect} 1s linear both infinite;
	}
`;
