import Image from "next/image";
import styled from "styled-components";
import Greenbutton from "./GreenButton";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

export default function Randompicture() {
  const [count, setCount] = useState(1);

  function handleClickedPicture(onclickedNumber) {
    setCount(onclickedNumber);
  }

  useEffect(() => {
    const timeOutForCount = setInterval(() => {
      setCount((increaseCount) => {
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
    <>
      <StyledProgressSection>
        <StyledProgressButton1
          count={count}
          onClick={() => handleClickedPicture(1)}
        ></StyledProgressButton1>
        <StyledProgressButton2
          count={count}
          onClick={() => handleClickedPicture(2)}
        ></StyledProgressButton2>
        <StyledProgressButton3
          count={count}
          onClick={() => handleClickedPicture(3)}
        ></StyledProgressButton3>
        <StyledProgressButton4
          count={count}
          onClick={() => handleClickedPicture(4)}
        ></StyledProgressButton4>
        <StyledProgressButton5
          count={count}
          onClick={() => handleClickedPicture(5)}
        ></StyledProgressButton5>
      </StyledProgressSection>
      <Slide direction="right" duration={200} cascade>
        <StyledRandomImage
          key={count}
          src={`/Random-Kranbild-${count}.jpg`}
          alt="Zufälliges Bild einer Krananlage"
          width={390}
          height={219}
          count={count}
        />
        <StyledCardWrapper>
          <StyledCardSection>
            <h1>Was wir können</h1>
            <p>
              Planung, Lieferung, Montage, Reparatur und Wartung von
              individuellen Krananlagen.
            </p>
            <Greenbutton>Kundenerfahrungen</Greenbutton>
          </StyledCardSection>
        </StyledCardWrapper>
      </Slide>
    </>
  );
}

const StyledRandomImage = styled(Image)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
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
  right: 30%;
  left: 30%;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
`;

const StyledProgressButton1 = styled.button`
  width: 0.7rem;
  height: 0.7rem;
  color: white;
  border: none;
  margin: 0.3rem;
  background-color: ${({ count }) => count === 1 && "var(--color-primary)"};
`;

const StyledProgressButton2 = styled.button`
  width: 0.7rem;
  height: 0.7rem;
  color: white;
  border: none;
  margin: 0.3rem;
  background-color: ${({ count }) => count === 2 && "var(--color-primary)"};
`;
const StyledProgressButton3 = styled.button`
  width: 0.7rem;
  height: 0.7rem;
  color: white;
  border: none;
  margin: 0.3rem;
  background-color: ${({ count }) => count === 3 && "var(--color-primary)"};
`;
const StyledProgressButton4 = styled.button`
  width: 0.7rem;
  height: 0.7rem;
  color: white;
  border: none;
  margin: 0.3rem;
  background-color: ${({ count }) => count === 4 && "var(--color-primary)"};
`;
const StyledProgressButton5 = styled.button`
  width: 0.7rem;
  height: 0.7rem;
  color: white;
  border: none;
  margin: 0.3rem;
  background-color: ${({ count }) => count === 5 && "var(--color-primary)"};
`;
