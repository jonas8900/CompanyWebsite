import styled, { keyframes } from "styled-components";
import Greenbutton from "./GreenButton";
import { Fade } from "react-awesome-reveal";

export default function WindowCard({
  headline,
  infotext,
  onClick,
  subheadline,
}) {
  return (
    <>
      <StyledWindow>
        <StyledInformationCard>
          <h3>{headline}</h3>
          <p>{infotext}</p>
          <Greenbutton onClick={onClick}>Schließen</Greenbutton>
        </StyledInformationCard>
      </StyledWindow>
    </>
  );
}

const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}

`;

const StyledWindow = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  animation: ${FadeIn} 0.5s ease;
`;

const StyledInformationCard = styled.article`
  padding: 1rem;
  position: fixed;
  top: 35%;
  transform: translate(-0%, -35%);
  border-radius: 9px;
  background-color: var(--color-third);
  width: 80%;
  left: 10%;
  right: 10%;
  margin: auto;
  z-index: 1;
`;
