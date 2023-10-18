import styled from "styled-components";
import Logo from "../Navigation/Logo";
import Link from "next/link";

export default function Footer() {
	return (
		<StyledSection>
			<StyledLinkArticle>
				<StyledLink href="/impressum">Impressum</StyledLink>
				<StyledLink href="/datenschutz">Datenschutz</StyledLink>
			</StyledLinkArticle>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	background-color: var(--color-fourth);
	display: flex;
	align-items: center;
`;

const StyledLinkArticle = styled.article`
	display: grid;
	margin: 1rem;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
`;
