import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Greenbutton from "./GreenButton";
import { useEffect, useState } from "react";
import WindowCard from "./WindowCard";
import ContactData from "./ContactData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Randompicture() {
  const [counter, setCounter] = useState(1);
  const [contactClicked, setContactClicked] = useState(false);
  const [animationToggle, setAnimationToggle] = useState(true);


  function handleContactUsButton() {
    setAnimationToggle(!animationToggle);
    if (contactClicked === true) {
      setTimeout(() => {
        setContactClicked(!contactClicked);
      }, 400);
    } else {
      setContactClicked(!contactClicked);
    }
  }
  //useEffect to prevent scrolling in the blured background when contact window is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      if(contactClicked === true) {
        document.body.style.overflow = "hidden"
      } else {document.body.style.overflow = "auto"}
    }}, [contactClicked]);


//use a function with to change the picture every 10 seconds
  useEffect(() => {
    const timeOutForCount = setInterval(() => {
      setCounter((increaseCount) => {
        if (increaseCount >= 5) {
          return 1;
        } else {
          return increaseCount + 1;
        }
      });
    }, 10000);

    return () => clearInterval(timeOutForCount);
  }, []);


function handleClickLeftButtonToChangePicture() {
  if(counter === 1) {
    setCounter(5)
  } else {
  setCounter(counter - 1);}
}
function handleClickRightButtonToChangePicture() {
  if(counter === 5) {
    setCounter(1)} 
    else {
  setCounter(counter + 1); }
}

  return (
    <StyledWrapper id="randompicture">


      <StyledProgressSection >
        <StyledProgressDiv1 $counter={counter} ></StyledProgressDiv1>
        <StyledProgressDiv2 $counter={counter} ></StyledProgressDiv2>
        <StyledProgressDiv3 $counter={counter} ></StyledProgressDiv3>
        <StyledProgressDiv4 $counter={counter} ></StyledProgressDiv4>
        <StyledProgressDiv5 $counter={counter} ></StyledProgressDiv5>
      </StyledProgressSection>
      <StyledImageContainer>      
        <StyledArrowLeft icon={faCaretLeft} onClick={handleClickLeftButtonToChangePicture}/>
      <StyledArrowRight icon={faCaretRight} onClick={handleClickRightButtonToChangePicture}/>
        <StyledRandomImage
          key={counter}
          src={`/Random-Kranbild-${counter}.jpg`}
          alt="Zufälliges Bild einer Krananlage"
          width={390}
          height={219}
          counter={counter}
          priority={true}
        />
      </StyledImageContainer>

      <StyledCardWrapper $contactclicked={contactClicked}>
        <StyledCardSection>
          <h1>Was wir können</h1>
          <p>
            Planung, Lieferung, Montage, Reparatur und Wartung von individuellen
            Krananlagen.
          </p>
          <Greenbutton onClick={handleContactUsButton}>
            Kontaktieren Sie uns
          </Greenbutton>
          {contactClicked && (

              <WindowCard
                headline={"Kontakt"}
                infotext={`Wir sind für Sie da. Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns auf Sie!`}
                onClick={handleContactUsButton}
                contactData={<ContactData />}
                animationTrigger={animationToggle}
              ></WindowCard>

          )}
        </StyledCardSection>
      </StyledCardWrapper>
    </StyledWrapper>
  );
}

const Left = keyframes`
0% { opacity: 0;}
100% { opacity: 1; }
`;

const StyledWrapper = styled.main`
  margin-bottom: 12rem;
`;

const StyledRandomImage = styled(Image)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  object-fit: cover;
  z-index: 0;
  animation: ${({ counter }) => counter >= 1 && Left} 1.5s ease;
`;

const StyledImageContainer = styled.section`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`;

const StyledCardSection = styled.article`
  width: 70%;
  margin: auto;
  margin-left: 2rem;
`;

const StyledCardWrapper = styled.section`
  position: absolute;
  border-radius: 9px;
  background-color: var(--color-third);
  width: 80%;
  left: 10%;
  right: 10%;
  margin: auto;
  margin-top: -1rem;
  z-index: ${({ $contactclicked }) => ($contactclicked ? 1000 : 1)};
`;

const StyledProgressSection = styled.section`
  position: absolute;
  z-index: 2;
  padding: 0rem;
  left: 50%;
  right: 50%;
  display: flex;
  justify-content: center;
`;


const StyledArrowRight = styled(FontAwesomeIcon)`
  position: absolute;
  z-index: 2;
  right: 0%;
  top: 40%;
  width: 2.5rem;
  height: 2.5rem;
  color: black;
  border: none;
  margin: 0.3rem;

  &:hover {
    color: white;
    transition: all 0.5s ease;
  }
  &:not(:hover) {
    color: black;
    transition: all 0.5s ease;
  }

  &:active {
    color: var(--color-fifth);
    transition: all 0.1s ease;
  }
`;
const StyledArrowLeft = styled(FontAwesomeIcon)`
  position: absolute;
  z-index: 2;
  left: 0%;
  top: 40%;
  width: 2.5rem;
  height: 2.5rem;
  color: black;
  border: none;
  margin: 0.3rem;

  &:hover {
    color: white;
    transition: all 0.5s ease;
  }
  &:not(:hover) {
    color: black;
    transition: all 0.5s ease;
  }

  &:active {
    color: var(--color-fifth);
    transition: all 0.1s ease;
  }
`;

const StyledProgressDiv1 = styled.div`
width: 0.7rem;
height: 0.7rem;
margin: 0.3rem;
min-width: 0.7rem;
min-height: 0.7rem;
background-color: ${({ $counter }) =>
    $counter === 1 ? "var(--color-primary)" : "var(--color-third)"};
`;
const StyledProgressDiv2 = styled.div`
width: 0.7rem;
height: 0.7rem;
margin: 0.3rem;
min-width: 0.7rem;
min-height: 0.7rem;
background-color: ${({ $counter }) =>
    $counter === 2 ? "var(--color-primary)" : "var(--color-third)"};
`;
const StyledProgressDiv3 = styled.div`
width: 0.7rem;
height: 0.7rem;
margin: 0.3rem;
min-width: 0.7rem;
min-height: 0.7rem;
background-color: ${({ $counter }) =>
    $counter === 3 ? "var(--color-primary)" : "var(--color-third)"};
`;
const StyledProgressDiv4 = styled.div`
width: 0.7rem;
height: 0.7rem;
margin: 0.3rem;
min-width: 0.7rem;
min-height: 0.7rem;
background-color: ${({ $counter }) =>
    $counter === 4 ? "var(--color-primary)" : "var(--color-third)"};
`;
const StyledProgressDiv5 = styled.div`
width: 0.7rem;
height: 0.7rem;
margin: 0.3rem;
min-width: 0.7rem;
min-height: 0.7rem;
background-color: ${({ $counter }) =>
    $counter === 5 ? "var(--color-primary)" : "var(--color-third)"};
`;
