import { faBars, faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled, { keyframes } from "styled-components";
import Logo from "./Logo";

export default function Navigation() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);

  function handleChangeMenuButton() {
    setMenuClicked(!menuClicked);
    setAnimationDone(!animationDone);
  }

  function handleChangeSearchButton() {
    setSearchClicked(!searchClicked);
  }
  return (
    <>
      <StyledNavigationBar>
        <StyledNavigationSection>
          <StyledShowOrHideMenuButton onClick={handleChangeMenuButton}>
            <StyledIconDescription>Menü</StyledIconDescription>
            {menuClicked ? (
              <>
                <StyledMenuIcon
                  icon={faX}
                  menuClicked={menuClicked}
                  animationDone={animationDone}
                />
              </>
            ) : (
              <StyledMenuIcon
                icon={faBars}
                menuClicked={menuClicked}
                animationDone={animationDone}
              />
            )}
          </StyledShowOrHideMenuButton>
          <StyledShowOrHideSearchButton onClick={handleChangeSearchButton}>
            <StyledIconDescription>Suche</StyledIconDescription>
            <StyledSearchIcon icon={faSearch} searchClicked={searchClicked} />
          </StyledShowOrHideSearchButton>
          <StyledInputSection>
            {searchClicked ? (
              <>
                <label id="suche"></label>
                <input id="suche" type="text" placeholder="Suche" />
              </>
            ) : (
              <StyledLogoSection>
                <Logo />
              </StyledLogoSection>
            )}
          </StyledInputSection>
        </StyledNavigationSection>

        {menuClicked && (
          <StyledUnsortedList>
            <Fade cascade damping={0.1}>
              <StyledListItems>Start</StyledListItems>

              <StyledListItems>Unsere Produkte</StyledListItems>

              <StyledListItems>Wer wir sind</StyledListItems>

              <StyledListItems>Karriere</StyledListItems>

              <StyledListItems>Kontakt</StyledListItems>
            </Fade>
          </StyledUnsortedList>
        )}
      </StyledNavigationBar>
    </>
  );
}
const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;

const Rotateforwards = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    transform: rotate(180deg);
    opacity: 1;
  }
`;

const StyledShowOrHideMenuButton = styled.button`
  border: none;
  background-color: transparent;
  grid-area: 1 / 1 / 2 / 2;
  padding: 0.5rem;
`;

const StyledShowOrHideSearchButton = styled.button`
  border: none;
  background-color: transparent;
  grid-area: 1 / 3 / 2 / 4;
`;

const StyledMenuIcon = styled(FontAwesomeIcon)`
  width: 2.2rem;
  height: 2.2rem;
  color: white;
  animation: ${({ animationDone, menuClicked }) =>
      animationDone ? (menuClicked ? Rotateforwards : "none") : FadeIn}
    0.7s ease;
  transition: all 0.7s ease;
`;

const StyledSearchIcon = styled(FontAwesomeIcon)`
  width: 2.2rem;
  height: 2.2rem;
  color: white;
`;

const StyledIconDescription = styled.p`
  color: white;
  margin: 0;
  font-size: var(--font-size-text);
`;

const StyledNavigationBar = styled.nav``;

const StyledNavigationSection = styled.section`
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 0;
  align-items: center;
  background-color: var(--color-fourth);
  width: 100%;
  height: 100%;
`;

const StyledUnsortedList = styled.ul`
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 0.5rem;
`;

const StyledListItems = styled.li`
  padding: 1.4rem;
  color: white;
  background-color: var(--color-fourth);
  border: 1px solid var(--color-third);
  font-size: var(--font-size-title);

  &:hover {
    background-color: var(--color-third);
    color: var(--color-fourth);
  }
`;

const StyledInputSection = styled.section`
  grid-area: 1 / 2 / 2 / 3;
`;

const StyledLogoSection = styled.section`
  grid-area: 1 / 2 / 2 / 3;
  width: 80%;
  text-align: center;
  margin: auto;
  border-bottom: 5px solid var(--color-fifth);
  border-top: 5px solid var(--color-secondary);
`;
