import Greenbutton from "./GreenButton";
import styled, { keyframes } from "styled-components";


export default function ImageFolder({
  animationTrigger,
  children,
  onClick,
  value,
}) {
  return (
    <>
      <StyledWindow $animationtrigger={animationTrigger}>
        <StyledImagWrapper>
          <StyledImageContainer>{children}</StyledImageContainer>
          <StyledButtonArticle>
            <Greenbutton onClick={onClick} $value={value}>
              Schließen
            </Greenbutton>
          </StyledButtonArticle>
        </StyledImagWrapper>
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

const StyledImagWrapper = styled.article`
  padding: 1rem;
  position: fixed;
  top: 40%;
  transform: translate(-0%, -35%);
  border-radius: 9px;
  background-color: var(--color-third);
  width: 80%;
  left: 10%;
  right: 10%;
  margin: auto;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
`;

const StyledImageContainer = styled.article`
  margin-bottom: 4rem;
`;

const StyledButtonArticle = styled.article`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
`;
