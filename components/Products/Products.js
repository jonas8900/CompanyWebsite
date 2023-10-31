import styled, { keyframes } from "styled-components";
import ProductCard from "./Productcard";
import { useEffect, useState } from "react";
import { ProductData } from "./ProductData";
import ProductDetails from "./ProductDetails";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import ProductSlideShow from "./ProductSlideShow";

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

	function handleAddIndexForPicture() {
		setRightArrowClicked(true);

		setTimeout(() => {
			setProductIndex((productIndex + 1) % ProductData.length);
			setRightArrowClicked(false);
		}, 350);
	}

	function handleSubtractIndexForPicture() {
		setleftArrowClicked(true);
		setProductIndex(
			(productIndex - 1 + ProductData.length) % ProductData.length
		);
		setTimeout(() => {
			setleftArrowClicked(false);
		}, 350);
	}
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

const StyledDiv = styled.div`
	padding-right: 4rem;
	padding-left: 4rem;
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

const StyledArrowLeft = styled(FontAwesomeIcon)`
	position: absolute;
	left: -15%;
	top: 40%;
	color: var(--color-fourth);
	transform: translateY(-40%);
	width: 4rem;
	height: 4rem;
	cursor: pointer;
`;

const StyledArrowRight = styled(FontAwesomeIcon)`
	position: absolute;
	right: -15%;
	top: 40%;
	color: var(--color-fourth);
	transform: translateY(-40%);
	width: 4rem;
	height: 4rem;
	cursor: pointer;
`;
