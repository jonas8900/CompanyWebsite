import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./Productcard";
import styled from "styled-components";
import { ProductData } from "./ProductData";

export default function ProductSlideShow({ handleShowProductDetails }) {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1025 },
			items: 2,
			slidesToSlide: 1,
		},
	};

	return (
		<Carousel
			responsive={responsive}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={8000}
			ssr={true}
			keyBoardControl={true}
			renderArrowsWhenDisabled={false}
			renderButtonGroupOutside={false}
			renderDotsOutside={false}
		>
			{ProductData.map((product) => (
				<StyledDiv key={product.id}>
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
		</Carousel>
	);
}

const StyledDiv = styled.div`
	padding-right: 4rem;
	padding-left: 4rem;
	object-fit: contain;
`;
