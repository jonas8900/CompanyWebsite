import { faBars, faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import { Link } from "react-scroll/modules";
import MediaQuery from "react-responsive";

export default function Navigation() {
	const [menuClicked, setMenuClicked] = useState(false);
	const [animationDone, setAnimationDone] = useState(false);
	const [searchClicked, setSearchClicked] = useState(false);

	function handleChangeMenuButton() {
		setMenuClicked(!menuClicked);
		setAnimationDone(!animationDone);
	}

	function handleChangeSearchButton() {
		setSearchClicked(!searchClicked);
	}

	return (
		<>
			<MediaQuery minWidth={1025}>
				<StyledNavBarPositioning>
					<StyledNavigationBar>
						<StyledNavigationSection>
							<StyledUnsortedList>
								<Link
									to="introtext"
									spy={true}
									smooth={false}
									offset={-70}
									duration={350}
									onClick={handleChangeMenuButton}
								>
									<StyledListItems>Start</StyledListItems>
								</Link>
								<Link
									to="products"
									spy={true}
									smooth={false}
									offset={-70}
									duration={350}
									onClick={handleChangeMenuButton}
								>
									<StyledListItems>Unsere Produkte</StyledListItems>
								</Link>
								<Link
									to="about-us"
									spy={true}
									smooth={false}
									offset={-70}
									duration={350}
									onClick={handleChangeMenuButton}
								>
									<StyledListItems>Wer wir sind</StyledListItems>
								</Link>
								<Link
									to="career"
									spy={true}
									smooth={false}
									offset={-65}
									duration={350}
									onClick={handleChangeMenuButton}
								>
									<StyledListItems>Karriere</StyledListItems>
								</Link>
								<Link
									to="contact"
									spy={true}
									smooth={false}
									offset={-65}
									duration={350}
									onClick={handleChangeMenuButton}
								>
									<StyledListItems>Kontakt</StyledListItems>
								</Link>
							</StyledUnsortedList>
						</StyledNavigationSection>
					</StyledNavigationBar>
				</StyledNavBarPositioning>
			</MediaQuery>
			<MediaQuery maxWidth={1024}>
				<StyledNavigationBar>
					<StyledNavigationSection>
						<StyledShowOrHideMenuButton onClick={handleChangeMenuButton}>
							<StyledIconDescription>Menü</StyledIconDescription>
							{menuClicked ? (
								<>
									<StyledMenuIcon
										icon={faX}
										menuclicked={menuClicked ? "true" : "false"}
										animationdone={animationDone ? "true" : "false"}
									/>
								</>
							) : (
								<StyledMenuIcon
									icon={faBars}
									menuclicked={menuClicked ? "true" : "false"}
									animationdone={animationDone ? "true" : "false"}
								/>
							)}
						</StyledShowOrHideMenuButton>
						<StyledShowOrHideSearchButton onClick={handleChangeSearchButton}>
							{searchClicked ? (
								<>
									<StyledIconDescription>schließen</StyledIconDescription>
									<StyledSearchIcon
										icon={faX}
										searchclicked={searchClicked ? "true" : "false"}
									/>
								</>
							) : (
								<>
									<StyledIconDescription>Suche</StyledIconDescription>
									<StyledSearchIcon
										icon={faSearch}
										searchclicked={searchClicked ? "true" : "false"}
									/>
								</>
							)}
						</StyledShowOrHideSearchButton>

						{searchClicked ? (
							<StyledInputSection>
								<label id="suche"></label>
								<Fade>
									<StyledSearchInput
										id="suche"
										type="text"
										placeholder="Suche"
									/>
								</Fade>
							</StyledInputSection>
						) : (
							<StyledLogoSection>
								<Fade>
									<Logo />
								</Fade>
							</StyledLogoSection>
						)}
					</StyledNavigationSection>

					{menuClicked && (
						<StyledUnsortedList>
							<Fade cascade damping={0.1}>
								<Link
									to="introtext"
									spy={true}
									smooth={false}
									offset={-70}
									duration={350}
									onClick={handleChangeMenuButton}
								>
									<StyledListItems>Start</StyledListItems>
								</Link>
								<Link
									to="products"
									spy={true}
									smooth={false}
									offset={-70}
									duration={350}
									onClick={handleChangeMenuButton}
								>
									<StyledListItems>Unsere Produkte</StyledListItems>
								</Link>
								<Link
									to="about-us"
									spy={true}
									smooth={false}
									offset={-70}
									duration={350}
									onClick={handleChangeMenuButton}
								>
									<StyledListItems>Wer wir sind</StyledListItems>
								</Link>
								<Link
									to="career"
									spy={true}
									smooth={false}
									offset={-65}
									duration={350}
									onClick={handleChangeMenuButton}
								>
									<StyledListItems>Karriere</StyledListItems>
								</Link>
								<Link
									to="contact"
									spy={true}
									smooth={false}
									offset={-65}
									duration={350}
									onClick={handleChangeMenuButton}
								>
									<StyledListItems>Kontakt</StyledListItems>
								</Link>
							</Fade>
						</StyledUnsortedList>
					)}
				</StyledNavigationBar>
			</MediaQuery>
		</>
	);
}
const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;

const Rotateforwards = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    transform: rotate(180deg);
    opacity: 1;
  }
