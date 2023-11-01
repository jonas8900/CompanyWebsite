import { Link } from "react-scroll/modules";
import styled from "styled-components";

export default function Logo() {
	return (
		<>
			<StyledLogo>
				<Link
					to="introtext"
					spy={true}
					smooth={false}
					offset={-70}
					duration={350}
				>
					Elektromaschinenbau Schulze GmbH
				</Link>
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
