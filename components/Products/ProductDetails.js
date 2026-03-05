import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import OutsideClickHandler from "react-outside-click-handler";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ProductDetails({
	headline,
	infotext,
	onClick,
	value,
	animationTrigger,
	contactData,
	imageGalery,
}) {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Extrahiere image sources aus den Image-Komponenten
	const imageSources = imageGalery
		? imageGalery.map((img) => img.props.src)
		: [];

	const openLightbox = (index) => {
		setCurrentImageIndex(index);
		setLightboxOpen(true);
	};

	const closeLightbox = () => {
		setLightboxOpen(false);
	};

	const nextImage = (e) => {
		e.stopPropagation();
		setCurrentImageIndex((prev) => (prev + 1) % imageSources.length);
	};

	const prevImage = (e) => {
		e.stopPropagation();
		setCurrentImageIndex(
			(prev) => (prev - 1 + imageSources.length) % imageSources.length
		);
	};

	return (
		<>
			<StyledWindow $animationtrigger={animationTrigger}>
				<OutsideClickHandler
					disabled={lightboxOpen}
					onOutsideClick={() => {
						onClick();
					}}
				>
					<StyledInformationCard>
						<StyledCloseButton onClick={onClick} aria-label="Schließen">
							<X size={24} />
						</StyledCloseButton>

						<StyledHeader>
							<StyledHeadline>{headline}</StyledHeadline>
							<StyledIntroText>{infotext}</StyledIntroText>
						</StyledHeader>

						<StyledContentWrapper $imageCount={imageGalery !== null}>
							{console.log(imageGalery !== null)}
							<StyledMainContent>
								<StyledContactData>{contactData}</StyledContactData>
							</StyledMainContent>

							{imageGalery && imageGalery.length > 0 && (
								<StyledImageGallery>
									<StyledGalleryTitle>Impressionen</StyledGalleryTitle>
									<StyledGalleryGrid>
										{imageGalery.map((img, index) => (
											<StyledGalleryImage
												key={index}
												onClick={() => openLightbox(index)}
											>
												{img}
											</StyledGalleryImage>
										))}
									</StyledGalleryGrid>
								</StyledImageGallery>
							)}
						</StyledContentWrapper>
					</StyledInformationCard>
				</OutsideClickHandler>
				<StyledFloatingButtonWrapper>
					<Greenbutton onClick={onClick} $value={value}>
						Schließen
					</Greenbutton>
				</StyledFloatingButtonWrapper>
			</StyledWindow>

			{lightboxOpen && (
				<StyledLightbox onClick={closeLightbox}>
					<StyledLightboxClose onClick={closeLightbox}>
						<X size={32} />
					</StyledLightboxClose>

					{imageSources.length > 1 && (
						<>
							<StyledLightboxNav onClick={prevImage} $position="left">
								<ChevronLeft size={40} />
							</StyledLightboxNav>
							<StyledLightboxNav onClick={nextImage} $position="right">
								<ChevronRight size={40} />
							</StyledLightboxNav>
						</>
					)}

					<StyledLightboxImageWrapper onClick={(e) => e.stopPropagation()}>
						<Image
							src={imageSources[currentImageIndex]}
							alt="Vergrößertes Bild"
							width={1200}
							height={800}
							style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
						/>
						{imageSources.length > 1 && (
							<StyledImageCounter>
								{currentImageIndex + 1} / {imageSources.length}
							</StyledImageCounter>
						)}
					</StyledLightboxImageWrapper>
				</StyledLightbox>
			)}
		</>
	);
}

const FadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const FadeOut = keyframes`
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

const SlideIn = keyframes`
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const StyledWindow = styled.section`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(8px);
	animation: ${({ $animationtrigger }) => ($animationtrigger ? FadeOut : FadeIn)} 0.35s ease forwards;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	overflow-y: auto;
`;

const StyledInformationCard = styled.article`
	position: relative;
	background-color: white;
	border-radius: 16px;
	width: 100%;
	max-width: 1200px;
	max-height: 90vh;
	overflow-y: auto;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
	animation: ${SlideIn} 0.4s ease-out;

	/* Scrollbar Styling */
	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: var(--color-primary);
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: var(--color-secondary);
	}
`;

const StyledCloseButton = styled.button`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	background: white;
	border: 2px solid #e5e7eb;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s ease;
	z-index: 10;
	color: var(--color-fourth);

	&:hover {
		background-color: var(--color-primary);
		border-color: var(--color-secondary);
		color: var(--color-secondary);
		transform: rotate(90deg);
	}

	&:active {
		transform: rotate(90deg) scale(0.95);
	}
`;

