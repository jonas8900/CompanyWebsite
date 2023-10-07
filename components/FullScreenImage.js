import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Greenbutton from "./GreenButton";

export default function FullScreenImage({src, alt, width, height , onClick, animationTrigger}) {

    return(
        <StyledImageWrapper $animationtrigger={animationTrigger}>
        <StyledImage src={src} alt={alt} width={width} height={height}/>
        <StyledButtonWrapper>
        <Greenbutton onClick={onClick}>schließen</Greenbutton></StyledButtonWrapper>

        </StyledImageWrapper>
    )


}


const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}

`;

const FadeOut = keyframes`
0% { opacity: 1;}
100% { opacity: 0; }
`;


const StyledImage = styled(Image)`
  width: 80%;
  height: 80%;
  position: absolute;
  object-fit: contain;
  top: 50%;
  left: 50%;
    transform: translate(-50%, -50%);
`;

const StyledImageWrapper = styled.section`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  animation: ${({ $animationtrigger }) =>
      $animationtrigger ? FadeOut : FadeIn}
    0.4s ease;
`;

const StyledButtonWrapper = styled.article`
  padding: 1rem;
  position: fixed;
  bottom: 0%;
  transform: translate(-0%, -35%);
  width: 80%;
  left: 0;
  margin: auto;
  z-index: 1;

`;