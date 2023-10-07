import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-scroll/modules"
import styled, { keyframes } from "styled-components";

export default function ScrollToTop({scrollY}) {
const [appearScrollToTopButton, setappearScrollToTopButton] = useState(false);
const [color, setColor] = useState(false);

useEffect(() => {
function handleToTopButtonAppearByScrolling() {
    if (typeof window !== "undefined") {
      window.onscroll = function () {
        if (window.scrollY > 1000) {
            setappearScrollToTopButton(true);
        } else {
            setappearScrollToTopButton(false);
        }
      };
    }
  }
  handleToTopButtonAppearByScrolling();
  },[scrollY]);

useEffect(() => { 
  function handleChangeColorByScrolling() {
    if(scrollY >= 2750) {
        setColor(true);
    } else {
        setColor(false);
    }
  } handleChangeColorByScrolling();


},[scrollY]);

    return(
        <>
        {appearScrollToTopButton && (
        <StyledSection $appearscrolltotopbutton={appearScrollToTopButton} >
        <Link to="randompicture" spy={true} smooth={false} offset={-70} duration={350} ><StyledIcon icon={faArrowUp} $color={color}/></Link>
        </StyledSection>)}</>

    )

}





const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;


const StyledSection = styled.section`
 position: fixed;
  width: 1.4rem;
  height: 1.4rem;
  bottom: 3.2rem;
  right: 5%;
  z-index: 99;
  
  animation: ${({ $appearscrolltotopbutton }) => $appearscrolltotopbutton && FadeIn} 0.5s
    ease;

    &:hover {
        color: var(--color-secondary);
        transition: all 0.5s ease;
    }

    &:not(:hover) {
        color: var(--color-fourth);
        transition: all 0.5s ease;
    }

    &:active {
        color: var(--color-fifth);
    }
`;


const StyledIcon = styled(FontAwesomeIcon)`
 color: ${({ $color }) => $color ? "#F5F6FF" : "#4B5E6B"};
 transition: all 0.5s ease;
`;