import Image from "next/image";
import styled, { keyframes } from "styled-components";
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
					width={1600}
					height={420}
					alt={alt}
					sizes="(max-width: 600px) 300px, (max-width: 1025px) 600px, (max-width: 1400px) 1080px"
					loading="lazy"
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
	height: 100%;
	max-height: 30rem;
	object-fit: cover;
`;

const StyledInfoWrapper = styled.article`
	margin-left: 1rem;
	margin-right: 0.5rem;
`;

const StyledImageContainer = styled.section`
	width: 100%;
	height: 70%;
	@media (min-width: 1025px) {
		height: 60%;
	}
	@media (min-width: 1450px) {
		height: 65%;
	}
	@media (min-width: 1600px) {
		height: 70%;
	}
`;

const StyledParagraph = styled.p`
	margin-bottom: 2rem;
	@media (min-width: 1025px) {
		margin-bottom: 6rem;
		min-height: 4rem;
	}
	@media (min-width: 1200px) {
		margin-bottom: 2rem;
	}
`;

const StyledCardWrapper = styled.section`
	background-color: var(--color-third);
	width: 70%;
	border: 1px solid transparent;
	margin: auto;
	margin-top: 2%;
	margin-bottom: 5%;
	position: relative;

	@media (min-width: 1025px) {
		min-height: 27rem;
		height: 27rem;
		width: 100%;
		box-shadow: 5px 8px 12px -4px rgba(0, 0, 0, 0.2);

		max-width: 100%;
	}
	@media (min-width: 1250px) {
		min-height: 32rem;
		height: 32rem;
	}
	@media (min-width: 1400px) {
		min-height: 30rem;
		height: 30rem;
	}
	@media (min-width: 1600px) {
		min-height: 40rem;
		height: 40rem;
	}
`;

const StyledButtonWrapper = styled.article`
	position: absolute;
	bottom: -0.6rem;
	right: 10%;
`;

const StyledSubHeadline = styled.h2`
	font-size: var(--font-size-title);
	font-weight: 700;
`;
