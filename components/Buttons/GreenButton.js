import styled from "styled-components";

export default function Greenbutton({
	children,
	onClick,
	margin,
	value,
	disabled,
	onClickApply,
}) {
	return (
		<StyledButton
			onClick={onClick || onClickApply}
			$margin={margin}
			$value={value}
			disabled={disabled}
		>
			{children}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	background-color: var(--color-secondary);
	color: #fff;
	border: none;
	border-radius: 6px; // Verfeinerter Radius
	padding: 0.7rem 1.6rem; // Verfeinertes Padding
	font-size: 0.95rem; // Verfeinerte Schriftgröße
	font-weight: 600;
	letter-spacing: 0.5px; // Mehr Buchstabenabstand
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	
	margin-bottom: ${({ $margin }) => ($margin ? $margin + "rem" : "0")};

	&:hover {
		background-color: var(--color-secondary);
		filter: brightness(1.1); // Subtilerer Hover-Effekt
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
	}

	&:active {
		transform: scale(0.98) translateY(0);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		filter: brightness(1);
	}

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
		transform: none;
		box-shadow: none;
	}
`;
