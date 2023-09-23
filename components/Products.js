import styled from "styled-components";
import ProductCard from "./Productcard";

export default function Products() {
  return (
    <StyledProductWrapper>
      <StyledHeadline>Unsere Produkte</StyledHeadline>
      <ProductCard
        src={"/ProductPictures/Produkt-1.jpg"}
        alt={"Bild einer gelben Krananlage an der Decke befestigt"}
        headline={"Krananlagen und Hebezeuge"}
        infotext={"Planen, beurteilen, modernisieren und optimieren"}
      />
      <ProductCard
        src={"/ProductPictures/Produkt-2.jpg"}
        alt={"Bild einer gelben Krananlage an der Decke befestigt"}
        headline={"Elektro- und Getriebemotoren"}
        infotext={
          "Wickeln, diagnostizieren, reparieren und der Verkauf aller Fabrikate"
        }
      />
      <ProductCard
        src={"/ProductPictures/Produkt-3.jpg"}
        alt={"Bild einer gelben Krananlage an der Decke befestigt"}
        headline={"Rund um Instandsetzung"}
        infotext={
          "warten, reparieren, instandhalten, umbauen und Ersatzteilservice"
        }
      />
      <ProductCard
        src={"/ProductPictures/Produkt-4.jpg"}
        alt={"Bild einer gelben Krananlage an der Decke befestigt"}
        headline={"Prüfungen"}
        infotext={
          "Abnahmeprüfungen, prüfung elektrischer Betriebsmittel, erstellung von Gefährdungsbeurteilungen"
        }
      />
      <ProductCard
        src={"/ProductPictures/Produkt-5.jpg"}
        alt={"Bild einer gelben Krananlage an der Decke befestigt"}
        headline={"Schulungen"}
        infotext={
          "für Personen, die Brückenkrane, Portalkrane, Säulenschwenkkrane und ähnliches bedienen sollen"
        }
      />
    </StyledProductWrapper>
  );
}

const StyledHeadline = styled.h1`
  margin-left: 10%;
  width: 8rem;
  border-bottom: 2px solid var(--color-primary);
`;

const StyledProductWrapper = styled.section`
  margin-top: 4rem;
`;
