import styled from "styled-components";
import CompanyAdvantages from "./CompanyAdvantages";
import CareerPictureAndJob from "./CareerPictureAndJob";
import Image from "next/image";
import JobCard from "./JobCard";
import { useState } from "react";
import Greenbutton from "./GreenButton";
import Link from "next/link";

export default function Career() {
    const [showMore, setShowMore] = useState(false);

    function handleClickShowMore() {
        setShowMore(!showMore);

    }

    return(
    <StyledMainSection id="career">
        <CareerPictureAndJob/>
        <CompanyAdvantages/>
        <StyledImageWrapper>
     <Link href="https://www.kununu.com/de/elektromaschinenbau-schulze?utm_source=widget&utm_campaign=widget_selfservice_scorelarge"><StyledImage src="https://www.kununu.com/de/partner/KlRWCFBUUQ%3D%3D/self-service-button?button-type=3" width="150" height="100" alt="kununu-score" unoptimized /></Link>
     </StyledImageWrapper>
     <StyledJobCardWrapper>
        <StyledSubHeadline>Stellenanzeigen</StyledSubHeadline>
        <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Technischer Einkäufer"}></JobCard>
        <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Elektroniker für Maschinen- und Antriebstechnik"}></JobCard>
        {showMore === false && (
            <>
            <StyledShowMoreSection>
            <Greenbutton onClick={handleClickShowMore}>alle Jobs anzeigen</Greenbutton>
            </StyledShowMoreSection>
            <StyledBlurSection>
                 <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Mechatroniker"}></JobCard>
                 <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Elektroniker für Betriebstechnik"}></JobCard>
            </StyledBlurSection>
            </>
        )}
        {showMore === true && (
            <>
        <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Mechatroniker"}></JobCard>
        <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Elektroniker für Betriebstechnik"}></JobCard>
        <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Konstruktionsmechatroniker"}></JobCard>
        <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Elektrokonstrukteur"}></JobCard>
        <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Projektleitung Modernisierung im Maschinen- und Anlagenbau"}></JobCard>
        <JobCard headline={"Wir suchen Verstärkung!"} infotext={"wir freuen uns darauf Sie kennenzulernen!"} jobtitle={"Schlosser"}></JobCard>
        <StyledShowMoreSection>
        <Greenbutton onClick={handleClickShowMore}>weniger anzeigen</Greenbutton>
        </StyledShowMoreSection>
        </>
        )}
     </StyledJobCardWrapper>
     </StyledMainSection>
    )

}

const StyledMainSection = styled.main`
background-color: #2C2C2C;
width: 100%;
height: 100%;
margin-bottom: 3rem;


`;

const StyledSubHeadline = styled.h2`
text-align: left;
color: white;
font-size: var(--font-size-headlines);
border-bottom: 1px solid white;
width: 10.3rem;

`;

const StyledImage = styled(Image)`
cursor: pointer;
width: 14rem;
height: auto;
max-width: 300px;
max-height: 200px;

&:hover {
    scale: 1.1;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 2px 10px 0px rgba(255,255,255,0.75);
    border-radius: 9px;
}

&:active {
    scale: 1.1;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 2px 10px 0px rgba(255,255,255,0.75);

}

&:not(:hover) {
    scale: 1;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.75);
}

`;

const StyledImageWrapper = styled.section`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5rem;
margin-bottom: 5rem;
`;

const StyledJobCardWrapper = styled.section`
display: grid; 
gap: 3rem;
margin-left: 10%;
margin-right: 10%;
margin-bottom: 3rem;
transition: all 0.5s ease-in-out;
`;

const StyledShowMoreSection = styled.section`
display: flex;
justify-content: flex-end;
`;

const StyledBlurSection = styled.section`
display: grid; 
gap: 3rem;
margin-bottom: 3rem;
filter: blur(20px);
`;