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
	background-color: var(--color-primary);
	border: none;
	padding: 0.6rem;
	min-width: 6rem;
	font-size: var(--font-size-text);
	color: var(--color-fourth);
	margin-bottom: ${({ $margin }) => $margin + "rem"};
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:active {
		box-shadow: inset 1px 1px 5px 0px black;
	}

	&:hover {
		background-color: var(--color-fourth);
		color: white;
		
	}

`;
