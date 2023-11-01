import Image from "next/image";
import styled from "styled-components";
import JobCard from "./JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { JobData } from "./JobData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import JobDetails from "./JobDetails";
import OutsideClickHandler from "react-outside-click-handler";

export default function CareerPictureAndJob({ scrollY }) {
	const [seeMoreClicked, setSeeMoreClicked] = useState(false);
	const [activejob, setActiveJob] = useState({});

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (seeMoreClicked === true) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		}
	}, [seeMoreClicked]);

	function handleSeeMoreButton(id) {
		setSeeMoreClicked(!seeMoreClicked);
		setActiveJob(Number(id) - 1);
	}

	function handleClose() {
		setSeeMoreClicked(false);
	}
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1025 },
			items: 2,
			slidesToSlide: 1,
			partialVisibilityGutter: 40,
		},

		mobile: {
			breakpoint: { max: 1024, min: 0 },
			items: 1,
			slidesToSlide: 1,
			partialVisibilityGutter: 40,
		},
	};

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
						<StyledMainDiv>
							<Carousel
								responsive={responsive}
								partialVisibilityGutter={true}
								infinite={true}
								autoPlay={true}
								autoPlaySpeed={8000}
							>
								{JobData.map((job) => (
									<StyledDiv key={job.id}>
										<JobCard
											headline={"Wir suchen Verstärkung!"}
											infotext={"wir freuen uns darauf Sie kennenzulernen!"}
											qualification={job.qualification}
											jobtitle={job.jobTitle}
											onClick={() => handleSeeMoreButton(job.id)}
										>
											Mehr Erfahren ...
										</JobCard>
									</StyledDiv>
								))}
							</Carousel>
						</StyledMainDiv>
					</StyledJobArticle>
				</StyledCareerIntroSectionCard>
				{seeMoreClicked && (
					<>
						<JobDetails
							onClick={handleClose}
							headline={JobData[activejob].jobTitle}
							introduction={JobData[activejob].introduction}
							ourOffer={JobData[activejob].whatWeOffer}
							tasks={JobData[activejob].tasks}
							qualification={JobData[activejob].qualification}
							clickHandler={() => handleClose()}
						/>
					</>
				)}
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
		margin-bottom: 20%;
	}
`;

const StyledDiv = styled.div`
	padding-bottom: 10px;

	@media (min-width: 1025px) {
		padding-right: 4rem;
		padding-left: 4rem;
	}
`;

const StyledMainDiv = styled.div`
	width: 90%;
	margin: 0 auto;

	@media (min-width: 1025px) {
		width: 100%;
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

const StyledJobArticle = styled.article`
	position: relative;

	@media (min-width: 768px) {
		width: 100%;

		margin: 0 auto;
	}
	@media (min-width: 1025px) {
		width: 90%;
		margin: 0 auto;
	}
	@media (min-width: 1800px) {
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