const StyledHeader = styled.header`
	background: white;
	padding: 2rem 2rem 1.5rem;
	border-radius: 16px 16px 0 0;
	text-align: center;
	position: relative;
	border-bottom: 3px solid var(--color-primary);

	@media (min-width: 768px) {
		padding: 2.5rem 3rem 2rem;
	}
`;

const StyledHeadline = styled.h2`
	font-size: 1.75rem;
	font-weight: 700;
	color: var(--color-fourth);
	margin-bottom: 1rem;
	line-height: 1.2;

	@media (min-width: 768px) {
		font-size: 2.25rem;
	}
`;

const StyledIntroText = styled.p`
	font-size: 1.1rem;
	font-weight: 400;
	color: var(--color-fourth);
	max-width: 700px;
	margin: 0 auto;
	line-height: 1.6;
	opacity: 0.9;

	@media (min-width: 768px) {
		font-size: 1.2rem;
	}
`;

const StyledContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	padding: 2rem;

	@media (min-width: 768px) {
		padding: 3rem;
	}

	@media (min-width: 1024px) {
		grid-template-columns: ${({$imageCount}) => $imageCount ? '1fr 1fr' : '2fr' };
		gap: 3rem;
	}
`;

const StyledMainContent = styled.div`
	grid-column: 1 / -1;

	@media (min-width: 1024px) {
		grid-column: 1 / 2;
	}
`;

const StyledContactData = styled.article`
	font-size: var(--font-size-text);
	line-height: 1.8;
	color: var(--color-fourth);

	p {
		margin-bottom: 1.25rem;
	}

	ul, ol {
		margin: 1.5rem 0;
		padding-left: 1.5rem;
	}

	li {
		margin-bottom: 0.75rem;
		line-height: 1.6;
	}

	h3, h4 {
		color: var(--color-secondary);
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
`;

const StyledImageGallery = styled.aside`
	@media (min-width: 1024px) {
		position: sticky;
		top: 2rem;
		align-self: start;
	}
`;

const StyledGalleryTitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;
	color: var(--color-fourth);
	margin-bottom: 1.5rem;
	padding-bottom: 0.75rem;
	border-bottom: 2px solid var(--color-primary);
`;

const StyledGalleryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
`;

const StyledGalleryImage = styled.div`
	cursor: pointer;
	overflow: hidden;
	border-radius: 8px;
	border: 2px solid #e5e7eb;
	transition: all 0.3s ease;

	img {
		width: 100%;
		height: 150px;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	&:hover {
		border-color: var(--color-primary);
		transform: scale(1.05);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

		img {
			transform: scale(1.1);
		}
	}
`;

const StyledFloatingButtonWrapper = styled.div`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	z-index: 10000;

	@media (max-width: 767px) {
		bottom: 1.5rem;
		right: 1.5rem;
	}
`;

const StyledLightbox = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.95);
	z-index: 99999;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	animation: ${FadeIn} 0.3s ease;
`;

const StyledLightboxClose = styled.button`
	position: absolute;
	top: 2rem;
	right: 2rem;
	background: white;
	border: none;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s ease;
	color: var(--color-fourth);
	z-index: 100000;

	&:hover {
		background-color: var(--color-primary);
		transform: rotate(90deg);
	}

	@media (max-width: 767px) {
		top: 1rem;
		right: 1rem;
		width: 40px;
		height: 40px;
	}
`;

const StyledLightboxNav = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	${({ $position }) => ($position === "left" ? "left: 2rem;" : "right: 2rem;")}
	background: rgba(255, 255, 255, 0.9);
	border: none;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s ease;
	color: var(--color-fourth);

	&:hover {
		background-color: var(--color-primary);
		transform: translateY(-50%) scale(1.1);
	}

	@media (max-width: 767px) {
		${({ $position }) => ($position === "left" ? "left: 1rem;" : "right: 1rem;")}
		width: 45px;
		height: 45px;

		svg {
			width: 28px;
			height: 28px;
		}
	}
`;

const StyledLightboxImageWrapper = styled.div`
	max-width: 90%;
	max-height: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	img {
		max-width: 100%;
		max-height: 85vh;
		object-fit: contain;
		border-radius: 8px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
	}
`;

const StyledImageCounter = styled.div`
	color: white;
	font-size: 1.1rem;
	font-weight: 500;
	padding: 0.5rem 1rem;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 20px;
	margin-top: 1rem;
`;

