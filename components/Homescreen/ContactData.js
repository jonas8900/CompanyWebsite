import styled, { keyframes } from "styled-components";
import PhoneIcon from "../Icons/PhoneIcon";
import MailIcon from "../Icons/MailIcon";
import { X } from "lucide-react";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";

export default function ContactData({ onClick, animationTrigger }) {
	return (
		<StyledOverlay $animationtrigger={animationTrigger}>
			<OutsideClickHandler onOutsideClick={onClick}>
				<StyledModal>
					<StyledCloseButton onClick={onClick} aria-label="Schließen">
						<X size={24} />
					</StyledCloseButton>

					<StyledHeader>
						<StyledImageWrapper>
							<Image
								src="/vertriebler.jpg"
								alt="Tim Dally"
								width={120}
								height={120}
								style={{ borderRadius: "50%", objectFit: "cover" }}
								onError={(e) => {
									e.target.style.display = "none";
								}}
							/>
						</StyledImageWrapper>
						<StyledHeadline>Ihr Ansprechpartner im Vertrieb</StyledHeadline>
						<StyledName>Tim Dally</StyledName>
						{/* <StyledPosition>Ansprechpartner seit ca. 4 Millionen Jahren</StyledPosition> */}
					</StyledHeader>

					<StyledContent>
						<StyledContactItem>
							<PhoneIcon href="tel:017626246722">0176 262 46722</PhoneIcon>
						</StyledContactItem>
						<StyledContactItem>
							<MailIcon href="mailto:tim.dally@emb-schulze.de">
								tim.dally@emb-schulze.de
							</MailIcon>
						</StyledContactItem>
					</StyledContent>

					<StyledFooter>
						<StyledInfoText>
							Haben Sie Fragen? Ich bin gerne für Sie da!
						</StyledInfoText>
					</StyledFooter>
				</StyledModal>
			</OutsideClickHandler>
		</StyledOverlay>
	);
}

const FadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const FadeOut = keyframes`
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

const SlideIn = keyframes`
	0% {
		opacity: 0;
		transform: translateY(20px) scale(0.95);
	}
	100% {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
`;

const StyledOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(8px);
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	animation: ${({ $animationtrigger }) => ($animationtrigger ? FadeOut : FadeIn)} 0.35s ease forwards;
`;

const StyledModal = styled.div`
	position: relative;
	background: white;
	border-radius: 20px;
	width: 100%;
	max-width: 500px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
	animation: ${SlideIn} 0.4s ease-out;
	overflow: hidden;
`;

const StyledCloseButton = styled.button`
	position: absolute;
	top: 1rem;
	right: 1rem;
	background: white;
	border: 2px solid #e5e7eb;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s ease;
	z-index: 10;
	color: var(--color-fourth);

	&:hover {
		background-color: var(--color-primary);
		border-color: var(--color-secondary);
		color: var(--color-secondary);
		transform: rotate(90deg);
	}
`;

const StyledHeader = styled.div`
	background: linear-gradient(135deg, var(--color-primary) 0%, #a8f0b0 100%);
	padding: 3rem 2rem 2rem;
	text-align: center;
	position: relative;
`;

const StyledImageWrapper = styled.div`
	width: 120px;
	height: 120px;
	margin: 0 auto 1.5rem;
	border-radius: 50%;
	overflow: hidden;
	border: 4px solid white;
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
	background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 100%;
		height: 100%;
	}
`;

const StyledHeadline = styled.h3`
	font-size: 0.9rem;
	font-weight: 500;
	color: var(--color-secondary);
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 0 0 0.5rem 0;
`;

const StyledName = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	color: var(--color-fourth);
	margin: 0 0 0.25rem 0;
`;

const StyledPosition = styled.p`
	font-size: 1.1rem;
	color: var(--color-fourth);
	opacity: 0.8;
	margin: 0;
`;

const StyledContent = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const StyledContactItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--color-fourth);
		text-decoration: none;
		padding: 0.75rem 1.5rem;
		border-radius: 12px;
		border: 2px solid #e5e7eb;
		transition: all 0.2s ease;
		width: 100%;
		justify-content: center;

		&:hover {
			border-color: var(--color-primary);
			background-color: #f9fafb;
			transform: translateY(-2px);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		}
	}
`;

const StyledFooter = styled.div`
	background-color: #f9fafb;
	padding: 1.5rem 2rem;
	border-top: 1px solid #e5e7eb;
`;

const StyledInfoText = styled.p`
	text-align: center;
	color: var(--color-fourth);
	font-size: 0.95rem;
	margin: 0;
	opacity: 0.8;
`;
