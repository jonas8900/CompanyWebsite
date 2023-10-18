import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";

export default function JobCard({
	headline,
	infotext,
	jobtitle,
	numberForRandomJob,
}) {
	return (
		<StyledCardWrapper
			key={numberForRandomJob}
			$numberforrandomjob={numberForRandomJob}
		>
			<StyledInfoWrapper>
				<StyledSubHeadline>{headline}</StyledSubHeadline>
				<StyledJobTitle>
					{jobtitle}
					<StyledParagraphForJobTitle>(m/w/d)</StyledParagraphForJobTitle>
				</StyledJobTitle>
				<StyledParagraphForInfo>{infotext}</StyledParagraphForInfo>
			</StyledInfoWrapper>
			<StyledButtonWrapper>
				<Greenbutton margin={-2}>Mehr erfahren ...</Greenbutton>
			</StyledButtonWrapper>
		</StyledCardWrapper>
	);
}

const FadeinLeft = keyframes`
      0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      }
      100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
      }`;

const StyledInfoWrapper = styled.article`
	margin: 1rem;
	background-color: var(--color-third);
	padding: 1rem 2rem 1rem 2rem;
	color: #2b363e;
`;

const StyledCardWrapper = styled.section`
	border: 1px solid transparent;
	background-color: #4e4e4e;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	animation: ${({ $numberforrandomjob }) =>
			$numberforrandomjob >= 1 && FadeinLeft}
		1s ease;
`;

const StyledButtonWrapper = styled.section`
	margin-left: 50%;
`;

const StyledSubHeadline = styled.h2`
	font-size: var(--font-size-text);
	color: black;
	font-weight: 400;
	margin-top: 0;
	width: 70%;
	margin: auto;
	border-bottom: 1px solid var(--color-primary);
	text-align: center;
`;

const StyledJobTitle = styled.h3`
	text-align: center;
	font-size: var(--font-size-text);
	font-weight: 700;
	margin-top: 1rem;
`;

const StyledParagraphForJobTitle = styled.p`
	font-size: var(--font-size-text);
	font-weight: 700;
	margin-top: 0;
`;

const StyledParagraphForInfo = styled.p`
	color: black;
	text-align: center;
	font-weight: 300;
	margin-top: 2rem;
	margin-bottom: 0;
`;
