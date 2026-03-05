import Image from "next/image";
import styled, {  css } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import { useState } from "react";

import { useBodyScrollLock } from "../../lib/helper/BodyScrollBar";
import { Link } from "react-scroll";
import ContactData from "./ContactData";

export default function ModernRandomPicture({device}) {
	const [isInfoBoxHovered, setIsInfoBoxHovered] = useState(false);
	const [contactDataOpen, setContactDataOpen] = useState(false);
	const [animationToggle, setAnimationToggle] = useState(false);

	function handleContactUsButton() {
		setContactDataOpen(true);
		setAnimationToggle(false);
	}

	function handleCloseContactData() {
		if (animationToggle) return; 

		setAnimationToggle(true);
		setTimeout(() => {
			setContactDataOpen(false);
			setAnimationToggle(false);
		}, 360);
	}

	useBodyScrollLock(contactDataOpen);


	return (
		<>
			<StyledWrapper id="introtext">
				<StyledProgressSection>
				</StyledProgressSection>
				<StyledImageContainer data-image-src={`/Random-Kranbild-0.webp`} $ishovered={isInfoBoxHovered}>
					<StyledRandomImage
						src={`/Random-Kranbild-0.webp`}
						alt="Zufälliges Bild einer Krananlage"
						fill
						priority={true}
						sizes="100vw"
					/>


					<StyledInfoBox
						onMouseEnter={() => setIsInfoBoxHovered(true)}
						onMouseLeave={() => setIsInfoBoxHovered(false)}
						$ishovered={isInfoBoxHovered}
					>
						<div className="content">
							<h1>Ihr Partner für maßgeschneiderte Lösungen im Sonderkranbau und Service</h1>
							<p>Schauen Sie sich jetzt um oder kontaktieren Sie uns</p>
							<div className="buttons">
								<Link to="products" smooth={true} duration={500}>
									<Greenbutton>Unsere Produkte</Greenbutton>
								</Link>
								<Greenbutton onClick={handleContactUsButton}>Kontakt</Greenbutton>
							</div>
						</div>
					</StyledInfoBox>
				</StyledImageContainer>
					<StyledMobileImageText>
						<h1>Ihr Partner für maßgeschneiderte Lösungen im Sonderkranbau und Service</h1>
						<p>Schauen Sie sich jetzt um oder kontaktieren Sie uns</p>
						<div className="buttons">
							<Link to="products" smooth={true} duration={500}>
								<Greenbutton>Unsere Produkte</Greenbutton>
							</Link>
							<Greenbutton onClick={handleContactUsButton}>Kontakt</Greenbutton>
						</div>
					</StyledMobileImageText>
			</StyledWrapper>

			{contactDataOpen && (
				<ContactData
					onClick={handleCloseContactData}
					animationTrigger={animationToggle}
				/>
			)}
		</>
	);
}

const StyledWrapper = styled.section`
	height: 100%;
	position: relative;
	top: 0%;
`;

const StyledImageContainer = styled.section`
  position: relative;
  width: 100%;
  height: 42vh;
  overflow: hidden;

  @media (min-width: 1025px) {
    height: 100vh;
    &:before {
      content: '';
      position: absolute;
      top: -10%;
      left: -10%;
      width: 120%;
      height: 120%;
      background-image: url(${props => props['data-image-src']});
      background-size: cover;
      background-position: center;
      filter: blur(8px) brightness(${props => props.$ishovered ? 0.6 : 0.8});
      transition: filter 0.3s ease;
      z-index: 0;
      pointer-events: none;
    }
  }
`;

const StyledRandomImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  z-index: 1;

  @media (min-width: 1025px) {
    object-fit: contain;
    z-index: 2;
  }
`;

const StyledMobileImageText = styled.div`
  width: min(92%, 500px);
  margin: 2rem auto;
  padding: 1.75rem 1.25rem;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  text-align: center;

  h1 {
    margin: 0 0 0.75rem 0;
    color: #fff;
    font-weight: 700;
    font-size: clamp(1.1rem, 4.5vw, 1.6rem);
    line-height: 1.3;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  }

  p {
    color: #eee;
    font-size: clamp(0.9rem, 3.5vw, 1.05rem);
    margin: 0 0 1.25rem 0;
    line-height: 1.5;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;

    a {
      width: 100%;
    }

    button {
      width: 100%;
      font-size: 0.95rem;
    }
  }

  @media (min-width: 500px) {
    .buttons {
      flex-direction: row;
      justify-content: center;

      a {
        width: auto;
      }

      button {
        width: auto;
      }
    }
  }

  @media (min-width: 768px) {
    width: min(85%, 550px);
    padding: 2rem 1.5rem;

    h1 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }

    .buttons {
      gap: 1rem;
    }
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

const StyledInfoBox = styled.div`
	display: none;

	@media (min-width: 1025px) {
		display: block;
		position: absolute;
		z-index: 5;
		left: 5%;
		top: 50%;
		transform: translateY(-50%);
		width: clamp(400px, 35%, 650px);
		padding: 2rem;
		border-radius: 12px;
		background: rgba(10, 10, 10, 0.1);
		backdrop-filter: blur(0px);
		transition: background 0.3s ease, backdrop-filter 0.3s ease;

		${props => props.$ishovered && css`
			background: rgba(10, 10, 10, 0.4);
			backdrop-filter: blur(12px);
		`}

		h1 {
			color: white;
			font-size: 2.5rem;
			font-weight: 700;
			text-shadow: 0 2px 8px rgba(0,0,0,0.5);
			margin-bottom: 1rem;
		}

		p {
			color: #eee;
			font-size: 1.1rem;
			margin-bottom: 2rem;
		}

		.buttons {
			display: flex;
			gap: 1rem;
		}
	}
`;


const StyledProgressSection = styled.section`
	position: absolute;
	z-index: 2;
	bottom: 1.5rem;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: center;

	div {
		cursor: pointer;
	}
`;
