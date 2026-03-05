import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { useBodyScrollLock } from "../../lib/helper/BodyScrollBar";
import { Zap, Handshake, ShieldCheck } from "lucide-react"; // Moderne Icons

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Introtext() {
  const [windowAlert, setWindowAlert] = useState(0);
  useBodyScrollLock(windowAlert > 0);

  const brandGreen = "#2e7d32"; // Das kräftige Logo-Grün

  return (
    <StyledIntroContainer>
      <header>
        <Badge>Seit über 15 Jahren</Badge>
        <MainTitle>
          Das sind <span>wir</span>
        </MainTitle>
      </header>

      <ContentGrid>
        <TextSection>
          <p>
            Unser Unternehmen mit Sitz in Hannover, hat sich auf die Entwicklung und Fertigung von maßgeschneiderten Sonderkranlösungen spezialisiert.
          </p>
          <p>
            Dabei stehen die Kundenanforderungen im Mittelpunkt, wir erfüllen alle Wünsche an Anfahrmaße, 
            Geschwindigkeiten, Traglasten, Farbgebung (Corporate Identity) sowie die Einbindung in aktive oder neue Prozesse. 
            Durch spezielle Bauweisen und Sicherheitsanforderungen sowie unter Einhaltung der geltenden und gültigen Normen hat sich unser EMB-Sonderkranportfolio um 
            Krane- für Personentransport sowie für den Transport feuerflüssiger Massen erweitert.
          </p>
          <p>
            Erschwerte Einbringungssituationen welche besondere Demontage und Montagekonzepte erforderlich machen, sind für uns kein Hindernis.
          </p>
          <p>
            <b>Ihre speziellen Anforderungen sind unser Antrieb</b>
          </p>
          <p>
            Unser Portfolio wird durch unseren umfangreichen Kranservice abgerundet.
          </p>
          <p>
            Alles aus einer Hand.
          </p>
        </TextSection>

        <FeatureList>
          <FeatureCard color="dark">
            <IconWrapper>
              <Zap size={28} color={brandGreen} strokeWidth={2} />
            </IconWrapper>
            <TextContent>
              <h3>Schnell</h3>
              <p>Minimale Stillstandzeiten</p>
            </TextContent>
          </FeatureCard>

          <FeatureCard color="dark">
            <IconWrapper>
              <Handshake size={28} color="#ffffff" strokeWidth={2} />
            </IconWrapper>
            <TextContent>
              <h3>Kompentent</h3>
              <p>Know How im Sonderkranbau</p>
            </TextContent>
          </FeatureCard>

		<FeatureCard color="dark">
            <IconWrapper>
              <ShieldCheck size={28} color={brandGreen} strokeWidth={2} />
            </IconWrapper>
            <TextContent>
              <h3>Zuverlässig</h3>
              <p>Qualität nach Norm</p>
            </TextContent>
          </FeatureCard>
        </FeatureList>
      </ContentGrid>
    </StyledIntroContainer>
  );
}


const StyledIntroContainer = styled.main`
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 2rem;
  font-family: 'Inter', sans-serif;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 768px) {
    margin: 60px auto;
  }
`;

const Badge = styled.span`
  display: inline-block;
  background: #e9ffef;
  color: #2e7d32;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const MainTitle = styled.h1`
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  line-height: 1.1;
  color: #1a1a1a;
  margin-bottom: 3rem;

  span {
    color: #2e7d32; 
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background: rgba(46, 125, 50, 0.1);
      z-index: -1;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextSection = styled.article`
  p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 1.5rem;

    strong {
      color: #1a1a1a;
      border-bottom: 2px solid #2e7d32;
    }
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: center; 
  gap: 1.5rem;
  
  
  background: ${props => props.color === 'dark' ? '#2e7d32' : '#e9ffef'};
  color: ${props => props.color === 'dark' ? '#fff' : '#fff'};
  
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid rgba(46, 125, 50, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 12px 35px rgba(46, 125, 50, 0.15);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)'};
  padding: 12px;
  border-radius: 12px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
  }

  p {
    margin: 4px 0 0 0;
    font-size: 0.9rem;
    opacity: 0.8;
	color: #fff;
  }
`;