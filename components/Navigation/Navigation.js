import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled, { keyframes, css } from "styled-components";
import Logo from "./Logo";
import { Link } from "react-scroll/modules";
import { useSession } from "next-auth/react";
import LinkToAdmin from "next/link";

export default function Navigation({ scrollY, device }) {
	const { data: session } = useSession();
	const [menuClicked, setMenuClicked] = useState(false);
	const [animationDone, setAnimationDone] = useState(false);
	function handleChangeMenuButton() {
		setMenuClicked(!menuClicked);
		setAnimationDone(!animationDone);
	}

	return (
		<>
			{device ? (
				<StyledNavigationBar $scrolly={scrollY}>
					<StyledNavigationSection>
						<StyledLogoReplacement>
							<StyledLink
								to="introtext"
								spy={true}
								smooth={false}
								offset={-70}
								duration={350}
								href="#"
							>
								<StyledCompanyTitle $scrolly={scrollY}>
									Elektromaschinenbau Schulze GmbH
								</StyledCompanyTitle>
							</StyledLink>
						</StyledLogoReplacement>
						<StyledUnsortedList>
							<li>
								<StyledLink
									to="introtext"
									spy={true}
									smooth={false}
									offset={-70}
									duration={350}
									href="#"
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
								>
									<StyledListItems $scrolly={scrollY}>Produkte</StyledListItems>
								</StyledLink>
							</li>
							<li>
								<StyledLink
									to="certificates"
									spy={true}
									smooth={false}
									offset={-65}
									duration={350}
									href="#"
								>
									<StyledListItems $scrolly={scrollY}>
										Zertifikate{" "}
									</StyledListItems>
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
								>
									<StyledListItems $scrolly={scrollY}>Kontakt</StyledListItems>
								</StyledLink>
							</li>
							{session && (
								<li>
									<StyledLinkToMain
										href="/adminArea"
									>
										<StyledListItems $scrolly={scrollY}>Admin</StyledListItems>
									</StyledLinkToMain>
								</li>
							)}
						</StyledUnsortedList>
					</StyledNavigationSection>
				</StyledNavigationBar>
			) : (
				// Mobile Navigation (bleibt vorerst unverändert)
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
								<StyledMobileCompanyTitle>
									Elektromaschinenbau Schulze GmbH
								</StyledMobileCompanyTitle>
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
									{session && (
										<StyledLinkToMain
											href="/adminArea"
											onClick={handleChangeMenuButton}
										>
											<StyledListItemMobile>Admin</StyledListItemMobile>
										</StyledLinkToMain>
									)}
								</Fade>
							</StyledUnsortedList>
						)}
					</StyledNavigationSection>
				</StyledNavigationBar>
			)}
		</>
	);
}

const StyledLinkToMain = styled(LinkToAdmin)`
	text-decoration: none;
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
	height: auto;
	transition: background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;

	@media (min-width: 1024px) {
		position: fixed;
		${props => props.$scrolly > 50
			? css`
				background-color: white;
				box-shadow: 0 4px 12px rgba(0,0,0,0.08);
				backdrop-filter: blur(0px);
			`
			: css`
				background-color: rgba(0, 0, 0, 0.1);
				box-shadow: none;
				backdrop-filter: blur(8px);
			`
		}
	}
`;

const StyledNavigationSection = styled.section`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 0.3fr 0.3fr;
	align-items: center;
	background-color: white;
	width: 100%;
	height: 100%;

	@media (min-width: 1024px) {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: transparent;
		padding: 0 5%;
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
	list-style: none;
	padding: 0;
	margin: 0;
	top: 100%;

	@media (min-width: 1024px) {
		flex-direction: row;
		position: static;
		width: auto;
		height: 100%;
		gap: 30px;
		align-items: center;
	}
`;

const StyledListItems = styled.p`
	padding: 1.4rem;
	color: black;
	background-color: white;
	border: 1px solid var(--color-third);
	font-size: var(--font-size-title);
	width: 100%;
	transition: color 0.3s ease;

	@media (min-width: 1024px) {
		padding: 0.5rem 0;
		border: none;
		background-color: transparent;
		font-weight: 500;
		position: relative;
		color: ${props => props.$scrolly > 50 ? 'var(--color-fourth)' : 'white'};
		text-shadow: ${props => props.$scrolly > 50 ? 'none' : '0 1px 4px rgba(0,0,0,0.5)'};
		cursor: pointer;

		&:after {
			content: '';
			position: absolute;
			bottom: -2px;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: var(--color-secondary);
			transform: scaleX(0);
			transform-origin: right;
			transition: transform 0.3s ease;
		}

		&:hover:after {
			transform: scaleX(1);
			transform-origin: left;
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
`;

const StyledLogoReplacement = styled.div`
	display: none;

	@media (min-width: 1024px) {
		display: block;
		position: relative;
	}
`;

const StyledCompanyTitle = styled.h1`
	color: ${props => props.$scrolly > 50 ? 'var(--color-fourth)' : 'white'};
	font-size: 1.2rem;
	font-weight: 600;
	padding: 10px 0;
	margin: 0;
	cursor: pointer;
	position: relative;
	transition: color 0.3s ease;
	text-shadow: ${props => props.$scrolly > 50 ? 'none' : '0 1px 4px rgba(0,0,0,0.5)'};

	&::before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 3px;
		border-radius: 999px;
		background: linear-gradient(
			90deg,
			rgba(125, 255, 125, 0.0),
			rgba(125, 255, 125, 1),
			rgba(125, 255, 125, 0.0)
		);
	}

	&::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 3px;
		border-radius: 999px;
		background: linear-gradient(
			90deg,
			rgba(24, 30, 144, 0.0),
			#181E90,
			rgba(24, 30, 144, 0.0)
		);
	}
`;

const StyledLogoSection = styled.article`
	grid-area: 1 / 1 / 2 / 2;
	width: 73%;
	margin: 0 auto;
	margin-left: 0rem;
`;

const StyledMobileCompanyTitle = styled.h1`
	color: var(--color-fourth);
	font-size: 0.9rem;
	font-weight: 600;
	padding: 12px 0;
	margin: auto auto auto 10px;
	position: relative;
	text-align: left;
	line-height: 1.3;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 3px;
		border-radius: 999px;
		background: linear-gradient(
			90deg,
			rgba(125, 255, 125, 0.0),
			rgba(125, 255, 125, 1),
			rgba(125, 255, 125, 0.0)
		);
	}

	&::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 3px;
		border-radius: 999px;
		background: linear-gradient(
			90deg,
			rgba(24, 30, 144, 0.0),
			#181E90,
			rgba(24, 30, 144, 0.0)
		);
	}
`;
