import styled from "styled-components";
import CompanyAdvantages from "./CompanyAdvantages";
import CareerPictureAndJob from "./CareerPictureAndJob";

export default function Career() {
    return(
    <StyledMainSection id="career">
        <CareerPictureAndJob/>
        <CompanyAdvantages/>
    </StyledMainSection>
    )

}

const StyledMainSection = styled.main`
background-color: #2C2C2C;
width: 100%;
height: 100%;
min-height: 200vh;

`;

