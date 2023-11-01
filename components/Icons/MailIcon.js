import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export default function MailIcon({ href, children }) {
	return (
		<>
			<StyledLink href={href}>
				<StyledMailIcon icon={faEnvelope} />
				<StyledParagraph>{children}</StyledParagraph>
			</StyledLink>
		</>
	);
}

const MailScaling = keyframes` 

0% {
			transform:rotate(0deg);
			transform-origin:50% 0;
		}
		10% {
			transform:rotate(2deg);
		}
		20% {
			transform:rotate(-4deg);
		}
		30% {
			transform:rotate(6deg);
		}
		40% {
			transform:rotate(-6deg);
		}
		40% {
			transform:rotate(8deg);
		}
		60% {
			transform:rotate(-8deg);
		}
		70% {
			transform:rotate(6deg);
		}
		80% {
			transform:rotate(-6deg);
		}
		90% {
			transform:rotate(4deg);
		}
		100% {
			transform:rotate(0deg);
			transform-origin:50% 0;
		}

`;

const StyledMailIcon = styled(FontAwesomeIcon)`
	width: 1rem;
	height: 1rem;
	align-self: center;
	justify-self: center;
	text-align: center;
	margin-right: 0.5rem;
	transform: translateX(0);
	opacity: 1;

	&:hover {
		animation: ${MailScaling} 1s linear both;
	}
	@media (min-width: 768px) {
		width: 1.3rem;
		height: 1.3rem;
	}
`;

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: left;
	text-decoration: none;
	margin-top: 0.6rem;
	color: var(--color-fourth);
	&:hover {
		color: var(--color-fifth);
		transition: all 0.3s ease-in-out;
	}
	&:not(:hover) {
		transition: all 0.2s ease-in-out;
	}
`;

const StyledParagraph = styled.p`
    font-size: var(--font-size-text);
    font-weight: 400;
    color: var(--color-fourth);
`;