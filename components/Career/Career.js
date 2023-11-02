import styled, { keyframes } from "styled-components";
import CompanyAdvantages from "./CompanyAdvantages";
import CareerPictureAndJob from "./CareerPictureAndJob";
import Image from "next/image";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import Greenbutton from "../Buttons/GreenButton";
import LinkToPage from "next/link";
import { JobData } from "./JobData";
import { Link } from "react-scroll/modules";
import JobDetails from "./JobDetails";
import Head from "next/head";

export default function Career({ device }) {
	const [showMore, setShowMore] = useState(false);
	const [seeMoreOnSingleJob, setSeeMoreOnSingleJob] = useState(false);
	const [activejob, setActiveJob] = useState({});

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (seeMoreOnSingleJob === true) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		}
	}, [seeMoreOnSingleJob]);

	function handleSeeMoreButton(id) {
		setSeeMoreOnSingleJob(!seeMoreOnSingleJob);
		setActiveJob(Number(id) - 1);
	}

	function handleClose() {
		setSeeMoreOnSingleJob(false);
	}

	function handleClickShowMore() {
		setShowMore(!showMore);
	}

	return (
		<>
			<Head>
				<title>Karriere bei Elektromaschinenbau Schulze</title>
				<meta
					name="description"
					content="Entdecken Sie berufliche Möglichkeiten bei Elektromaschinenbau Schulze. Wir bieten Karrierechancen in der Krananlagen-Industrie für engagierte Fachleute. Werden Sie Teil unseres Teams!"
				/>
			</Head>
			<StyledMainSection id="career">
				<CareerPictureAndJob device={device} />
				<StyledCareerSection>
					<CompanyAdvantages />
					<StyledImageWrapper>
						<LinkToPage href="https://www.kununu.com/de/elektromaschinenbau-schulze?utm_source=widget&utm_campaign=widget_selfservice_scorelarge">
							<StyledImage
								src="https://www.kununu.com/de/partner/KlRWCFBUUQ%3D%3D/self-service-button?button-type=3"
								width="150"
								height="100"
								alt="kununu-score"
								unoptimized
							/>
						</LinkToPage>
					</StyledImageWrapper>
				</StyledCareerSection>
				<StyledJobCardWrapper id="job-ads">
					{device ? (
						<>
							{showMore === false && (
								<>
									<StyledSubHeadline>Stellenanzeigen</StyledSubHeadline>
									{/* i want to show the first job in the jobdata */}
									<StyledSectionForTwoJobCards>
										<JobCard
											headline={"Wir suchen Verstärkung!"}
											infotext={"wir freuen uns darauf Sie kennenzulernen!"}
											jobtitle={JobData[0].jobTitle}
											onClick={() => handleSeeMoreButton(JobData[0].id)}
										></JobCard>
										<JobCard
											headline={"Wir suchen Verstärkung!"}
											infotext={"wir freuen uns darauf Sie kennenzulernen!"}
											jobtitle={JobData[1].jobTitle}
											onClick={() => handleSeeMoreButton(JobData[1].id)}
										></JobCard>
									</StyledSectionForTwoJobCards>
									<StyledShowMoreSection>
										<Greenbutton onClick={handleClickShowMore}>
											alle Jobs anzeigen
										</Greenbutton>
									</StyledShowMoreSection>

									<StyledBlurSection>
										<StyledSectionForTwoJobCards>
											<JobCard
												headline={"Wir suchen Verstärkung!"}
												infotext={"wir freuen uns darauf Sie kennenzulernen!"}
												jobtitle={"Mechatroniker"}
											></JobCard>
											<JobCard
												headline={"Wir suchen Verstärkung!"}
												infotext={"wir freuen uns darauf Sie kennenzulernen!"}
												jobtitle={"Elektroniker für Betriebstechnik"}
											></JobCard>
										</StyledSectionForTwoJobCards>
										<StyledSectionForTwoJobCards>
											<JobCard
												headline={"Wir suchen Verstärkung!"}
												infotext={"wir freuen uns darauf Sie kennenzulernen!"}
												jobtitle={"Mechatroniker"}
											></JobCard>
											<JobCard
												headline={"Wir suchen Verstärkung!"}
												infotext={"wir freuen uns darauf Sie kennenzulernen!"}
												jobtitle={"Elektroniker für Betriebstechnik"}
											></JobCard>
										</StyledSectionForTwoJobCards>
									</StyledBlurSection>
								</>
							)}
							{showMore === true && (
								<>
									<StyledSubHeadline>Stellenanzeigen</StyledSubHeadline>
									<StyledSectionForAllJobs>
										{JobData.map((job) => (
											<JobCard
												key={job.id}
												headline={"Wir suchen Verstärkung!"}
												infotext={"wir freuen uns darauf Sie kennenzulernen!"}
												jobtitle={job.jobTitle}
												onClick={() => handleSeeMoreButton(job.id)}
											></JobCard>
										))}
									</StyledSectionForAllJobs>
									<StyledShowMoreSection>
										<Link
											to="job-ads"
											spy={true}
											smooth={false}
											offset={-65}
											duration={350}
										>
											<Greenbutton onClick={handleClickShowMore}>
												weniger anzeigen
											</Greenbutton>
										</Link>
									</StyledShowMoreSection>
								</>
							)}
						</>
					) : (
						<>
							{showMore === false && (
								<>
									<StyledSubHeadline>Stellenanzeigen</StyledSubHeadline>
									{/* i want to show the first job in the jobdata */}
									<JobCard
										headline={"Wir suchen Verstärkung!"}
										infotext={"wir freuen uns darauf Sie kennenzulernen!"}
										jobtitle={JobData[0].jobTitle}
										onClick={() => handleSeeMoreButton(JobData[0].id)}
									></JobCard>
									<StyledShowMoreSection>
										<Greenbutton onClick={handleClickShowMore}>
											alle Jobs anzeigen
										</Greenbutton>
									</StyledShowMoreSection>
									<StyledBlurSection>
										<JobCard
											headline={"Wir suchen Verstärkung!"}
											infotext={"wir freuen uns darauf Sie kennenzulernen!"}
											jobtitle={"Mechatroniker"}
										></JobCard>
										<JobCard
											headline={"Wir suchen Verstärkung!"}
											infotext={"wir freuen uns darauf Sie kennenzulernen!"}
											jobtitle={"Elektroniker für Betriebstechnik"}
										></JobCard>
									</StyledBlurSection>
								</>
							)}
							{showMore === true && (
								<>
									<StyledSubHeadline>Stellenanzeigen</StyledSubHeadline>
									{JobData.map((job) => (
										<JobCard
											key={job.id}
											headline={"Wir suchen Verstärkung!"}
											infotext={"wir freuen uns darauf Sie kennenzulernen!"}
											jobtitle={job.jobTitle}
											onClick={() => handleSeeMoreButton(job.id)}
										></JobCard>
									))}
									<StyledShowMoreSection>
										<Link
											to="job-ads"
											spy={true}
											smooth={false}
											offset={-65}
											duration={350}
										>
											<Greenbutton onClick={handleClickShowMore}>
												weniger anzeigen
											</Greenbutton>
										</Link>
									</StyledShowMoreSection>
								</>
							)}
						</>
					)}
				</StyledJobCardWrapper>
				{seeMoreOnSingleJob && (
					<>
						<JobDetails
							onClick={handleClose}
							headline={JobData[activejob].jobTitle}
							introduction={JobData[activejob].introduction}
							ourOffer={JobData[activejob].whatWeOffer}
							tasks={JobData[activejob].tasks}
							qualification={JobData[activejob].qualification}
						/>
					</>
				)}
			</StyledMainSection>
		</>
	);
}

