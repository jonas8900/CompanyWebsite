import Image from "next/image";
import styled from "styled-components";
import Greenbutton from "../Buttons/GreenButton";

export default function ProductCard({
	src,
	alt,
	headline,
	infotext,
	children,
	onClick,
}) {
	return (
		<StyledCardWrapper>
			<StyledImageContainer>
				<StyledRandomImage
					src={src}
					alt={alt}
					width={1920}
					height={1080}
					sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
					layout="responsive"
					rel="preload"
					unoptimized
				/>
			</StyledImageContainer>
			<StyledInfoWrapper>
				<StyledSubHeadline>{headline}</StyledSubHeadline>
				<StyledParagraph>{infotext}</StyledParagraph>
			</StyledInfoWrapper>
			<StyledButtonWrapper>
				<Greenbutton margin={-2} onClick={onClick} aria-hidden="true">
					{children}
				</Greenbutton>
			</StyledButtonWrapper>
		</StyledCardWrapper>
	);
}

const StyledRandomImage = styled(Image)`
	width: 100%;
	height: 100%!important;
	object-fit: cover;
    border-radius: 8px; // Angepasst
`;


const StyledInfoWrapper = styled.article`
	padding: 1rem; // Angepasst
	@media (min-width: 1025px) {
		margin-top: -1rem; // Beibehalten
	}
	@media (min-width: 1600px) {
		margin-top: 0rem; // Beibehalten
	}
`;

const StyledImageContainer = styled.section`
	width: 100%;
	height: 200px; 
	overflow: hidden;
    border-radius: 8px; // Angepasst

	@media (min-width: 1025px) {
		height: 250px;
	}
	@media (min-width: 1450px) {
		height: 280px;
	}
	@media (min-width: 1800px) {
		height: 300px;
	}
`;


const StyledParagraph = styled.p`
	margin-bottom: 2rem;
	@media (min-width: 1025px) {
		min-height: 4rem; // Beibehalten
	}
	@media (min-width: 1200px) {
		margin-bottom: 2rem; // Beibehalten
	}
`;

const StyledCardWrapper = styled.section`
	display: flex;
	flex-direction: column;
	background-color: var(--color-third);
	border-radius: 10px; // Angepasst
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // Angepasst
	position: relative;
    overflow: hidden; // Für border-radius des Bildes

    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; // Hover-Effekt

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }


	@media (min-width: 1025px) {
		min-height: 25rem;
		height: auto; // Angepasst, damit der Inhalt passt
		max-width: 100%;
	}
	@media (min-width: 1250px) {
		min-height: 432px;
		height: auto; // Angepasst
	}
	@media (min-width: 1400px) {
		min-height: 480px;
		height: auto; // Angepasst
	}
`;

const StyledButtonWrapper = styled.article`
	position: absolute;
	bottom: 1rem; // Angepasst
	right: 1rem; // Angepasst
`;

const StyledSubHeadline = styled.h2`
	font-size: var(--font-size-title);
	font-weight: 700;
`;