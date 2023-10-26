import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-scroll/modules";
import styled, { keyframes } from "styled-components";

export default function ScrollToTop() {
	const [appearScrollToTopButton, setappearScrollToTopButton] = useState(false);

	const [linkClicked, setLinkClicked] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.onscroll = function () {
				if (window.scrollY > 1000) {
					setappearScrollToTopButton(true);
				} else {
					setappearScrollToTopButton(false);
				}
			};
		}
	}, [linkClicked]);

	function handleClickLink() {
		setLinkClicked(!linkClicked);
	}

	return (
		<>
			{appearScrollToTopButton && (
				<StyledSection $appearscrolltotopbutton={appearScrollToTopButton}>
					<Link
						to="introtext"
						spy={true}
						smooth={false}
						offset={-70}
						duration={350}
						onClick={handleClickLink}
					>
						<StyledIcon icon={faArrowUp} />
					</Link>
				</StyledSection>
			)}
		</>
	);
}

const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;

const StyledSection = styled.section`
	position: fixed;
	width: 1.4rem;
	height: 1.4rem;
	bottom: 3rem;
	left: 5%;
	z-index: 99;

	animation: ${({ $appearscrolltotopbutton }) =>
			$appearscrolltotopbutton && FadeIn}
		0.5s ease;
	@media (min-width: 1025px) {
		width: 1.8rem;
		height: 1.8rem;
	}

	&:hover {
		color: var(--color-secondary);
		transition: all 0.5s ease;
	}

	&:not(:hover) {
		color: var(--color-fourth);
		transition: all 0.5s ease;
	}

	&:active {
		color: var(--color-fifth);
	}
`;

const StyledIcon = styled(FontAwesomeIcon)`
	color: var(--color-fourth);
	transition: all 0.5s ease;

	border-radius: 20%;
	padding: 3px;
	background-color: white;
`;
