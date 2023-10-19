import styled, { keyframes } from "styled-components";

export default function ToastMessage({ children }) {
	return (
		<>
			<StyledToastMessageSection>
				<StyledDiv>
					<StyledBorder />
					<h1>{children}</h1>
				</StyledDiv>
			</StyledToastMessageSection>
		</>
	);
}

const changeBorder = keyframes`
 0% {
    width: 100%;
 }
 100% {
    width: 0%;
 }
`;

const StyledToastMessageSection = styled.section`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	z-index: 9999;
`;

const StyledDiv = styled.div`
	background-color: var(--color-third);
	position: fixed;
	top: 5%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 1rem;
`;

const StyledBorder = styled.div`
	border: 4px solid #f51c40;
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 0;
	animation: ${changeBorder} 3s linear both;
	animation-duration: 3s;
`;
