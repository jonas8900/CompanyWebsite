import Image from "next/image";
import styled from "styled-components";

export default function ProductCard({
	src,
	alt,
	headline,
	infotext,
	children,
}) {
	return (
		<StyledCardWrapper>
			<StyledImageContainer>
				<StyledRandomImage
					src={src}
					width={250}
					height={141}
					alt={alt}
					sizes="(max-width: 600px) 400px, (max-width: 1024px) 1080px"
				/>
			</StyledImageContainer>
			<StyledInfoWrapper>
				<StyledSubHeadline>{headline}</StyledSubHeadline>
				<StyledParagraph>{infotext}</StyledParagraph>
			</StyledInfoWrapper>
			{children}
		</StyledCardWrapper>
	);
}

const StyledRandomImage = styled(Image)`
	height: 100%;
	width: 100%;
	top: 0;
	object-fit: cover;
`;

const StyledInfoWrapper = styled.article`
	margin-left: 1rem;
	margin-right: 0.5rem;
`;

const StyledImageContainer = styled.section`
	width: 100%;
`;

const StyledParagraph = styled.p`
	@media (min-width: 1025px) {
		min-height: 4rem;
	}
`;

const StyledCardWrapper = styled.section`
	background-color: var(--color-third);
	width: 70%;
	margin: auto;
	margin-top: 2rem;
	margin-bottom: 3rem;
`;

const StyledSubHeadline = styled.h2`
	font-size: var(--font-size-title);
	font-weight: 700;
`;
