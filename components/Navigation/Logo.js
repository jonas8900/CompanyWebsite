import { Link } from "react-scroll/modules";
import styled from "styled-components";

export default function Logo() {
	return (
		<>
			<StyledLogo>
				<StyledLink
					to="introtext"
					spy={true}
					href="#"
					smooth={false}
					offset={-70}
					duration={350}
				>
					Elektromaschinenbau Schulze GmbH
				</StyledLink>
			</StyledLogo>
		</>
	);
}

const StyledLogo = styled.h1`
	color: var(--color-fourth);
	font-size: var(--font-size-title);
	padding: 0.3rem;
	margin: 0;
	font-weight: bold;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: var(--color-fourth);
`;
