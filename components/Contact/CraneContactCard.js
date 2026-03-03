import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Phone, X } from "lucide-react";
import Image from "next/image";

export default function CraneContactCard() {
	const [isVisible, setIsVisible] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isDismissed, setIsDismissed] = useState(false);

	useEffect(() => {
		const dismissed = localStorage.getItem("helpCardDismissed");
		if (dismissed) {
			setIsDismissed(true);
			return;
		}

		const timer = setTimeout(() => {
			setIsVisible(true);
			setTimeout(() => {
				setIsAnimating(true);
			}, 100);
		}, 15000);

		return () => clearTimeout(timer);
	}, []);

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => {
			setIsVisible(false);
			setIsDismissed(true);
			// Speichere in localStorage, dass die Karte geschlossen wurde
			localStorage.setItem("helpCardDismissed", "true");
		}, 300);
	};

	const handleCall = () => {
		window.location.href = "tel:051127789680";
	};

	if (isDismissed) return null;

	return (
		<>
			{isVisible && (
				<StyledCard $isAnimating={isAnimating}>
					<StyledCloseButton onClick={handleClose}>
						<X size={20} />
					</StyledCloseButton>

					<StyledContent onClick={handleCall}>
						<StyledImageWrapper>
							<Image
								src="/vertriebler.webp"
								alt="Ihr Ansprechpartner"
								width={100}
								height={100}
								style={{ borderRadius: "50%", objectFit: "cover" }}
								onError={(e) => {
									// Fallback wenn kein Bild vorhanden - Zeige Platzhalter
									e.target.style.display = "none";
								}}
							/>
						</StyledImageWrapper>

						<StyledTextWrapper>
							<StyledQuestion>Benötigen Sie Hilfe?</StyledQuestion>
							<StyledPhoneWrapper>
								<Phone size={18} />
								<span>0511 277896-80</span>
							</StyledPhoneWrapper>
						</StyledTextWrapper>
					</StyledContent>
				</StyledCard>
			)}
		</>
	);
}

const slideIn = keyframes`
	0% {
		transform: translateX(120%);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
`;

const slideOut = keyframes`
	0% {
		transform: translateX(0);
		opacity: 1;
	}
	100% {
		transform: translateX(120%);
		opacity: 0;
	}
`;

const StyledCard = styled.div`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	width: 400px;
	background: white;
	border-radius: 16px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
	border: 2px solid var(--color-primary);
	overflow: hidden;
	z-index: 9998;
	animation: ${({ $isAnimating }) => ($isAnimating ? slideIn : slideOut)} 0.3s ease-out forwards;

	@media (max-width: 767px) {
		width: 380px;
		bottom: 1rem;
		right: 1rem;
	}
`;

const StyledCloseButton = styled.button`
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	background: rgba(255, 255, 255, 0.9);
	border: 1px solid #e5e7eb;
	border-radius: 50%;
	width: 28px;
	height: 28px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s ease;
	color: var(--color-fourth);
	z-index: 10;

	&:hover {
		background-color: var(--color-primary);
		transform: rotate(90deg);
	}
`;

const StyledContent = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1.5rem;
	cursor: pointer;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: #f9fafb;
	}
`;

const StyledImageWrapper = styled.div`
	flex-shrink: 0;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	overflow: hidden;
	border: 3px solid var(--color-primary);
	background: linear-gradient(135deg, var(--color-primary) 0%, #a8f0b0 100%);
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 100%;
		height: 100%;
	}
`;

const StyledTextWrapper = styled.div`
	flex: 1;
	padding-right: 0.5rem;
`;

const StyledQuestion = styled.p`
	font-size: 1.05rem;
	font-weight: 600;
	color: var(--color-fourth);
	margin: 0 0 0.5rem 0;
	line-height: 1.3;
`;

const StyledPhoneWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: var(--color-secondary);
	font-weight: 600;
	font-size: 1rem;

	svg {
		color: var(--color-secondary);
	}

	span {
		color: var(--color-fourth);
	}
`;
