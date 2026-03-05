import Image from "next/image";
import styled from "styled-components";
import Greenbutton from "../Buttons/GreenButton";

export default function ProductCard({
	src,
	alt,
	headline,
	subheadline,
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
					sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
					layout="responsive"
					rel="preload"
					unoptimized
				/>
			</StyledImageContainer>
			<StyledContentWrapper>
				<StyledInfoWrapper>
					<StyledHeadline>{headline}</StyledHeadline>
					{subheadline && <StyledSubheadline>{subheadline}</StyledSubheadline>}
					<StyledParagraph>{infotext}</StyledParagraph>
				</StyledInfoWrapper>
				<StyledButtonWrapper>
					<Greenbutton onClick={onClick} aria-hidden="true">
						{children}
					</Greenbutton>
				</StyledButtonWrapper>
			</StyledContentWrapper>
		</StyledCardWrapper>
	);
}

const StyledRandomImage = styled(Image)`
	width: 100%;
	height: 100% !important;
	object-fit: cover;
	transition: transform 0.4s ease;
`;

const StyledContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
	padding: 1.5rem;
	padding-bottom: 1.25rem;
`;

const StyledInfoWrapper = styled.article`
	flex: 1;
`;

const StyledImageContainer = styled.section`
	width: 100%;
	height: 240px;
	overflow: hidden;
	position: relative;

	@media (min-width: 768px) {
		height: 280px;
	}

	@media (min-width: 1024px) {
		height: 400px;
	}
`;

const StyledHeadline = styled.h2`
	font-size: 1.25rem;
	font-weight: 700;
	color: var(--color-fourth);
	margin-bottom: 0.25rem;
	line-height: 1.3;

	@media (min-width: 768px) {
		font-size: 1.35rem;
	}
`;

const StyledSubheadline = styled.h3`
	font-size: 1rem;
	font-weight: 500;
	color: var(--color-secondary);
	margin-bottom: 0.75rem;
	line-height: 1.4;
`;

const StyledParagraph = styled.p`
	font-size: var(--font-size-text);
	line-height: 1.6;
	color: var(--color-fourth);
	margin-bottom: 1.5rem;
`;

const StyledCardWrapper = styled.section`
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 12px;
	overflow: hidden;
	border: 1px solid #e5e7eb;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	height: 100%;

	&:hover {
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
		border-color: var(--color-primary);

	}

	@media (min-width: 1024px) {
		min-height: 550px;
		min-width:100%;
	}
`;

const StyledButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: auto;
`;