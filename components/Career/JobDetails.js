import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import OutsideClickHandler from "react-outside-click-handler";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JobData } from "./JobData";

export default function JobDetails({
	headline,
	introduction,
	onClick,
	value,
	animationTrigger,
	tasks,
	ourOffer,
	qualification,
	onClickApply,
}) {


	return (
		<>
			<StyledWindow $animationtrigger={animationTrigger}>
				<OutsideClickHandler
					onOutsideClick={() => {
						onClick();
					}}
				>
					<section>
						<StyledIcon icon={faCircleXmark} onClick={onClick} />
						<StyledInformationCard>
							<StyledHeadlineAndJobCardSectionWrapper>
								<StyledHeadlineThird>{headline}</StyledHeadlineThird>
								<article>
									<Greenbutton onClickApply={onClickApply}>
										Jetzt Bewerben
									</Greenbutton>
								</article>
							</StyledHeadlineAndJobCardSectionWrapper>
							<StyledIntroText>{introduction}</StyledIntroText>

							<article>
								<div>
									<StyledHeadlineFourth>Unser Angebot</StyledHeadlineFourth>
									<ul>
										{ourOffer.map((offer) => (
											<li key={offer}>{offer}</li>
										))}
									</ul>
								</div>
								<div>
									<StyledHeadlineFourth>Deine Aufgaben</StyledHeadlineFourth>
									<ul>
										{tasks.map((task) => (
											<li key={task}>{task}</li>
										))}
									</ul>
								</div>
								<div>
									<StyledHeadlineFourth>Dein Profil</StyledHeadlineFourth>
									<ul>
										{qualification.map((experience) => (
											<li key={experience}>{experience}</li>
										))}
									</ul>
								</div>
							</article>
						</StyledInformationCard>
						<StyledImageWrapper>
							<Greenbutton onClick={onClick} $value={value}>
								Schließen
							</Greenbutton>
						</StyledImageWrapper>
					</section>
				</OutsideClickHandler>
			</StyledWindow>
		</>
	);
}

const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}

`;

const FadeOut = keyframes`
0% { opacity: 1;}
100% { opacity: 0; }
`;

const StyledWindow = styled.section`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(20px);
	animation: ${({ $animationtrigger }) =>
			$animationtrigger ? FadeOut : FadeIn}
		0.4s ease;
`;

const StyledHeadlineAndJobCardSectionWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	position: sticky;
	top: -1rem;
	background-color: var(--color-third);
`;

const StyledIcon = styled(FontAwesomeIcon)`
	width: 2rem;
	height: 2rem;
	position: absolute;
	top: 7%;
	right: 4%;
	margin: auto;

	z-index: 2;

	color: red;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	@media (min-width: 1100px) {
		display: none;

		top: 9%;
		right: 10%;
		transform: translate(50%, -50%);
		color: red;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}
`;

const StyledIntroText = styled.h4`
	font-size: var(--font-size-text);
	color: var(--color-fourth);
	padding-left: 10%;
	padding-right: 10%;
	font-weight: bold;
	margin-bottom: 5%;
`;

const StyledInformationCard = styled.article`
	padding: 0 1rem 1rem 1rem;
	position: absolute;
	top: 40%;
	transform: translate(-0%, -40%);
	border-radius: 9px;
	background-color: var(--color-third);
	width: 90%;
	max-width: 1000px;
	left: 5%;
	right: 5%;
	margin: auto;
	z-index: 1;
	max-height: 80%;
	overflow-y: scroll;
`;

const StyledImageWrapper = styled.article`
	position: fixed;
	bottom: 2rem;
	right: 3rem;
`;

const StyledHeadlineThird = styled.h3`
	position: sticky;
	top: -5px;
	padding: 1rem;
	background-color: var(--color-third);
	text-decoration: underline;
	text-decoration-color: var(--color-primary);
	color: var(--color-fourth);
	text-align: center;
	font-weight: bold;
`;

const StyledHeadlineFourth = styled.h4`
	color: var(--color-fourth);
`;
