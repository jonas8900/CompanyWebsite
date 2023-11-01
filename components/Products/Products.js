import styled from "styled-components";
import ProductCard from "./Productcard";
import { useEffect, useState } from "react";
import { ProductData } from "./ProductData";
import ProductDetails from "./ProductDetails";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css";

import ProductSlideShow from "./ProductSlideShow";

export default function Products({ device }) {
	const [showProductDetails, setShowProductDetails] = useState(false);
	const [activeProduct, setActiveProduct] = useState({});

	function handleShowProductDetails(productIndexFromCard) {
		setShowProductDetails(true);
		setActiveProduct(ProductData[productIndexFromCard - 1]);
	}

	function handleCloseWindow() {
		setShowProductDetails(false);
	}
	useEffect(() => {
		if (typeof window !== "undefined") {
			if (showProductDetails === true) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		}
	}, [showProductDetails]);


	return (
		<>
			{device ? (
				<>
					<StyledHeadline id="products">Unsere Produkte</StyledHeadline>
					<ProductSlideShow
						handleShowProductDetails={handleShowProductDetails}
					/>
					<StyledProductDesktopSection>
						{showProductDetails && (
							<>
								<ProductDetails
									headline={activeProduct.headline}
									infotext={activeProduct.productDescription}
									contactData={
										<StyledArticle>
											{activeProduct.productDetails}
										</StyledArticle>
									}
									imageGalery={
										activeProduct.images != undefined
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
					</StyledProductDesktopSection>
				</>
			) : (
				<StyledProductWrapper id="products">
					<StyledHeadline>Unsere Produkte</StyledHeadline>
					<StyledProductSection>
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
					</StyledProductSection>
					{showProductDetails && (
						<>
							<ProductDetails
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
			)}
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
		text-shadow: 1px 3px 1px #eee;
	}
	border-bottom: 2px solid var(--color-primary);
`;


const StyledProductWrapper = styled.section`
	margin-top: 4rem;
	max-width: 2000px;
`;

const StyledArticle = styled.article`
	font-size: var(--font-size-text);
	font-weight: 400;
	color: var(--color-fourth);
`;

const StyledProductSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin-bottom: 2rem;
`;

const StyledProductDesktopSection = styled.section`
	margin: 5% 15%;
	display: flex;
	gap: 30px;
	position: relative;
`;

