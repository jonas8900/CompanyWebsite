import Head from "next/head";
import React from "react";
import { Link } from "react-scroll/modules";
import styled from "styled-components";

export default function Logo() {
	return (
		<>
			<Head>
				<link rel="canonical" href="https://elektromaschinenbau.vercel.app/" />
			</Head>
			<Link
				to="randompicture"
				spy={true}
				smooth={false}
				offset={-70}
				duration={350}
			>
				<StyledLogo>Elektromaschinenbau Schulze GmbH</StyledLogo>
			</Link>
		</>
	);
}

const StyledLogo = styled.h1`
	color: var(--color-third);
	font-size: var(--font-size-title);
	padding: 0.3rem;
	margin: 0;
	font-weight: bold;
`;
