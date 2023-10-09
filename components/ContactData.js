import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export default function ContactData() {
  return (
        <StyledSection>
          <StyledHeadline1>Tim Dally</StyledHeadline1>
          <StyledArticle>
            <StyledLink href="tel:017626246722">
              <StyledPhoneIcon icon={faPhone} /> 0176 262 46722
            </StyledLink>
          </StyledArticle>
          <StyledArticle>
            <StyledLink href="mailto:tim.dally@emb-schulze.de">
              <StyledMailIcon icon={faEnvelope} />
              tim.dally@emb-schulze.de
            </StyledLink>
          </StyledArticle>
        </StyledSection>
      );
    }
    


const PhoneRing = keyframes`

    0% {
        transform: rotate(0) scale(1) skew(1deg)
    }
    10% {
        transform: rotate(-25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-third);
        padding: 0rem;
    }
    20% {
        transform: rotate(25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-secondary);
        color: black;
    }
    30% {
        transform: rotate(-25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-secondary);
        color: black;
    }
    40% {
        transform: rotate(25deg) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 50%;
        background-color: var(--color-secondary);
        color: black
    }
    50% {
        transform: rotate(0) scale(1.5) skew(1deg);
        border: 1px solid transparent; 
        border-radius: 100%;
        background-color: var(--color-secondary)

    }
    100% {
        transform: rotate(0) scale(1) skew(1deg);
    }

`;

const MailScaling = keyframes` 

0% {
			transform:rotate(0deg);
			transform-origin:50% 0;
		}
		10% {
			transform:rotate(2deg);
		}
		20% {
			transform:rotate(-4deg);
		}
		30% {
			transform:rotate(6deg);
		}
		40% {
			transform:rotate(-6deg);
		}
		40% {
			transform:rotate(8deg);
		}
		60% {
			transform:rotate(-8deg);
		}
		70% {
			transform:rotate(6deg);
		}
		80% {
			transform:rotate(-6deg);
		}
		90% {
			transform:rotate(4deg);
		}
		100% {
			transform:rotate(0deg);
			transform-origin:50% 0;
		}

`;

const StyledPhoneIcon = styled(FontAwesomeIcon)`
  width: 1.3rem;
  height: 1.3rem;
  align-self: center;
  justify-self: center;
  text-align: center;
  margin-right: 0.5rem;

  &:hover {
    animation: ${PhoneRing} 1s;
  }
`;

const StyledMailIcon = styled(FontAwesomeIcon)`
  width: 1.3rem;
  height: 1.3rem;
  align-self: center;
  justify-self: center;
  text-align: center;
  margin-right: 0.5rem;
  transform: translateX(0);
  opacity: 1;

  &:hover {
    animation: ${MailScaling} 1s linear both;
  }
`;

const StyledArticle = styled.article`
font-size: var(--font-size-subtitle);
  font-weight: 700;
  color: var(--color-fourth);
  
  `;

const StyledHeadline1 = styled.h2`
  width: 4rem;
  height: 1.5rem;
  border-bottom: 4px solid #baffc6;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: left;
  text-decoration: none;
  margin-top: 0.6rem;
  color: var(--color-fourth);
`;


const StyledSection = styled.section`
`;