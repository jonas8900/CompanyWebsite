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
	color: var(--color-secondary);
	border: 2px solid transparent;
	border-radius: 8px;
	padding: 0.75rem 2rem;
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.3px;
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	position: relative;
	overflow: hidden;

	margin-bottom: ${({ $margin }) => ($margin ? $margin + "rem" : "0")};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-secondary);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		z-index: -1;
	}

	&:hover {
		color: black;
		border-color: var(--color-secondary);

		&::before {
			transform: scaleX(1);
		}
	}

	&:active {
		transform: scale(0.97);
	}

	&:disabled {
		background-color: #e0e0e0;
		color: #9e9e9e;
		cursor: not-allowed;
		border-color: transparent;

		&::before {
			display: none;
		}

		&:hover {
			color: #9e9e9e;
		}
	}
`;
