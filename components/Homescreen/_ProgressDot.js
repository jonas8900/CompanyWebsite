import styled from "styled-components";


export default function ProgressDots({ counter, onDotClick, totalDots = 6 }) {
	return (
		<StyledProgressSection>
			{Array.from({ length: totalDots }, (_, i) => (
				<StyledProgressDot
					key={i}
					$counter={counter}
					$index={i + 1}
					onClick={() => onDotClick(i +1)}
				/>
			))}
		</StyledProgressSection>
	);
}

const StyledProgressSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledProgressDot = styled.div`
	width: 0.7rem;
	height: 0.7rem;
	margin: 0.3rem;
	min-width: 0.7rem;
	min-height: 0.7rem;
	cursor: pointer;
	border-radius: 50%;
	background-color: ${({ $counter, $index }) =>
		$counter === $index -1 ? "var(--color-primary)" : "var(--color-third)"};

	@media (min-width: 1025px) {
		width: 1rem;
		height: 1rem;
		min-width: 1rem;
		min-height: 1rem;
	}
`;
