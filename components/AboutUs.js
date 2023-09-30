import styled from "styled-components";
import Greenbutton from "./GreenButton";
import Image from "next/image";

export default function AboutUs() {
    return (
      <>
       
        <StyledAboutUsSection> 
          <StyledHeadline>Wer sind wir?</StyledHeadline>
          <p>
            Wir sind ein Unternehmen mit <b>Sitz in Hannover</b>, welches sich
            vollumfänglich <b>auf Krananlagen spezialisiert</b> hat. <br />
            <br /> <b>Unsere Kernkompetenz</b> liegt in der{" "}
            <b>Herstellung und Fertigung von Krananlagen</b> nach Kundenvorgaben,
            sowie Modernisierung und Umbau von bestehenden Krananlagen, mit dem
            Ziel Ihnen einen Mehrwert zu bieten. Dabei agieren wir
            Herstellerunabhängig. <br />
            <br /> Wir unterstützen Sie von der <b>Planung</b> bis zur{" "}
            <b>Umsetzung</b> und gehen dabei immer auf Ihre Vorstellungen und
            Wünsche ein. <br />
            <br />
            Für uns gibt es keine Probleme, nur Herausforderungen, zu denen wir
            Lösungen finden!
          </p>
          <StyledSubHeadline>
            Weiterer Bestandteil unserer Dienstleistungen sind:
          </StyledSubHeadline>
          <StyledList>
            <li>
              Jährlich vorgeschriebenen Sicherheitsüberprüfung nach DGUV V52 und
              DGUV V54 an Krananlagen, Hebezeugen, Winden, Hub- und Zuggeräten.
              Herstellerunabhängig
            </li>
            <li>Elektrischen Prüfung nach DGUV V3.</li>
            <li>Wartung/Inspektion nach Herstellervorgaben.</li>
            <li>Störungsbeseitigung, Notfallreparaturen.</li>
            <li>Mängelbeseitigung nach durchgeführten UVV-Prüfungen.</li>
            <li>Beschaffung von Ersatzteilen.</li>
            <li>Kranführerschulungen.</li>
          </StyledList>
          <p>
            <b>Bei akutem Störungsfall</b> unserer Bestandskunden sind wir in der
            Lage,
            <b>schnell und flexibel</b> gemäß Ihren Vorgaben zu reagieren, um
            Ihren Produktionsablauf nicht zu unterbrechen. <br />
            <br />
            Zusammengefasst: wir können Ihnen jede Servicedienstleistung für Ihre
            Krananlagen bieten.
          </p>
        </StyledAboutUsSection>
        <StyledCertificateSection>
          <StyledCertificateArticleLeft>
            <StyledImage
              src="/Zertifikat.png"
              width={99}
              height={142}
              alt="Bild eines ISO - Zertifikates"
            />
            <Greenbutton margin={-2}>Zertifikate</Greenbutton>
          </StyledCertificateArticleLeft>
          <StyledCertificateArticleRight>
            <StyledImage
              src="/Richtlinien.png"
              width={99}
              height={142}
              alt="Bild eines ISO - Zertifikates"
            />
            <Greenbutton margin={-2}>Richtlinien</Greenbutton>
          </StyledCertificateArticleRight>
        </StyledCertificateSection>
      </>
    );
  }
  
  const StyledAboutUsSection = styled.section`
    border-top: 1px solid grey;
    margin: auto 10% auto 10%;
  `;
  
  const StyledHeadline = styled.h1`
    width: 6.5rem;
    border-bottom: 2px solid var(--color-primary);
  `;
  
  const StyledList = styled.ul`
    font-size: var(--font-size-text);
    font-weight: 400;
    display: grid;
    gap: 0.5rem;
    color: var(--color-fourth);
    padding: 1rem;
    margin-top: 0;
  `;
  
  const StyledSubHeadline = styled.h3`
    font-size: var(--font-size-text);
    font-weight: 400;
    color: var(--color-fourth);
  `;
  
  const StyledCertificateSection = styled.section`
    display: flex;
    margin: 2rem 10% 2rem 10%;
    justify-content: space-between;
    object-fit: contain;

  `;
  
  const StyledCertificateArticleLeft = styled.article`
    width: 100%;
    height: 100%;
    background-color: var(--color-third);
    display: grid;
    gap: 2rem;
    grid-area: 1 / 1 / 2 / 2;
    padding: 1rem;
    max-width: 420px;
    margin-right: 1rem;
    margin-bottom: 0;
  `;
  
  const StyledCertificateArticleRight = styled.article`
    width: 100%;
    height: 100%;
    background-color: var(--color-third);
    display: grid;
    gap: 2rem;
    margin-right: 0;
    grid-area: 1 / 2 / 2 / 3;
    padding: 1rem;
    max-width: 420px;
  `;
  
  const StyledImage = styled(Image)`
    margin: auto;
    height: auto;
    width: auto;
    object-fit: contain;
  `;