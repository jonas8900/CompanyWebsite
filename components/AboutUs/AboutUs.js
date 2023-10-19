import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import Image from "next/image";
import ImageFolder from "./ImageWindowFolder";
import { useEffect, useState } from "react";
import FullScreenImage from "./FullScreenImage";

export default function AboutUs() {
	const [showImageFolderCertificate, setShowImageFolderCertificate] =
		useState(false);
	const [showImageFolderGuidelines, setShowImageFolderGuidelines] =
		useState(false);
	const [showImageFullScreen, setShowImageFullScreen] = useState(false);
	const [imageIndex, setImageIndex] = useState(1);
	const [animationDone, setAnimationDone] = useState(true);

	function handleShowImageFolderCertificate() {
		setAnimationDone(!animationDone);
		setShowImageFolderCertificate(!showImageFolderCertificate);
	}

	function handleShowImageFolderGuideLines() {
		setAnimationDone(!animationDone);
		if (animationDone === false) {
			setTimeout(() => {
				setShowImageFolderGuidelines(!showImageFolderGuidelines);
			}, 400);
		} else {
			setShowImageFolderGuidelines(!showImageFolderGuidelines);
		}
	}

	function handleShowImageFullScreen(index) {
		setShowImageFullScreen(true);
		setImageIndex(index);
	}

	function handleCloseImage() {
		if (showImageFolderGuidelines) {
			setAnimationDone(false);
			setShowImageFullScreen(false);
			setShowImageFolderCertificate(false);
		} else {
			setAnimationDone(true);

			setTimeout(() => {
				setShowImageFullScreen(false);
				setShowImageFolderCertificate(false);
			}, 400);
		}
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (
				showImageFolderCertificate ||
				showImageFolderGuidelines ||
				showImageFullScreen === true
			) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		}
	}, [
		showImageFolderCertificate,
		showImageFolderGuidelines,
		showImageFullScreen,
	]);

	return (
		<>
			<StyledAboutUsSection id="about-us">
				<StyledHeadline>Wer sind wir?</StyledHeadline>
				<p>
					Wir sind ein Unternehmen mit <b>Sitz in Hannover</b>, welches sich
					vollumfänglich <b>auf Krananlagen spezialisiert</b> hat. <br />
					<br /> <b>Unsere Kernkompetenz</b> liegt in der{" "}
					<b>Herstellung und Fertigung von Krananlagen</b> nach Kundenvorgaben,
					sowie Modernisierung und Umbau von bestehenden Krananlagen, mit dem
					Ziel Ihnen einen Mehrwert zu bieten. Dabei agieren wir
					Herstellerunabhängig. <br />
					<br /> Wir unterstützen Sie von der <b>Planung</b> bis zur{" "}
					<b>Umsetzung</b> und gehen dabei immer auf Ihre Vorstellungen und
					Wünsche ein. <br />
					<br />
					Für uns gibt es keine Probleme, nur Herausforderungen, zu denen wir
					Lösungen finden!
				</p>
				<StyledSubHeadline>
					Weiterer Bestandteil unserer Dienstleistungen sind:
				</StyledSubHeadline>
				<StyledList>
					<li>
						Jährlich vorgeschriebenen Sicherheitsüberprüfung nach DGUV V52 und
						DGUV V54 an Krananlagen, Hebezeugen, Winden, Hub- und Zuggeräten.
						Herstellerunabhängig
					</li>
					<li>Elektrischen Prüfung nach DGUV V3.</li>
					<li>Wartung/Inspektion nach Herstellervorgaben.</li>
					<li>Störungsbeseitigung, Notfallreparaturen.</li>
					<li>Mängelbeseitigung nach durchgeführten UVV-Prüfungen.</li>
					<li>Beschaffung von Ersatzteilen.</li>
					<li>Kranführerschulungen.</li>
				</StyledList>
				<p>
					<b>Bei akutem Störungsfall</b> unserer Bestandskunden sind wir in der
					Lage,
					<b>schnell und flexibel</b> gemäß Ihren Vorgaben zu reagieren, um
					Ihren Produktionsablauf nicht zu unterbrechen. <br />
					<br />
					Zusammengefasst: wir können Ihnen jede Servicedienstleistung für Ihre
					Krananlagen bieten.
				</p>
			</StyledAboutUsSection>
			<StyledCertificateSection>
				<StyledCertificateArticleLeft>
					<StyledImage
						src="/Zertifikat.png"
						width={99}
						height={142}
						alt="Bild eines ISO - Zertifikates"
					/>
					<Greenbutton margin={-2} onClick={handleShowImageFolderCertificate}>
						Zertifikate
					</Greenbutton>
				</StyledCertificateArticleLeft>
				<StyledCertificateArticleRight>
					<StyledImage
						src="/Richtlinien/Richtlinien-1.png"
						width={99}
						height={142}
						alt="Bild eines ISO - Zertifikates"
					/>
					<Greenbutton margin={-2} onClick={handleShowImageFolderGuideLines}>
						Richtlinien
					</Greenbutton>
				</StyledCertificateArticleRight>
			</StyledCertificateSection>
			{showImageFolderCertificate && (
				<FullScreenImage
					src={`/Zertifikat.png`}
					alt="Zufälliges Bild einer Krananlage"
					width={100}
					height={200}
					onClick={handleCloseImage}
					animationTrigger={animationDone}
				/>
			)}
			{showImageFolderGuidelines && (
				<ImageFolder
					onClick={handleShowImageFolderGuideLines}
					animationTrigger={animationDone}
				>
					<StyledImageWrapper>
						{}
						<StyledImageDescription>
							<h2>Richtlinie 1</h2>
							<StyledImage
								src={`/Richtlinien/Richtlinien-1.png`}
								width={99}
								height={142}
								alt="Bild eines ISO - Zertifikates"
								onClick={() => handleShowImageFullScreen(1)}
							/>
						</StyledImageDescription>
						<StyledImageDescription>
							<h2>Richtlinie 2</h2>
							<StyledImage
								src="/Richtlinien/Richtlinien-2.png"
								width={99}
								height={142}
								alt="Bild eines ISO - Zertifikates"
								onClick={() => handleShowImageFullScreen(2)}
							/>
						</StyledImageDescription>
						<StyledImageDescription>
							<h2>Richtlinie 3</h2>
							<StyledImage
								src="/Richtlinien/Richtlinien-3.png"
								width={99}
								height={142}
								alt="Bild eines ISO - Zertifikates"
								onClick={() => handleShowImageFullScreen(3)}
							/>
						</StyledImageDescription>
					</StyledImageWrapper>
				</ImageFolder>
			)}
			{showImageFullScreen && showImageFolderGuidelines && (
				<FullScreenImage
					src={`/Richtlinien/Richtlinien-${imageIndex}.png`}
					alt="Zufälliges Bild einer Krananlage"
					width={100}
					height={200}
					onClick={handleCloseImage}
					animationTrigger={animationDone}
				/>
			)}
		</>
	);
}

