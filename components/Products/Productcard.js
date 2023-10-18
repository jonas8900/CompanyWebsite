import Image from "next/image";
import styled from "styled-components";
import Greenbutton from "../Buttons/GreenButton";

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
				<StyledRandomImage src={src} width={250} height={141} alt={alt} />
			</StyledImageContainer>
			<StyledInfoWrapper>
				<StyledSubHeadline>{headline}</StyledSubHeadline>
				<p>{infotext}</p>
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
