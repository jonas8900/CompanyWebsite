import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll/modules";

export default function JobInformationCardForAdmin({
	headline,
	qualificationText,
	taskText,
	jobtitle,
	numberForRandomJob,
	ourOfferText,
	infoText,
	onClickOnDeleteIcon,
	onClickEditIcon,
}) {
	return (
		<StyledCardWrapper
			key={numberForRandomJob}
			$numberforrandomjob={numberForRandomJob}
		>
			<StyledIcon icon={faTrashCan} onClick={onClickOnDeleteIcon} />
			<Link to="jobheadline" smooth={true} duration={500}>
				<StyledChangeIcon icon={faPenToSquare} onClick={onClickEditIcon} />
			</Link>
			<StyledInfoWrapper>
				<StyledSubHeadline>{headline}</StyledSubHeadline>
				<StyledJobTitle>
					{jobtitle}
					<StyledParagraphForJobTitle>(m/w/d)</StyledParagraphForJobTitle>
				</StyledJobTitle>
				<h2>Introtext:</h2>
				<StyledParagraphForInfo>{infoText}</StyledParagraphForInfo>
				<h2>Qualifikationen:</h2>
				<StyledUl>
					{qualificationText.map((qualification, index) => (
						<li key={index}>{qualification}</li>
					))}
				</StyledUl>
				<h2>Aufgaben:</h2>
				<StyledUl>
					{taskText.map((task, index) => (
						<li key={index}>{task}</li>
					))}
				</StyledUl>
				<h2>Was wir bieten: </h2>
				<StyledUl>
					{ourOfferText.map((offer, index) => (
						<li key={index}>{offer}</li>
					))}
				</StyledUl>
			</StyledInfoWrapper>
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
	@media (min-width: 1025px) {
	}
`;

const StyledUl = styled.ul`
	@media (min-width: 1025px) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;

const StyledChangeIcon = styled(FontAwesomeIcon)`
	color: orange;
	width: 2rem;
	height: 2rem;
	position: absolute;
	left: -1rem;
	top: -1rem;
	border: 1px solid transparent;
	transition: all 0.3s ease-in-out;
	&:hover {
		color: #fc2c03;
		cursor: pointer;
		scale: 1.1;
	}

	&:active {
		color: black;
	}
`;

const StyledIcon = styled(FontAwesomeIcon)`
	color: red;
	width: 2rem;
	height: 2rem;
	position: absolute;
	right: -1rem;
	top: -1rem;
	border: 1px solid transparent;
	transition: all 0.3s ease-in-out;
	&:hover {
		color: #fc2c03;
		cursor: pointer;
		scale: 1.1;
	}

	&:active {
		color: black;
	}
`;

const StyledCardWrapper = styled.section`
	border: 1px solid transparent;
	background-color: #4e4e4e;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	animation: ${({ $numberforrandomjob }) =>
			$numberforrandomjob >= 1 && FadeinLeft}
		1s ease;
	width: 100%;
	position: relative;
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
	text-decoration: underline;
	text-decoration-color: var(--color-secondary);
	text-align: center;
`;

const StyledJobTitle = styled.h3`
	text-align: center;
	font-size: var(--font-size-text);
	font-weight: 700;
	margin-top: 1rem;
	@media (min-width: 1025px) {
		min-height: 4rem;
	}
`;

const StyledParagraphForJobTitle = styled.p`
	font-size: var(--font-size-text);
	font-weight: 700;
	margin-top: 0;
`;

const StyledParagraphForInfo = styled.p`
	color: black;
	text-align: center;
	font-weight: 400;
	margin-top: 2rem;
	margin-bottom: 0;
`;
