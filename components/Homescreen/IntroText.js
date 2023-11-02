import styled, { keyframes } from "styled-components";
import GreenButton from "../Buttons/GreenButton";
import { useEffect, useState } from "react";

export default function Introtext() {
	const [windowAlert, setWindowAlert] = useState(0);


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
						sind wir Ihr zuverlässiger Partner im Bereich Fördertechnik. Unsere
						Leistungen umfassen die Herstellung von Krananlagen, Service und
						Reparaturen, Mängelbeseitigungen, Prüfungen sowie die Reparatur und
						Überholung sämtlicher Kranantriebe, unabhängig von ihrem Alter und
						Hersteller. Wir sind Spezialisten in der Planung, Konstruktion und
						Herstellung von Kranen und Sonderhebezeugen. Darüber hinaus bieten
						wir Kranprüfungen gemäß der UVV BGV an und sind Experten in
						Spezialmontagen. Unser Ziel ist es, maßgeschneiderte Lösungen für
						jeden Kunden anzubieten und somit langfristige Partnerschaften
						aufzubauen. Vertrauen Sie auf unsere Erfahrung und unser Engagement.
					</StyledTextParagraph>
					<StyledArgumentCardWrapper>
						<GreenButton>
							<i>schnell</i>
						</GreenButton>
						
						<GreenButton>
							<b>fair</b>
						</GreenButton>
			
						<GreenButton>zuverlässig</GreenButton>
					</StyledArgumentCardWrapper>
				</StyledInfoSection>
			</StyledIntroTextWrapper>
		</>
	);
}

const StyledIntroTextWrapper = styled.main`
	margin: auto 5% auto 10%;
	margin-top: 60%;
	@media (max-width: 350px) {
		margin-top: 80%;
	}
	@media (min-width: 450px) {
		margin-top: 30%;
	}
	@media (min-width: 1100px) {
		margin: auto;
		margin-top: 4%;
		padding: 1rem;
		box-shadow: 5px 8px 12px -4px rgba(0, 0, 0, 0.2);
		width: 70%;
		border-left: 1px solid rgba(0, 0, 0, 0.1);
	}
	@media (min-width: 1800px) {
		margin-top: 0;
	}
`;

const StyledHeadline = styled.h1`
	text-align: center;
	text-shadow: 1px 3px 1px #eee;
	text-decoration: underline;
	text-decoration-color: var(--color-secondary);
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
