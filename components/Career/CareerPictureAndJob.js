import Image from "next/image";
import styled, { keyframes } from "styled-components";
import JobCard from "./JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { JobData } from "./JobData";
import { useEffect, useState } from "react";

export default function CareerPictureAndJob({ device }) {
	const [randomJobObject, setRandomJobObject] = useState(JobData[0]);
	const [numberForRandomJob, setNumberForRandomJob] = useState(0);
	const numberForRandomSecondJob =
		JobData[(numberForRandomJob + 1) % JobData.length];

	useEffect(() => {
		const timeOutForCount = setInterval(() => {
			setNumberForRandomJob((increaseCount) => {
				if (increaseCount >= JobData.length - 1) {
					return 0;
				} else {
					return increaseCount + 1;
				}
			});
		}, 10000);
		return () => clearInterval(timeOutForCount);
	}, []);

	useEffect(() => {
		setRandomJobObject(JobData[numberForRandomJob]);
	}, [numberForRandomJob]);

	function handleClickLeftButtonToChangePicture() {
		setNumberForRandomJob(
			(numberForRandomJob - 1 + JobData.length) % JobData.length
		);
	}
	function handleClickRightButtonToChangePicture() {
		setNumberForRandomJob((numberForRandomJob + 1) % JobData.length);
	}
	return (
		<>
			<StyledHeadlineAndJobCardSectionWrapper>
				<StyledCareerIntroSectionImage>
					<StyledPageHeadline>Karriere</StyledPageHeadline>
					<StyledImage
						src="/KarriereBild.jpg"
						width={500}
						height={500}
						sizes="100%"
						alt="Das Bild zeigt einen Mann am Schreibtisch mit einem Helm und einem Anzug"
						unoptimized
					/>
				</StyledCareerIntroSectionImage>
				<StyledCareerIntroSectionCard>
					<StyledJobArticle>
						<StyledIconLeft
							icon={faChevronLeft}
							onClick={handleClickLeftButtonToChangePicture}
						/>
						<StyledIconRigh
							icon={faChevronRight}
							onClick={handleClickRightButtonToChangePicture}
						/>

						{device ? (
							<StyledJobCardSection>
								<JobCard
									headline={"Wir suchen Verstärkung!"}
									infotext={"wir freuen uns darauf Sie kennenzulernen!"}
									jobtitle={randomJobObject.jobTitle}
									numberForRandomJob={numberForRandomJob}
								/>
								<JobCard
									headline={"Wir suchen Verstärkung!"}
									infotext={"wir freuen uns darauf Sie kennenzulernen!"}
									jobtitle={numberForRandomSecondJob.jobTitle}
									numberForRandomJob={numberForRandomJob + 1}
								/>
							</StyledJobCardSection>
						) : (
							<JobCard
								headline={"Wir suchen Verstärkung!"}
								infotext={"wir freuen uns darauf Sie kennenzulernen!"}
								jobtitle={randomJobObject.jobTitle}
								numberForRandomJob={numberForRandomJob}
							/>
						)}
					</StyledJobArticle>
				</StyledCareerIntroSectionCard>
			</StyledHeadlineAndJobCardSectionWrapper>
		</>
	);
}

const StyledHeadlineAndJobCardSectionWrapper = styled.section`
	background-color: #2c2c2c;
	margin-top: 0rem;
	margin-bottom: 18rem;
	width: 100%;
	height: auto;
	@media (min-width: 1025px) {
		margin-bottom: 33%;
	}
	@media (min-width: 1350px) {
		margin-bottom: 23%;
	}
`;

const StyledCareerIntroSectionImage = styled.section`
	position: relative;
	width: 100%;
	background-color: #2c2c2c;
`;

const StyledCareerIntroSectionCard = styled.section`
	position: absolute;
	width: 80%;
	left: 10%;
	right: 10%;
	margin: auto;
	margin-top: -1rem;
`;

const StyledJobCardSection = styled.section`
	display: flex;
	gap: 40px;
`;

const StyledJobArticle = styled.article`
	position: relative;

	@media (min-width: 768px) {
		width: 60%;
		margin: 0 auto;
	}
	@media (min-width: 1025px) {
		width: 90%;
		margin: 0 auto;
	}
	@media (min-width: 1400px) {
		width: 70%;
		margin: 0 auto;
	}
`;

const StyledPageHeadline = styled.h1`
	position: absolute;
	left: 10%;
	color: White;
	z-index: 1;
	font-size: 2rem;
	font-weight: 700;
	@media (min-width: 768px) {
	}
`;

const StyledIconLeft = styled(FontAwesomeIcon)`
	position: absolute;
	color: white;
	left: -1rem;
	top: 50%;
	transform: translateY(-50%);
	width: 2rem;
	height: 2rem;
	z-index: 5;
`;

const StyledIconRigh = styled(FontAwesomeIcon)`
	position: absolute;
	color: white;
	right: -1rem;
	top: 50%;
	transform: translateY(-50%);
	width: 2rem;
	height: 2rem;
	z-index: 5;
`;

const StyledImage = styled(Image)`
	width: 100%;
	height: 20rem;
	object-fit: cover;
	filter: brightness(0.55);
`;