const StyledAboutUsSection = styled.section`
	border-top: 1px solid grey;
	margin: 4rem 10% auto 10%;
`;

const StyledHeadline = styled.h1`
	width: 6.5rem;
	margin: 2rem 0 2rem 0;
	border-bottom: 2px solid var(--color-primary);
`;

const StyledImageDescription = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2rem 2rem 0 2rem;
`;

const StyledList = styled.ul`
	font-size: var(--font-size-text);
	font-weight: 400;
	display: grid;
	gap: 0.5rem;
	color: var(--color-fourth);
	padding: 1rem;
	margin-top: 0;
`;

const StyledSubHeadline = styled.h2`
	font-size: var(--font-size-text);
	font-weight: 400;
	color: var(--color-fourth);
`;

const StyledCertificateSection = styled.section`
	display: flex;
	margin: 2rem;
	justify-content: space-between;
`;

const StyledCertificateArticleLeft = styled.article`
	width: 100%;
	height: 100%;
	background-color: var(--color-third);
	display: grid;
	gap: 2rem;
	grid-area: 1 / 1 / 2 / 2;
	padding: 1rem;
	max-width: 420px;
	margin-right: 1rem;
	margin-bottom: 0;
`;

const StyledCertificateArticleRight = styled.article`
	width: 100%;
	height: 100%;
	background-color: var(--color-third);
	display: grid;
	gap: 2rem;
	margin-right: 0;
	grid-area: 1 / 2 / 2 / 3;
	padding: 1rem;
	max-width: 420px;
`;

const StyledImage = styled(Image)`
	margin: auto;
	object-fit: contain;
`;

const StyledImageWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: auto;
`;
