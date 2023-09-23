import {
  faComment,
  faEnvelope,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled, { keyframes } from "styled-components";

export default function SpeechBubbleHelp() {
  const [helpButtonClicked, setHelpButtonClicked] = useState(false);

  function handleHelpButton() {
    setHelpButtonClicked(!helpButtonClicked);
  }

  return (
    <>
      <StyledBubbleWrapper>
        {helpButtonClicked ? (
          <>
            <Fade>
              <StyledArticle>
                <StyledSubHeadline>
                  Rufen Sie jetzt unseren Berater an !
                </StyledSubHeadline>
                <StyledParagraph>
                  <StyledInfoIcons icon={faPhone} />
                  <b>0511 27789680</b>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledInfoIcons icon={faEnvelope} />
                  <b>info@emb-schulze.de</b>
                </StyledParagraph>
                <StyledClosedHelp icon={faX} onClick={handleHelpButton} />
              </StyledArticle>
            </Fade>
          </>
        ) : (
          <>
            <StyledButton onClick={handleHelpButton}>
              <StyledHeadline>Hilfe?</StyledHeadline>

              <StyledSpeechBubble
                icon={faComment}
                helpbuttonclicked={helpButtonClicked ? "true" : "false"}
              />
            </StyledButton>
          </>
        )}
      </StyledBubbleWrapper>
    </>
  );
}

const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;

const StyledBubbleWrapper = styled.section`
  position: fixed;
  text-align: center;
  bottom: 2rem;
  left: 1rem;
`;

const StyledSpeechBubble = styled(FontAwesomeIcon)`
  position: relative;
  width: 4rem;
  height: 4rem;
  bottom: 2.5rem;
  left: 0rem;
  z-index: 99;
  color: var(--color-fourth);
  animation: ${({ helpbuttonclicked }) => helpbuttonclicked && FadeIn} 1.5s ease;
`;

const StyledClosedHelp = styled(FontAwesomeIcon)`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  color: white;
  border: 1px solid white;

  &:hover {
    color: red;
  }
  &:active {
    color: red;
  }
`;

const StyledHeadline = styled.h1`
  position: relative;
  font-size: var(--font-size-subtitle);
  bottom: -0.6rem;
  left: 0.1rem;
  z-index: 999;
  color: white;
  font-weight: 300;
`;

const StyledButton = styled.button`
  border: none;
  width: 5rem;
  height: 4rem;
  background-color: transparent;

  z-index: 5;
`;

const StyledArticle = styled.article`
  background-color: var(--color-fourth);
  width: 20rem;
  height: 7rem;
  border: 1px solid black;
`;

const StyledSubHeadline = styled.h2`
  color: white;
`;

const StyledParagraph = styled.p`
  color: white;
  text-align: center;
`;

const StyledInfoIcons = styled(FontAwesomeIcon)`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  text-align: center;
`;
