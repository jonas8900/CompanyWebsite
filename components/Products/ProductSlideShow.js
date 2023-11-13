import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./Productcard";
import styled from "styled-components";
import { ProductData } from "./ProductData";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

export default function ProductSlideShow({ handleShowProductDetails }) {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1025 },
			items: 3,
			slidesToSlide: 1,
		},
	};

	return (
		<StyledSection>
			<StyledCarousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={8000}
				ssr={true}
				keyBoardControl={true}
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				customLeftArrow={<ArrowLeft />}
				customRightArrow={<ArrowRight />}
			>
				{ProductData.map((product) => (
					<StyledDiv key={product.id} >
						<ProductCard
							key={product.id}
							src={product.src}
							alt={product.alt}
							headline={product.headline}
							infotext={product.infotext}
							onClick={() => handleShowProductDetails(product.id)}
							aria-label={product.headline}
						>
							Mehr Erfahren ...
						</ProductCard>
					</StyledDiv>
				))}
			</StyledCarousel>
		</StyledSection>
	);
}

const StyledDiv = styled.div`
	margin: auto;
	padding-left: 2rem;
	padding-right: 2rem;
`;

const StyledSection = styled.section`
	position: relative;
	width: 90%;
	margin: auto;
`;

const StyledCarousel = styled(Carousel)`
	position: unset;
	display: flex;
	margin: auto;
	width: 95%;
`;
