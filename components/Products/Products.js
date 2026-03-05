import styled from "styled-components";
import ProductCard from "./Productcard";
import { useEffect, useState } from "react";
import { ProductData } from "./ProductData";
import ProductDetails from "./ProductDetails";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css"; 

import { useBodyScrollLock } from "../../lib/helper/BodyScrollBar";


export default function Products({ device }) {
	const [showProductDetails, setShowProductDetails] = useState(false);
	const [activeProduct, setActiveProduct] = useState({});
	const [animationToggle, setAnimationToggle] = useState(false);

	function handleShowProductDetails(productIndexFromCard) {
		setShowProductDetails(true);
		setAnimationToggle(false);
		setActiveProduct(ProductData[productIndexFromCard - 1]);
	}

	function handleCloseWindow() {
		if (animationToggle) return; 

		setAnimationToggle(true);
		setTimeout(() => {
			setShowProductDetails(false);
			setAnimationToggle(false);
		}, 360);
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
							subheadline={product.subheadline}
							infotext={product.infotext}
							onClick={() => handleShowProductDetails(product.id)}
						>
							Mehr erfahren
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
								activeProduct.images != undefined 
									? activeProduct.images.map((image) => (
											<Image
												src={image}
												key={image}
												alt="Produktbild"
												width={500}
												height={500}
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
	font-size: 2rem;
	font-weight: 700;
	color: var(--color-fourth);
	text-align: center;
	margin-bottom: 3rem;
	position: relative;
	padding-bottom: 1rem;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 3px;
		background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
	}

	@media (min-width: 768px) {
		font-size: 2.25rem;
		margin-bottom: 4rem;
	}

	@media (min-width: 1024px) {
		font-size: 2.5rem;
	}
`;

const StyledProductWrapper = styled.section`
	margin: 6rem auto;
	padding: 0 1.5rem;
	max-width: 1600px;

	@media (min-width: 768px) {
		padding: 0 2rem;
	}
`;

const StyledArticle = styled.article`
	font-size: var(--font-size-text);
	font-weight: 400;
	color: var(--color-fourth);
`;

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    max-width: 1250px;
    margin: 0 auto;
  }
`;

// Diese Styled-Component wird nicht mehr benötigt, da ProductSlideShow entfernt wurde.
// const StyledProductDesktopSection = styled.section`
// 	margin: 5% 15%;
// 	display: flex;
// 	gap: 30px;
// 	position: relative;
// `;