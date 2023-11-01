import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export default function PhoneIcon({ href, children }) {
	return (
		<>
			<StyledLink href={href}>
				<StyledPhoneIcon icon={faPhone} />{" "}
				<StyledParagraph>{children}</StyledParagraph>
			</StyledLink>
		</>
	);
}

const PhoneRing = keyframes`

    0% {
        transform: rotate(0) scale(1) skew(1deg)
    }
    10% {
        transform: rotate(-25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-third);
        padding: 0rem;
    }
    20% {
        transform: rotate(25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-secondary);
        color: black;
    }
    30% {
        transform: rotate(-25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-secondary);
        color: black;
    }
    40% {
        transform: rotate(25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-secondary);
        color: black
    }
    50% {
        transform: rotate(0) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 100%;
        background-color: var(--color-secondary)

    }
    100% {
        transform: rotate(0) scale(1) skew(1deg);
    }

`;

const StyledPhoneIcon = styled(FontAwesomeIcon)`
	width: 1rem;
	height: 1rem;
	align-self: center;
	justify-self: center;
	text-align: center;
	margin-right: 0.5rem;

	&:hover {
		animation: ${PhoneRing} 1s;
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
