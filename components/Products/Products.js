import styled from "styled-components";
import ProductCard from "./Productcard";
import Greenbutton from "../Buttons/GreenButton";
import { useEffect, useState } from "react";
import { ProductData } from "./ProductData";
import ProductDetails from "./ProductDetails";
import Image from "next/image";

export default function Products({ device }) {
	const [showProductDetails, setShowProductDetails] = useState(false);
	const [activeProduct, setActiveProduct] = useState({});
	const [productIndex, setProductIndex] = useState(0);

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
					<StyledProductDesktopSection>
						{ProductData[productIndex] != undefined ? (
							<ProductCard
								key={ProductData[productIndex].id}
								src={ProductData[productIndex].src}
								alt={ProductData[productIndex].alt}
								headline={ProductData[productIndex].headline}
								infotext={ProductData[productIndex].infotext}
							>
								<StyledButtonWrapper>
									<Greenbutton
										margin={-2}
										onClick={() =>
											handleShowProductDetails(ProductData[productIndex].id)
										}
									>
										Mehr erfahren ...
									</Greenbutton>
								</StyledButtonWrapper>
							</ProductCard>
						) : null}
						{ProductData[productIndex + 1] != undefined ? (
							<ProductCard
								key={ProductData[productIndex + 1].id}
								src={ProductData[productIndex + 1].src}
								alt={ProductData[productIndex + 1].alt}
								headline={ProductData[productIndex + 1].headline}
								infotext={ProductData[productIndex + 1].infotext}
							>
								<StyledButtonWrapper>
									<Greenbutton
										margin={-2}
										onClick={() =>
											handleShowProductDetails(ProductData[productIndex + 1].id)
										}
									>
										Mehr erfahren ...
									</Greenbutton>
								</StyledButtonWrapper>
							</ProductCard>
						) : null}
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
							>
								<StyledButtonWrapper>
									<Greenbutton
										margin={-2}
										onClick={() => handleShowProductDetails(product.id)}
									>
										Mehr erfahren ...
									</Greenbutton>
								</StyledButtonWrapper>
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
	border-bottom: 2px solid var(--color-primary);
`;

const StyledProductWrapper = styled.section`
	margin-top: 4rem;
`;

const StyledButtonWrapper = styled.article`
	margin-left: 50%;
	@media (min-width: 1200px) {
		margin-left: 65%;

	}
`;

const StyledArticle = styled.article`
	font-size: var(--font-size-text);
	font-weight: 400;
	color: var(--color-fourth);
`;

const StyledProductSection = styled.section`
	@media (min-width: 1025px) {
	}
`;

const StyledProductDesktopSection = styled.section`
	margin: 10% 15%;
	display: flex;
	gap: 30px;
`;
