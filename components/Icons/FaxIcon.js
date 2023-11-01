import { faEnvelope, faFax } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export default function FaxIcon({ href, children }) {
	return (
		<>
			<StyledLink href={href}>
				<StyledFaxIcon icon={faFax} />
				<StyledParagraph>{children}</StyledParagraph>
			</StyledLink>
		</>
	);
}

const StyledFaxIcon = styled(FontAwesomeIcon)`
	width: 1rem;
	height: 1rem;
	font-size: 1px;
	align-self: center;
	justify-self: center;
	text-align: center;
	margin-right: 0.5rem;
	transform: translateX(0);
	opacity: 1;
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