import styled from "styled-components"
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
    return (
        <StyledSection>
        <StyledLinkArticle>
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
        </StyledLinkArticle>
        </StyledSection>
    )
    
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