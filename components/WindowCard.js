import styled, { keyframes } from "styled-components";
import Greenbutton from "./GreenButton";


export default function WindowCard({
  headline,
  infotext,
  onClick,
  value,
  animationTrigger,
  contactData,
}) {



  return (
    <>
      <StyledWindow $animationtrigger={animationTrigger}>
        <StyledInformationCard>
          <h3>{headline}</h3>
          <p>{infotext}</p>
          <StyledContactData>{contactData}</StyledContactData>
          <Greenbutton onClick={onClick} $value={value}>
            Schließen
          </Greenbutton>
        </StyledInformationCard>
      </StyledWindow>
    </>
  );
}


const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}

`;

const FadeOut = keyframes`
0% { opacity: 1;}
100% { opacity: 0; }
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
  animation: ${({ $animationtrigger }) =>
      $animationtrigger ? FadeOut : FadeIn}
    0.4s ease;
`;

const StyledContactData = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-top: 1px solid grey;
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
