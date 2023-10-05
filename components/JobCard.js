import Image from "next/image";
import styled from "styled-components";
import Greenbutton from "./GreenButton";


export default function JobCard({headline, infotext, jobtitle}) {
    return (

        <StyledCardWrapper>
          <StyledInfoWrapper>
            <StyledSubHeadline>{headline}</StyledSubHeadline>
            <StyledJobTitle>{jobtitle}<StyledParagraphForJobTitle>(m/w/d)</StyledParagraphForJobTitle></StyledJobTitle>
            <StyledParagraphForInfo>{infotext}</StyledParagraphForInfo>
          </StyledInfoWrapper>
                <StyledButtonWrapper>
                    <Greenbutton margin={-2}>Mehr erfahren ...</Greenbutton>      
                    </StyledButtonWrapper>
        </StyledCardWrapper>

      );
    }
    

    

    const StyledInfoWrapper = styled.article`
      margin-left: 1rem;
      margin-right: 0.5rem;
      margin: 1rem;
      background-color: var(--color-third);
      padding: 1rem 2rem 1rem 2rem;
      color: #2B363E;
    `;


    const StyledCardWrapper = styled.section`
    border: 1px solid transparent;
    background-color: #4E4E4E;
    `;
    
    const StyledButtonWrapper = styled.section`
      margin-left: 50%;
    `;
    
    const StyledSubHeadline = styled.h2`
      font-size: var(--font-size-text);
      color: black;
      font-weight: 400;
      margin-top: 0;
      width: 70%;
      margin: auto;
      border-bottom: 1px solid var(--color-primary);
      text-align: center;
    `;
    
    const StyledJobTitle = styled.h3`
    text-align: center;
        font-size: var(--font-size-text);
        font-weight: 700;
        margin-top: 1rem;
    `;

    const StyledParagraphForJobTitle = styled.p`
        font-size: var(--font-size-text);
        font-weight: 700;
        margin-top: 0;
    `;

    const StyledParagraphForInfo  = styled.p`
       color: black;
      font-weight: 300;
      margin-top: 2rem;
      margin-bottom: 0;
    `;