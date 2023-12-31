import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function ArrowRight({ onClick }) {
	return (
		<>
			<StyledIcon icon={faArrowRight} onClick={onClick} />
		</>
	);
}

const StyledIcon = styled(FontAwesomeIcon)`
	color: #fff;
	position: absolute;
	color: rgba(160, 160, 160, 1);
	background-color: transparent;
	width: 2.5rem;
	height: 2.5rem;
	right: 0rem;
	transition: all 0.3s ease-in-out;
	border: 1px solid rgba(160, 160, 160, 1);
	border-radius: 100%;
	padding: 0.4rem;
	cursor: pointer;
	&:hover {
		color: var(--color-fourth);
		border: 1px solid var(--color-fourth);
	}

	&:active {
		color: var(--color-secondary);
		border: 1px solid var(--color-secondary);
	}
`;
