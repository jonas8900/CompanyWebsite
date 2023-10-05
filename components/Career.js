import Image from "next/image";
import styled from "styled-components";
import JobCard from "./JobCard";

export default function Career() {
    return(
    <StyledMainSection id="career">
        <StyledCareerIntroSectionImage>
            <StyledPageHeadline>Karriere</StyledPageHeadline>
            <StyledImage src="/Karriere.jpg" width={500} height={500} alt="Das Bild zeigt einen Mann am Schreibtisch mit einem Helm und einem Anzug" />
        </StyledCareerIntroSectionImage>
        <StyledCareerIntroSectionCard>
            <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Technischer Einkäufer"}/>
        </StyledCareerIntroSectionCard>
    </StyledMainSection>
    )

}

const StyledMainSection = styled.main`
position: relative;
margin-top: 5rem;
min-height: 100vh;
background-color: #2C2C2C;
`;

const StyledCareerIntroSectionImage = styled.section`
position: absolute;
width: 100%;
height: 100%;
`;


const StyledCareerIntroSectionCard = styled.section`
position: absolute;
margin-top: 62%;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;


const StyledPageHeadline = styled.h1`
position: absolute;
color: white; 
margin: 1rem; 
z-index: 1;
font-size: var(--font-size-headlines);
font-weight: 600;

`;

const StyledImage = styled(Image)`
 width: 100%;
 height: auto;

`;