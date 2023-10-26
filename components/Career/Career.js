import styled from "styled-components";
import CompanyAdvantages from "./CompanyAdvantages";
import CareerPictureAndJob from "./CareerPictureAndJob";
import Image from "next/image";
import JobCard from "./JobCard";
import { useState } from "react";
import Greenbutton from "../Buttons/GreenButton";
import Link from "next/link";
import { JobData } from "./JobData";

export default function Career() {
	const [showMore, setShowMore] = useState(false);

	function handleClickShowMore() {
		setShowMore(!showMore);
	}

	return (
		<StyledMainSection id="career">
			<CareerPictureAndJob />
			<StyledCareerSection>
				<CompanyAdvantages />
				<StyledImageWrapper>
					<Link href="https://www.kununu.com/de/elektromaschinenbau-schulze?utm_source=widget&utm_campaign=widget_selfservice_scorelarge">
						<StyledImage
							src="https://www.kununu.com/de/partner/KlRWCFBUUQ%3D%3D/self-service-button?button-type=3"
							width="150"
							height="100"
							alt="kununu-score"
							unoptimized
						/>
					</Link>
				</StyledImageWrapper>
			</StyledCareerSection>
			<StyledJobCardWrapper id="job-ads">
				{showMore === false && (
					<>
						<StyledSubHeadline>Stellenanzeigen</StyledSubHeadline>
						{/* i want to show the first job in the jobdata */}
						<JobCard
							headline={"Wir suchen Verstärkung!"}
							infotext={"wir freuen uns darauf Sie kennenzulernen!"}
							jobtitle={JobData[0].jobTitle}
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
						{JobData.map((job) => (
							<JobCard
								key={job.id}
								headline={"Wir suchen Verstärkung!"}
								infotext={"wir freuen uns darauf Sie kennenzulernen!"}
								jobtitle={job.jobTitle}
							></JobCard>
						))}
						<StyledShowMoreSection>
							<Greenbutton onClick={handleClickShowMore}>
								weniger anzeigen
							</Greenbutton>
						</StyledShowMoreSection>
					</>
				)}
			</StyledJobCardWrapper>
		</StyledMainSection>
	);
}

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
	@media (min-width: 1200px) {
		width: 45%;
		margin: 0 auto;
	}
`;

const StyledShowMoreSection = styled.section`
	display: flex;
	justify-content: flex-end;
`;

const StyledBlurSection = styled.section`
	display: grid;
	gap: 3rem;
	margin-bottom: 3rem;
	filter: blur(20px);
`;
