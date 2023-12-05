import styled from "styled-components";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Footer() {
	const { data: session } = useSession();

	return (
		<StyledSection>
			<StyledLinkArticle>
				<StyledLink href="/impressum">Impressum</StyledLink>
				<StyledLink href="/privacy">Datenschutz</StyledLink>
			</StyledLinkArticle>
			<StyledLinkForLogin>
				{session ? (
					<StyledButton onClick={() => signOut()}>Abmelden</StyledButton>
				) : (
					<StyledButton onClick={() => signIn()}>Login</StyledButton>
				)}
			</StyledLinkForLogin>
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

const StyledButton = styled.button`
	text-decoration: none;
	color: white;
	background-color: var(--color-fourth);
	border: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: var(--color-primary);
		scale: 1.1;
	}
`;

const StyledLinkForLogin = styled.article`
	position: absolute;
	right: 3rem;
`;
