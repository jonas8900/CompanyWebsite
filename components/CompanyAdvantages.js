import styled from "styled-components";
import Greenbutton from "./GreenButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function CompanyAdvantages() {
return(
    <>
    <StyledCardWrapper>
    <StyledHeadline>Was wir bieten</StyledHeadline>
    <StyledDivSection>
    <StyledDiv><StyledParagraph>30 Tage Urlaub</StyledParagraph><StyledIcon icon={faCheck} /></StyledDiv>
    <StyledDiv><StyledParagraph>moderner Arbeitsplatz</StyledParagraph><StyledIcon icon={faCheck} /></StyledDiv>
    <StyledDiv><StyledParagraph>regelmäßige Weiterbildung</StyledParagraph><StyledIcon icon={faCheck} /></StyledDiv>
    <StyledDiv><StyledParagraph>familiäres Team</StyledParagraph><StyledIcon icon={faCheck} /></StyledDiv>
    <StyledDiv><StyledParagraph>faires und attraktives Gehalt</StyledParagraph><StyledIcon icon={faCheck} /></StyledDiv>
    <StyledDiv><StyledParagraph>Unbefristeter Arbeitsvertrag</StyledParagraph><StyledIcon icon={faCheck} /></StyledDiv>
    <StyledDiv><StyledParagraph>hochwertige Arbeitskleidung</StyledParagraph><StyledIcon icon={faCheck} /></StyledDiv>
    <StyledDiv><StyledParagraph>Abwechslung im Alltag</StyledParagraph><StyledIcon icon={faCheck} /></StyledDiv>
    <StyledDiv><StyledParagraph>flache Hierachien</StyledParagraph><StyledIcon icon={faCheck} /></StyledDiv>

    </StyledDivSection>
    <StyledButtonSection><Link to="job-ads" spy={true} smooth={false} offset={-70} duration={350}><Greenbutton margin={-2}>zu den Jobs</Greenbutton></Link></StyledButtonSection>
    </StyledCardWrapper>
    </>
)
}


const StyledCardWrapper = styled.section`
text-align: center;
background-color: #484848;
margin-right: 1rem;
margin-left: 1rem;
border: 1px solid transparent;
max-width: 600px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

`;

const StyledHeadline = styled.h1`
align-items: center;
margin: 1rem 5rem 2rem 5rem;

color: white;
border-bottom: 1px solid white;

font-size: var(--font-size-headlines);



`;

const StyledIcon = styled(FontAwesomeIcon)`
color: black;
background-color: var(--color-primary);
border-radius: 100%;
padding: 0.4rem;
position: absolute;
width: 2rem;
height: 2rem;
top: -1rem;
right: -0.8rem;
`;

const StyledDivSection = styled.section`
display: inline-grid; 
grid-template-columns: 1fr 1fr 1fr; 
grid-template-rows: 1fr 1fr 1fr; 
gap: 8% 4%; 
padding: 0.5rem;
margin-left: 0.3rem;
margin-right: 0.3rem;
margin-bottom: 3.3rem;
`;

const StyledDiv = styled.div`
position: relative;
background-color: white;
word-break: break-word;
min-width: 4rem;
min-height: 5rem;
width: 100%;
height: 100%;
border-radius: 2px;
display: flex; 
align-items: center; 
justify-content: center; 
padding-right: 0.1rem;
padding-left: 0.1rem;
box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.25);

`;

const StyledParagraph = styled.p`
font-size: 12px;
font-weight: 700;
color: black;
`;

const StyledButtonSection = styled.section`
margin-left: 60%;
`;