import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Greenbutton from "./GreenButton";
import { useEffect, useState } from "react";
import WindowCard from "./WindowCard";
import ContactData from "./ContactData";

export default function Randompicture() {
  const [counter, setCounter] = useState(1);
  const [contactClicked, setContactClicked] = useState(false);
  const [animationToggle, setAnimationToggle] = useState(true);

  function handleClickedPicture(onclickedNumber) {
    setCounter(onclickedNumber);
  }

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
  if(contactClicked === true) {
    document.body.style.overflow = "hidden"
  } else {document.body.style.overflow = "auto"}

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

  return (
    <StyledWrapper>
      <StyledProgressSection>
        <StyledProgressButton1
          $counter={counter}
          onClick={() => handleClickedPicture(1)}
        ></StyledProgressButton1>
        <StyledProgressButton2
          $counter={counter}
          onClick={() => handleClickedPicture(2)}
        ></StyledProgressButton2>
        <StyledProgressButton3
          $counter={counter}
          onClick={() => handleClickedPicture(3)}
        ></StyledProgressButton3>
        <StyledProgressButton4
          $counter={counter}
          onClick={() => handleClickedPicture(4)}
        ></StyledProgressButton4>
        <StyledProgressButton5
          $counter={counter}
          onClick={() => handleClickedPicture(5)}
        ></StyledProgressButton5>
      </StyledProgressSection>
      <StyledImageContainer>
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

      <StyledCardWrapper>
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
            <>
              <WindowCard
                headline={"Kontakt"}
                infotext={`Wir sind für Sie da. Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns auf Sie!`}
                onClick={handleContactUsButton}
                contactData={<ContactData />}
                animationTrigger={animationToggle}
              ></WindowCard>
            </>
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
  z-index: 1;
`;

const StyledProgressSection = styled.section`
  position: absolute;
  z-index: 2;
  padding: 0.3rem;
  left: 50%;
  right: 50%;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: fit-content;
  height: fit-content;
`;

const StyledProgressButton1 = styled.button`
  width: 0.7rem;
  height: 0.7rem;
  color: white;
  border: none;
  margin: 0.3rem;
  background-color: ${({ $counter }) =>
    $counter === 1 && "var(--color-primary)"};
`;

const StyledProgressButton2 = styled.button`
  width: 0.7rem;
  height: 0.7rem;
  color: white;
  border: none;
  margin: 0.3rem;
  background-color: ${({ $counter }) =>
    $counter === 2 && "var(--color-primary)"};
`;
const StyledProgressButton3 = styled.button`
  width: 0.7rem;
  height: 0.7rem;
  color: white;
  border: none;
  margin: 0.3rem;
  background-color: ${({ $counter }) =>
    $counter === 3 && "var(--color-primary)"};
`;
const StyledProgressButton4 = styled.button`
  width: 0.7rem;
  height: 0.7rem;
  color: white;
  border: none;
  margin: 0.3rem;
  background-color: ${({ $counter }) =>
    $counter === 4 && "var(--color-primary)"};
`;
const StyledProgressButton5 = styled.button`
  width: 0.7rem;
  height: 0.7rem;
  color: white;
  border: none;
  margin: 0.3rem;
  background-color: ${({ $counter }) =>
    $counter === 5 && "var(--color-primary)"};
`;
