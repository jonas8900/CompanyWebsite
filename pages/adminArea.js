import styled, { keyframes } from "styled-components";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import AdminAreaForm from "../components/Admin/adminAreaForm";
import BackToHome from "../components/Homescreen/BackToHome";

export default function AdminArea({ scrollY, device, setDevice }) {
	return (
		<StyledMain>
			<BackToHome />
			<AdminAreaForm />
			<Footer />
		</StyledMain>
	);
}

const FadeIn = keyframes`
0% {opacity: 0;}
20% {opacity: 0;}
100% {opacity: 1;}

`;

const StyledMain = styled.main`
	animation: ${FadeIn} 0.8s linear;
	background-color: #2c2c2c;
	@media (min-width: 1025px) {
		margin-top: -2rem;
	}
`;
