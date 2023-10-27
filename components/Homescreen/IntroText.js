import styled, { keyframes } from "styled-components";
import GreenButton from "../Buttons/GreenButton";
import { useEffect, useState } from "react";

export default function Introtext() {
	const [windowAlert, setWindowAlert] = useState(0);
	const [animationToggle, setAnimationToggle] = useState(true);

	function handleOnclickOnButtonWindow(index) {
		if (windowAlert === 0 && animationToggle === false) {
			setAnimationToggle(true);
		} else {
			setAnimationToggle(!animationToggle);
			setWindowAlert(index);
		}
	}

	function handleCloseWindow() {
		setAnimationToggle(!animationToggle);
		setTimeout(() => {
			setWindowAlert(0);
		}, 350);
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (windowAlert > 0) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		}
	}, [windowAlert]);

	return (
		<>
			<StyledIntroTextWrapper>
				<StyledHeadline>Elektromaschinenbau Schulze GmbH</StyledHeadline>
				<StyledSecondHeadline>schon seit 10 Jahren..</StyledSecondHeadline>
				<StyledInfoSection>
					<StyledTextParagraph>
						sind wir Ihr <b>zuverlässiger Partner</b> im Bereich{" "}
						<b>Fördertechnik</b>. Unsere Leistungen umfassen die{" "}
						<b>Herstellung von Krananlagen</b>, Service und Reparaturen,
						Mängelbeseitigungen, Prüfungen sowie die Reparatur und Überholung
						sämtlicher Kranantriebe, unabhängig von ihrem Alter und Hersteller.
						Wir sind Spezialisten in der Planung, Konstruktion und Herstellung
						von Kranen und Sonderhebezeugen. Darüber hinaus bieten wir
						Kranprüfungen gemäß der UVV BGV an und sind Experten in
						Spezialmontagen. Unser Ziel ist es, maßgeschneiderte Lösungen für
						jeden Kunden anzubieten und somit langfristige Partnerschaften
						aufzubauen. Vertrauen Sie auf unsere Erfahrung und unser Engagement.
					</StyledTextParagraph>
					<StyledArgumentCardWrapper>
						<GreenButton>
							<i>schnell</i>
						</GreenButton>
						{/* {windowAlert === 1 && (
							<>
								<WindowCard
									headline={"schnell"}
									infotext={`Bei uns wissen wir, dass Zeit buchstäblich Geld bedeutet,
                      insbesondere in der Welt des Maschinenbaus und der
                      Fördertechnik. Deshalb haben wir uns einen Ruf als
                      diejenigen erarbeitet, die nicht nur verstehen, wie man
                      Krananlagen repariert und wartet, sondern dies auch in
                      Rekordzeit erledigen.`}
									onClick={handleCloseWindow}
									animationTrigger={animationToggle}
								/>
							</>
						)} */}
						<GreenButton>
							<b>fair</b>
						</GreenButton>
						{/* {windowAlert === 2 && (
							<>
								<StyledWindow $animationtrigger={animationToggle}>
									<StyledInformationCard>
										<h3>
											<b>fair</b>
										</h3>
										<h4>Warum Sie uns vertrauen können:</h4>
										<h5> Faire Preise:</h5>
										<p>
											Wir bieten faire Preise für unsere Produkte und
											Dienstleistungen, um sicherzustellen, dass Sie stets Wert
											für Ihr Geld erhalten. Ihre Zufriedenheit ist unsere
											oberste Priorität.{" "}
										</p>
										<h5>Flexibilität:</h5>
										<p>
											Wir verstehen, dass Ihre Zeit kostbar ist. Daher bemühen
											wir uns, flexible Lösungen anzubieten, die sich Ihren
											Bedürfnissen anpassen. Wir sind hier, um Ihre
											Anforderungen zu erfüllen.
										</p>{" "}
										<h5>Qualität ohne Kompromisse:</h5>
										<p>
											Unsere Verpflichtung zur Qualität erstreckt sich auf
											alles, was wir tun. Von der Auswahl hochwertiger Produkte
											bis zur Bereitstellung erstklassiger Dienstleistungen
											legen wir großen Wert auf Qualität.
										</p>{" "}
										<h5>Respektvolle Partnerschaft:</h5>
										<p>
											{" "}
											Wir behandeln unsere Kunden stets respektvoll und fair.
											Ihre Zufriedenheit und Ihr Vertrauen sind für uns von
											größter Bedeutung.
										</p>
										<GreenButton onClick={handleCloseWindow}>
											Schließen
										</GreenButton>
									</StyledInformationCard>
								</StyledWindow>
							</>
						)}
						{windowAlert === 3 && (
							<>
								<WindowCard
									headline={"zuverlässig"}
									infotext={`Bei uns sind wir stolz auf unsere Zuverlässigkeit und
                      unser Engagement, unsere Kunden zufriedenzustellen.
                      Verlassen Sie sich auf uns, um Ihre Anlagen in optimaler
                      Betriebsbereitschaft zu halten. Ihre Zufriedenheit und Ihr
                      Vertrauen sind unsere höchsten Prioritäten, und darauf
                      können Sie sich immer verlassen.`}
									onClick={handleCloseWindow}
									animationTrigger={animationToggle}
								/>
							</>
						)} */}
						<GreenButton>zuverlässig</GreenButton>
					</StyledArgumentCardWrapper>
				</StyledInfoSection>
			</StyledIntroTextWrapper>
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

const StyledIntroTextWrapper = styled.main`
	margin: auto 5% auto 10%;
	margin-top: 60%;
	@media (max-width: 350px) {
		margin-top: 80%;
	}
	@media (min-width: 450px) {
		margin-top: 30%;
	}
	@media (min-width: 1025px) {
		margin: auto;
		margin-top: 4%;
		padding: 1rem;
		box-shadow: 5px 8px 12px -4px rgba(0, 0, 0, 0.2);
		width: 70%;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}
	@media (min-width: 1800px) {
		margin-top: 0;
	}
`;

const StyledHeadline = styled.h1`
	text-align: center;
	text-shadow: 1px 3px 1px #eee;
`;

const StyledInfoSection = styled.section`
	display: flex;
`;

const StyledTextParagraph = styled.p`
	@media (min-width: 1025px) {
		line-height: 1.5rem;
		align-self: center;
	}
`;

const StyledSecondHeadline = styled.h2`
	text-align: center;
	@media (min-width: 1025px) {
		font-size: 1.1rem;
		font-weight: 500;
	}
`;

const StyledArgumentCardWrapper = styled.article`
	margin: auto 0 auto 1rem;
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 1rem;
`;

const StyledWindow = styled.section`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(20px);
	animation: ${({ $animationtrigger }) =>
			$animationtrigger ? FadeOut : FadeIn}
		0.4s ease;
`;

const StyledInformationCard = styled.article`
	padding: 1rem;
	position: fixed;
	top: 38%;
	transform: translate(-0%, -38%);
	border-radius: 9px;
	background-color: var(--color-third);
	width: 80%;
	left: 10%;
	right: 10%;
	margin: auto;
	z-index: 1;
`;