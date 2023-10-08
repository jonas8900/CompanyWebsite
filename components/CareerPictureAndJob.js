import Image from "next/image";
import styled from "styled-components";
import JobCard from "./JobCard";



export default function CareerPictureAndJob() {

    return(
        <>
        <StyledHeadlineAndJobCardSectionWrapper>
        <StyledCareerIntroSectionImage>
        <StyledPageHeadline>Karriere</StyledPageHeadline>
        <StyledImage src="/Karriere.jpg" width={500} height={500} alt="Das Bild zeigt einen Mann am Schreibtisch mit einem Helm und einem Anzug" />
        </StyledCareerIntroSectionImage>
        <StyledCareerIntroSectionCard>
        <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Technischer Einkäufer"}/>
        </StyledCareerIntroSectionCard>
        </StyledHeadlineAndJobCardSectionWrapper>
        </>
    )
}




const StyledHeadlineAndJobCardSectionWrapper = styled.section`
background-color: #2C2C2C;
margin-top: 0rem;
margin-bottom: 18rem;
width: 100%;
height: auto;

`;


const StyledCareerIntroSectionImage = styled.section`
position: relative;
width: 100%;

background-color: #2C2C2C;

`;


const StyledCareerIntroSectionCard = styled.section`
  position: absolute;
  border-radius: 9px;
  background-color: var(--color-third);
  width: 80%;
  left: 10%;
  right: 10%;
  margin: auto;
  margin-top: -1rem;

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