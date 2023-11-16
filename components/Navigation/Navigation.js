import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import { Link } from "react-scroll/modules";

export default function Navigation({ scrollY, device }) {
	const [menuClicked, setMenuClicked] = useState(false);
	const [animationDone, setAnimationDone] = useState(false);
	function handleChangeMenuButton() {
		setMenuClicked(!menuClicked);
		setAnimationDone(!animationDone);
	}

	return (
		<>
			{device ? (
				<StyledNavigationBar>
					<StyledNavigationSection $scrolly={scrollY}>
						<StyledLogoSection>
							<StyledLink
								to="introtext"
								spy={true}
								smooth={false}
								offset={-70}
								duration={350}
								href="#"
								onClick={handleChangeMenuButton}
							>
								<StyledLogo $scrolly={scrollY}>
									Elektromaschinenbau Schulze GmbH
								</StyledLogo>
							</StyledLink>
						</StyledLogoSection>
						<StyledUnsortedList>
							<li>
								<StyledLink
									to="introtext"
									spy={true}
									smooth={false}
									offset={-70}
									duration={350}
									href="#"
									onClick={handleChangeMenuButton}
								>
									<StyledListItems $scrolly={scrollY}>Start</StyledListItems>
								</StyledLink>
							</li>
							<li>
								<StyledLink
									to="products"
									spy={true}
									smooth={false}
									offset={-70}
									duration={350}
									href="#"
									onClick={handleChangeMenuButton}
								>
									<StyledListItems $scrolly={scrollY}>Produkte</StyledListItems>
								</StyledLink>
							</li>
							<li>
								<StyledLink
									to="career"
									spy={true}
									smooth={false}
									offset={-65}
									duration={350}
									href="#"
									onClick={handleChangeMenuButton}
								>
									<StyledListItems $scrolly={scrollY}>
										Karriere{" "}
									</StyledListItems>
								</StyledLink>
							</li>
							<li>
								<StyledLink
									to="contact"
									spy={true}
									smooth={false}
									offset={-65}
									duration={350}
									href="#"
									onClick={handleChangeMenuButton}
								>
									<StyledListItems $scrolly={scrollY}>Kontakt</StyledListItems>
								</StyledLink>
							</li>
						</StyledUnsortedList>
					</StyledNavigationSection>
				</StyledNavigationBar>
			) : (
				<StyledNavigationBar>
					<StyledNavigationSection>
						<StyledShowOrHideMenuButton
							onClick={handleChangeMenuButton}
							aria-label="Menü öffnen oder schließen"
						>
							<StyledIconDescription id="menuDescription"></StyledIconDescription>
							{menuClicked ? (
								<>
									<StyledMenuIcon
										icon={faX}
										menuclicked={menuClicked ? "true" : "false"}
										animationdone={animationDone ? "true" : "false"}
										aria-describedby="menuDescription"
									/>
								</>
							) : (
								<StyledMenuIcon
									icon={faBars}
									menuclicked={menuClicked ? "true" : "false"}
									animationdone={animationDone ? "true" : "false"}
									aria-describedby="menuDescription"
								/>
							)}
						</StyledShowOrHideMenuButton>

						<StyledLogoSection>
							<Fade>
								<Logo />
							</Fade>
						</StyledLogoSection>

						{menuClicked && (
							<StyledUnsortedList>
								<Fade cascade damping={0.1}>
									<StyledLink
										to="introtext"
										spy={true}
										smooth={false}
										offset={-70}
										duration={350}
										href="#"
										onClick={handleChangeMenuButton}
									>
										<StyledListItemMobile>Start</StyledListItemMobile>
									</StyledLink>
									<StyledLink
										to="products"
										spy={true}
										smooth={false}
										offset={-70}
										duration={350}
										href="#"
										onClick={handleChangeMenuButton}
									>
										<StyledListItemMobile>Produkte</StyledListItemMobile>
									</StyledLink>
									{/* <StyledLink
										to="about-us"
										spy={true}
										smooth={false}
										offset={-70}
										duration={350}
										href="#"
										onClick={handleChangeMenuButton}
									>
										<StyledListItemMobile>Wer wir sind</StyledListItemMobile>
									</StyledLink> */}
									<StyledLink
										to="career"
										spy={true}
										smooth={false}
										offset={-65}
										duration={350}
										href="#"
										onClick={handleChangeMenuButton}
									>
										<StyledListItemMobile>Karriere</StyledListItemMobile>
									</StyledLink>
									<StyledLink
										to="contact"
										spy={true}
										smooth={false}
										offset={-65}
										duration={350}
										href="#"
										onClick={handleChangeMenuButton}
									>
										<StyledListItemMobile>Kontakt</StyledListItemMobile>
									</StyledLink>
								</Fade>
							</StyledUnsortedList>
						)}
					</StyledNavigationSection>
				</StyledNavigationBar>
			)}
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

const changeBorder = keyframes`
 0% {
    width: 0%;
 }
 100% {
    width: 100%;
 }
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;

const StyledShowOrHideMenuButton = styled.button`
	border: none;
	background-color: transparent;

	grid-area: 1 / 3 / 2 / 3;
	padding: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
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

const StyledIconDescription = styled.p`
	color: var(--color-fourth);
	margin: 0;
	font-size: var(--font-size-text);
`;

const StyledNavigationBar = styled.nav`
	position: sticky;
	top: 0;
	z-index: 9999;
	width: 100%;
	height: 100%;
	box-shadow: 5px 8px 12px -4px rgba(0, 0, 0, 0.2);
	@media (min-width: 1024px) {
		position: sticky;
		height: 5rem;
		width: 100%;
		box-shadow: none;
		margin-top: 2rem;
	}
`;

const StyledNavigationSection = styled.section`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 0.3fr 0.3fr;
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	margin-top: 0;
	align-items: center;
	background-color: white;
	width: 100%;
	height: 100%;
	@media (min-width: 1024px) {
		width: 100%;
		display: flex;
		background-color: ${({ $scrolly }) => $scrolly > 200}rgba(255, 255, 255, 0);
		box-shadow: ${({ $scrolly }) => $scrolly < 200} 5px 8px 12px -4px rgba(0, 0, 0, 0.2);
		transition: all 0.5s ease;
	}
`;

const StyledUnsortedList = styled.ul`
	position: absolute;
	z-index: 3;
	display: flex;
	flex-direction: column;
	width: 60%;
	right: 0;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	list-style: none;
	padding: 0;
	margin: 0;
	top: 100%;

	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: flex-end;
		position: static;
		width: 100%;
		height: 100%;
		margin: auto;
		margin-right: 5%;
		gap: 15px;
		align-items: center;
	}
	@media (min-width: 1199px) {
		width: 50%;
		gap: 30px;
	}
`;

const StyledListItems = styled.p`
	padding: 1.4rem;
	color: black;
	background-color: white;
	border: 1px solid var(--color-third);
	font-size: var(--font-size-title);
	width: 100%;
	transition: all 0.2s ease;
	&:hover {
		color: white;
		background-color: var(--color-fourth);
		cursor: pointer;
		transition: all 0.2s ease;
	}
	@media (min-width: 1024px) {
		padding: 0.5rem;
		border: none;
		background-color: rgba(255, 255, 255, 0);
		color: ${({ $scrolly }) =>
			$scrolly > 200 ? "var(--color-fourth)" : "white"};
		transition: all 0.5s ease;
		border-left: ${({ $scrolly }) =>
			$scrolly < 200 ? "none" : "1px solid black"};
		font-weight: 500;

		&:hover {
			scale: 1.1;
			padding: 0.5rem;
			background-color: transparent;
			color: ${({ $scrolly }) =>
				$scrolly > 200 ? "var(--color-fourth)" : "white"};
			cursor: pointer;
			&:hover {
				border-bottom: ${({ $scrolly }) =>
					$scrolly < 200 ? "1px solid #f5f6ff" : "1px solid black"};
				animation: ${changeBorder} 0.2s linear forwards;
			}
		}
	}
`;

const StyledListItemMobile = styled.li`
	padding: 1.4rem;
	color: black;
	background-color: white;
	border: 1px solid var(--color-third);
	font-size: var(--font-size-title);
	width: 100%;
	transition: all 0.2s ease;
	&:hover {
		color: white;
		background-color: var(--color-fourth);
		cursor: pointer;
		transition: all 0.2s ease;
	}
	@media (min-width: 1024px) {
		padding: 0.5rem;
		border: none;
		background-color: rgba(255, 255, 255, 0);
		color: ${({ $scrolly }) =>
			$scrolly > 200 ? "var(--color-fourth)" : "white"};
		transition: all 0.5s ease;
		border-left: ${({ $scrolly }) =>
			$scrolly < 200 ? "none" : "1px solid black"};
		font-weight: 500;

		&:hover {
			scale: 1.1;
			padding: 0.5rem;
			background-color: transparent;
			color: ${({ $scrolly }) =>
				$scrolly > 200 ? "var(--color-fourth)" : "white"};
			cursor: pointer;
			&:hover {
				border-bottom: ${({ $scrolly }) =>
					$scrolly < 200 ? "1px solid #f5f6ff" : "1px solid black"};
				animation: ${changeBorder} 0.2s linear forwards;
			}
		}
	}
`;

const StyledLogoSection = styled.article`
	grid-area: 1 / 1 / 2 / 2;
	width: 73%;
	margin: 0 auto;
	margin-left: 0rem;
	text-align: center;
	align-self: center;
	border-bottom: 5px solid var(--color-fifth);
	border-top: 5px solid var(--color-secondary);
	@media (min-width: 550px) {
		width: 60%;
		margin-left: 0rem;
	}
	@media (min-width: 1024px) {
		width: 25%;
		max-width: 18rem;
		margin-left: 5%;
		justify-content: flex-start;
	}
`;

const StyledLogo = styled.h1`
	color: ${({ $scrolly }) => ($scrolly > 200 ? "black" : "white")};
	font-size: var(--font-size-title);
	font-family: Arial, Helvetica, sans-serif;
	padding: 0.3rem;
	margin: 0;
	font-weight: bold;
	cursor: pointer;
`;
