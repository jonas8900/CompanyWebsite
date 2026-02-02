import styled from "styled-components";
import ProductCard from "./Productcard";
import { useEffect, useState } from "react";
import { ProductData } from "./ProductData";
import ProductDetails from "./ProductDetails";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css"; // Diese Zeile kann entfernt werden, wenn das Carousel nicht mehr verwendet wird.

import { useBodyScrollLock } from "../../lib/helper/BodyScrollBar";


export default function Products({ device }) {
	const [showProductDetails, setShowProductDetails] = useState(false);
	const [activeProduct, setActiveProduct] = useState({});
	const [animationToggle, setAnimationToggle] = useState(false);

	function handleShowProductDetails(productIndexFromCard) {
		setShowProductDetails(true);
		// ProductData IDs starten bei 1, Array-Indizes bei 0, daher -1
		setActiveProduct(ProductData[productIndexFromCard - 1]);
	}

	function handleCloseWindow() {
		setAnimationToggle(true);
		setTimeout(() => {
			setShowProductDetails(false);
			setAnimationToggle(false);
		}, 350);
	}

	useBodyScrollLock(showProductDetails);

	return (
		<>
			<StyledProductWrapper id="products">
				<StyledHeadline>Unsere Produkte</StyledHeadline>
				<StyledProductGrid>
					{ProductData.map((product) => (
						<ProductCard
							key={product.id}
							src={product.src}
							alt={product.alt}
							headline={product.headline}
							infotext={product.infotext}
							onClick={() => handleShowProductDetails(product.id)}
						>
							{" "}
							Mehr erfahren ...
						</ProductCard>
					))}
				</StyledProductGrid>
				{showProductDetails && (
					<>
						<ProductDetails
							animationTrigger={animationToggle}
							headline={activeProduct.headline}
							infotext={activeProduct.productDescription}
							contactData={
								<StyledArticle>{activeProduct.productDetails}</StyledArticle>
							}
							imageGalery={
								activeProduct.images != undefined // Das bleibt, auch wenn `images` noch nicht in ProductData ist
									? activeProduct.images.map((image) => (
											<Image
												src={image}
												key={image}
												alt="Produktbild"
												width={100}
												height={100}
											/>
									  ))
									: null
							}
							onClick={handleCloseWindow}
						/>
					</>
				)}
			</StyledProductWrapper>
		</>
	);
}

const StyledHeadline = styled.h1`
	margin-left: 10%;
	width: 8rem;
	@media (min-width: 768px) {
		width: 10.5rem;
	}
	@media (min-width: 1025px) {
		margin-top: 5%;
    margin-left: 0; /* Für Desktop linksbündig */
		text-shadow: 1px 3px 1px #eee;
	}
	border-bottom: 2px solid var(--color-primary);
  margin-bottom: 2rem; /* Abstand nach unten hinzufügen */
`;

const StyledProductWrapper = styled.section`
	margin: 4rem auto; /* Zentrieren und vertikalen Abstand */
	padding: 0 1rem;
	max-width: 1200px; /* Maximale Breite für den Inhalt */
`;

const StyledArticle = styled.article`
	font-size: var(--font-size-text);
	font-weight: 400;
	color: var(--color-fourth);
`;

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Eine Spalte auf kleinen Bildschirmen */
  gap: 2rem; /* Abstand zwischen den Kacheln */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Zwei Spalten auf Tablets */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Drei Spalten auf Desktops */
  }
`;

// Diese Styled-Component wird nicht mehr benötigt, da ProductSlideShow entfernt wurde.
// const StyledProductDesktopSection = styled.section`
// 	margin: 5% 15%;
// 	display: flex;
// 	gap: 30px;
// 	position: relative;
// `;