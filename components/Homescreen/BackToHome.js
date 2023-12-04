import styled from "styled-components";
import Logo from "../Navigation/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function BackToHome() {
	return (
		<>
			<StyledLogoSection>
				<StyledLink href="/">
					<StyledIcon icon={faArrowLeft} />
				</StyledLink>
				<Logo />
			</StyledLogoSection>
		</>
	);
}

const StyledLogoSection = styled.section`
	border-top: 4px solid var(--color-secondary);
	border-bottom: 4px solid var(--color-fifth);
	padding: 0.4rem;
	width: 100%;
	margin: 2rem auto;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	text-align: center;
	background-color: white;
	align-items: center;
	@media (min-width: 768px) {
		padding: 0.7rem;
	}
`;

const StyledIcon = styled(FontAwesomeIcon)`
	width: 1rem;
	height: 1rem;
	cursor: pointer;
	display: flex;
	justify-content: center;

	&:hover {
		color: var(--color-fifth);
		scale: 1.1;
		transition: all 0.3s ease-in-out;
	}

	&:not(:hover) {
		transition: all 0.3s ease-in-out;
	}
	@media (min-width: 768px) {
		width: 2rem;
		height: 2rem;
	}
	@media (min-width: 1025px) {
		width: 3rem;
		height: 3rem;
	}
`;

const StyledLink = styled(Link)`
	width: 2rem;
	margin-left: 1rem;
	text-decoration: none;
	color: black;
`;
