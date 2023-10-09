import {
  faComment,
  faEnvelope,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export default function SpeechBubbleHelp({scrollY}) {
  const [helpButtonClicked, setHelpButtonClicked] = useState(false);
  const [appearBubble, setAppearBubble] = useState(false);

  function handleHelpButton() {
    setHelpButtonClicked(!helpButtonClicked);
  }
useEffect(() => {
  function handleAppearByScrolling() {
    if (typeof window !== "undefined") {
        if (scrollY > 150) {
          setAppearBubble(true);
        } else {
          setAppearBubble(false);
          setHelpButtonClicked(false);
        }
    }
  }
  handleAppearByScrolling();
},[scrollY]);
  return (
    <>
      {appearBubble && (
        <StyledBubbleWrapper>
          {helpButtonClicked ? (
            <>
              <StyledArticle
                $helpbuttonclicked={helpButtonClicked ? "true" : "false"}
              >
                <StyledSubHeadline>
                  Rufen Sie jetzt unseren Berater an !
                </StyledSubHeadline>
                <StyledParagraph>
                  <StyledLink href="tel:051127789680">
                    <StyledPhoneIcons icon={faPhone} />
                    <b>0511 27789680</b>
                  </StyledLink>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledLink href="mailto:info@emb-schulze.de">
                    <StyledInfoIcons icon={faEnvelope} />

                    <b>info@emb-schulze.de</b>
                  </StyledLink>
                </StyledParagraph>
                <StyledClosedHelp icon={faX} onClick={handleHelpButton} />
              </StyledArticle>
            </>
          ) : (
            <>
              <StyledButton onClick={handleHelpButton}>
                <StyledHeadline>Hilfe?</StyledHeadline>

                <StyledSpeechBubble
                  icon={faComment}
                  $helpbuttonclicked={helpButtonClicked ? "true" : "false"}
                />
              </StyledButton>
            </>
          )}
        </StyledBubbleWrapper>
      )}
    </>
  );
}

const PhoneRing = keyframes`

    0% {
        transform: rotate(0) scale(1) skew(1deg)
    }
    10% {
        transform: rotate(-25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-third);
        padding: 0rem;
    }
    20% {
        transform: rotate(25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-secondary);
        color: black;
    }
    30% {
        transform: rotate(-25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-secondary);
        color: black;
    }
    40% {
        transform: rotate(25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-secondary);
        color: black
    }
    50% {
        transform: rotate(0) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 100%;
        background-color: var(--color-secondary)

    }
    100% {
        transform: rotate(0) scale(1) skew(1deg);
    }

`;

const WobbleEffect = keyframes` 

0% {
			transform:rotate(0deg);
			transform-origin:50% 0;
		}
		10% {
			transform:rotate(2deg);
		}
		20% {
			transform:rotate(-4deg);
		}
		30% {
			transform:rotate(6deg);
		}
		40% {
			transform:rotate(-6deg);
		}
		40% {
			transform:rotate(8deg);
		}
		60% {
			transform:rotate(-8deg);
		}
		70% {
			transform:rotate(6deg);
		}
		80% {
			transform:rotate(-6deg);
		}
		90% {
			transform:rotate(4deg);
		}
		100% {
			transform:rotate(0deg);
			transform-origin:50% 0;
		}

`;

const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;



const StyledBubbleWrapper = styled.section`
  position: fixed;
  text-align: center;
  bottom: 2rem;
  left: 1rem;
  z-index: 99;
`;

const StyledSpeechBubble = styled(FontAwesomeIcon)`
  position: relative;
  width: 4rem;
  height: 4rem;
  bottom: 2.5rem;
  left: 0rem;
  z-index: 99;
  color: var(--color-fourth);
  animation: ${({ $helpbuttonclicked }) => $helpbuttonclicked && FadeIn} 0.5s
    ease;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
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
  animation: ${({ helpbuttonclicked }) => helpbuttonclicked && FadeIn} 1s ease;
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
  &:hover {
    animation: ${WobbleEffect} 1s linear both infinite;
  }
`;

const StyledPhoneIcons = styled(FontAwesomeIcon)`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  text-align: center;
  &:hover {
    animation: ${PhoneRing} 1s linear both infinite;
  }
`;
