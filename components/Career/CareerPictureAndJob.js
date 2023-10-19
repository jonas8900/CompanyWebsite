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

export default function CareerPictureAndJob({}) {
	const [randomJobObject, setRandomJobObject] = useState(JobData[0]);
	const [numberForRandomJob, setNumberForRandomJob] = useState(0);

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
		if (numberForRandomJob === 1) {
			setNumberForRandomJob(5);
		} else {
			setNumberForRandomJob(numberForRandomJob - 1);
		}
	}
	function handleClickRightButtonToChangePicture() {
		if (numberForRandomJob === 5) {
			setNumberForRandomJob(1);
		} else {
			setNumberForRandomJob(numberForRandomJob + 1);
		}
	}

	return (
		<>
			<StyledHeadlineAndJobCardSectionWrapper>
				<StyledCareerIntroSectionImage>
					<StyledPageHeadline>Karriere</StyledPageHeadline>
					<StyledImage
						src="/Karriere.jpg"
						width={500}
						height={500}
						alt="Das Bild zeigt einen Mann am Schreibtisch mit einem Helm und einem Anzug"
					/>
				</StyledCareerIntroSectionImage>
				<StyledCareerIntroSectionCard>
					<StyledIconLeft
						icon={faChevronLeft}
						onClick={handleClickLeftButtonToChangePicture}
					/>
					<StyledIconRigh
						icon={faChevronRight}
						onClick={handleClickRightButtonToChangePicture}
					/>
					<StyledJobArticle>
						<JobCard
							headline={"Wir suchen Verstärkung!"}
							infotext={"wir freuen uns darauf Sie kennenzulernen!"}
							jobtitle={randomJobObject.jobTitle}
							numberForRandomJob={numberForRandomJob}
						/>
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

const StyledJobArticle = styled.article``;

const StyledPageHeadline = styled.h1`
	position: absolute;
	color: white;
	margin: 1rem;
	z-index: 1;
	font-size: var(--font-size-headlines);
	font-weight: 600;
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
	height: auto;
`;