const FadeUp = keyframes`
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
`;

const StyledMainSection = styled.main`
	background-color: #2c2c2c;
	width: 100%;
	height: 100%;
	margin-bottom: 3rem;
`;

const StyledSubHeadline = styled.h2`
	text-align: left;
	color: white;
	font-size: var(--font-size-headlines);
	text-decoration: underline;
`;

const StyledImage = styled(Image)`
	cursor: pointer;
	width: 14rem;
	height: auto;
	max-width: 300px;
	max-height: 200px;

	&:hover {
		scale: 1.1;
		transition: all 0.2s ease-in-out;
		box-shadow: 0px 2px 10px 0px rgba(255, 255, 255, 0.75);
		border-radius: 9px;
	}

	&:active {
		scale: 1.1;
		transition: all 0.2s ease-in-out;
		box-shadow: 0px 2px 10px 0px rgba(255, 255, 255, 0.75);
	}

	&:not(:hover) {
		scale: 1;
		transition: all 0.2s ease-in-out;
		box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.75);
	}
`;

const StyledImageWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 5rem;
	margin-bottom: 5rem;
`;
const StyledSectionForTwoJobCards = styled.section`
	display: flex;
	margin-right: 2rem;
	margin-left: 2rem;
	gap: 3rem;
	row-gap: 5rem;
`;

const StyledSectionForAllJobs = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-right: 2rem;
	margin-left: 2rem;
	gap: 3rem;
	row-gap: 5rem;
`;

const StyledAnimation = styled.section`
	animation: ${({ $animationtrigger }) => $animationtrigger && FadeUp} 0.6s
		ease-in-out;
`;

const StyledCareerSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1025px) {
		display: flex;
		flex-direction: row;
		gap: 40px;
		justify-content: center;
	}
`;

const StyledJobCardWrapper = styled.section`
	display: grid;
	gap: 3rem;
	margin-left: 10%;
	margin-right: 10%;
	margin-bottom: 3rem;
	transition: all 0.5s ease-in-out;
	@media (min-width: 768px) {
		width: 50%;
		margin: 0 auto;
	}
	@media (min-width: 1025px) {
		width: 70%;
		margin: 0 auto;
		margin-top: 10%;
	}
`;

const StyledShowMoreSection = styled.section`
	display: flex;
	justify-content: flex-end;
`;

const StyledBlurSection = styled.section`
	display: grid;
	gap: 7rem;
	margin-bottom: 3rem;
	filter: blur(20px);
`;
