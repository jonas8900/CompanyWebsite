import styled from "styled-components";
import ProductCard from "./Productcard";
import Greenbutton from "./GreenButton";
import { useEffect, useState } from "react";
import { ProductData } from "./ProductData";
import ProductDetails from "./ProductDetails";
import Image from "next/image";

export default function Products() {
	const [showProductDetails, setShowProductDetails] = useState(false);
	const [activeProduct, setActiveProduct] = useState({});

	function handleShowProductDetails(productIndex) {
		setShowProductDetails(true);
		setActiveProduct(ProductData[productIndex - 1]);
	}

	function handleCloseWindow() {
		setShowProductDetails(false);
	}

	//useEffect to prevent scrolling in the blured background when contact window is open
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
		<StyledProductWrapper id="products">
			<StyledHeadline>Unsere Produkte</StyledHeadline>
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
			;
		</StyledProductWrapper>
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
`;

const StyledArticle = styled.article`
	font-size: var(--font-size-text);
	font-weight: 400;
	color: var(--color-fourth);
`;
