import { faComment, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

export default function SpeechBubbleHelp() {
  const [helpButtonClicked, setHelpButtonClicked] = useState(false);

  function handleHelpButton() {
    setHelpButtonClicked(!helpButtonClicked);
    console.log(helpButtonClicked);
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
                <StyledClosedHelp icon={faX} onClick={handleHelpButton} />
              </StyledArticle>
            </Fade>
          </>
        ) : (
          <>
            <StyledButton onClick={handleHelpButton}>
              <StyledHeadline>Hilfe?</StyledHeadline>

              <StyledSpeechBubble icon={faComment} />
            </StyledButton>
          </>
        )}
      </StyledBubbleWrapper>
    </>
  );
}

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
  z-index: 3;
  color: var(--color-fourth);
`;

const StyledClosedHelp = styled(FontAwesomeIcon)`
  width: 1rem;
  height: 1rem;
  border: 1px solid black;
`;

const StyledHeadline = styled.h1`
  position: relative;
  font-size: var(--font-size-subtitle);
  bottom: -0.6rem;
  left: 0.1rem;
  z-index: 4;
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
  height: 6rem;
  border: 1px solid black;
`;

const StyledSubHeadline = styled.h2``;
