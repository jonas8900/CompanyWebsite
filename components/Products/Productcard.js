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
					sizes="(max-width: 768px) 250px, (max-width: 1024px) 500px, (max-width: 1400px) 1080px"
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
	height: 100%;
`;

const StyledInfoWrapper = styled.article`
	margin-left: 1rem;
	margin-right: 0.5rem;
	@media (min-width: 1025px) {
		margin-top: -1rem;
	}
	@media (min-width: 1600px) {
		margin-top: 0rem;
	}
`;

const StyledImageContainer = styled.section`
	width: 100%;
	height: 70%;
	overflow: hidden;

	@media (min-width: 1025px) {
		height: 60%;
	}
	@media (min-width: 1450px) {
		height: 65%;
	}
	@media (min-width: 1800px) {
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
		width: 100%;
		box-shadow: 5px 8px 12px -4px rgba(0, 0, 0, 0.2);
		min-height: 25rem;
		height: 25rem;
		max-width: 100%;
	}
	@media (min-width: 1250px) {
		min-height: 27rem;
		height: 27rem;
	}
	@media (min-width: 1400px) {
		min-height: 30rem;
		height: 30rem;
	}
	@media (min-width: 1600px) {
		min-height: 30rem;
		height: 32rem;
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