`;

const StyledShowOrHideMenuButton = styled.button`
	border: none;
	background-color: transparent;
	grid-area: 1 / 1 / 2 / 2;
	padding: 0.5rem;
`;

const StyledShowOrHideSearchButton = styled.button`
	border: none;
	background-color: transparent;
	grid-area: 1 / 3 / 2 / 4;
`;

const StyledMenuIcon = styled(FontAwesomeIcon)`
	width: 2.2rem;
	height: 2.2rem;
	color: var(--color-fourth);
	animation: ${({ animationdone, menuclicked }) =>
			animationdone ? (menuclicked ? Rotateforwards : "none") : FadeIn}
		0.7s ease;
	transition: all 0.7s ease;
`;

const StyledNavBarPositioning = styled.div`
	position: sticky;
	top: 0;
	height: 100%;
	border: 1px solid black;
`;

const StyledSearchIcon = styled(FontAwesomeIcon)`
	width: 2.2rem;
	height: 2.2rem;
	color: var(--color-fourth);
`;

const StyledIconDescription = styled.p`
	color: var(--color-fourth);
	margin: 0;
	font-size: var(--font-size-text);
`;

const StyledSearchInput = styled.input`
	height: 2rem;
	width: 13rem;
	border-radius: 10px;
	border: none;
`;

const StyledInputSection = styled.section`
	grid-area: 1 / 2 / 2 / 3;
	text-align: center;
`;

const StyledNavigationBar = styled.nav`
	position: sticky;
	top: 0;
	@media (min-width: 1025px) {
		border: 1px solid black;
	}
	z-index: 999;
	width: 100%;
	height: 100%;
	border: 1px solid var(--color-third);
	box-shadow: 5px 8px 12px -4px rgba(0, 0, 0, 0.2);
`;

const StyledNavigationSection = styled.section`
	display: grid;
	grid-template-columns: 0.3fr 1fr 0.3fr;
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	margin-top: 0;
	align-items: center;
	background-color: white;
	width: 100%;
	height: 100%;
	@media (min-width: 1024px) {
		height: 5rem;
		padding: 1rem;
	}
`;

const StyledUnsortedList = styled.ul`
	position: absolute;
	z-index: 3;

	@media (min-width: 1024px) {
		flex-direction: row;
		height: 100%;
		margin: auto;
		top: 0;
	}
	width: 60%;
	height: 20rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	list-style: none;
	padding: 0;
	margin: 0;
	margin-top: 0.5rem;
`;

const StyledListItems = styled.li`
	padding: 1.4rem;
	color: black;
	background-color: white;
	border: 1px solid var(--color-third);
	font-size: var(--font-size-title);

	@media (min-width: 1024px) {
		height: 100%;
	}
	&:hover {
		background-color: var(--color-third);
		color: var(--color-fourth);
	}
`;

const StyledLogoSection = styled.section`
	grid-area: 1 / 2 / 2 / 3;
	width: 80%;
	text-align: center;
	margin: auto;
	border-bottom: 5px solid var(--color-fifth);
	border-top: 5px solid var(--color-secondary);
`;
