import styled from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import { useEffect, useState } from "react";
import ContactFormular from "./ContactFormular";
import ToastMessage from "../ToastMessage/ToastMessage";
import PhoneIcon from "../Icons/PhoneIcon";
import MailIcon from "../Icons/MailIcon";
import { useBodyScrollLock } from "../../lib/helper/BodyScrollBar";

export default function Contact() {
	const [messageSuccess, setMessageSuccess] = useState(false);
	const [submitClicked, setSubmitClicked] = useState(false);
	const [formularClicked, setFormularClicked] = useState(false);
	const [capture, setCapture] = useState("");
	const [animationToggle, setAnimationToggle] = useState(false);

	function handleClickFormularButton() {
		setFormularClicked(true);
	}

	function handleCloseWindow() {
		setAnimationToggle(true);
		setTimeout(() => {
			setFormularClicked(false);
			setAnimationToggle(false);
		}, 350);
	}

	function handleSubmitButtonClicked() {
		setSubmitClicked(true);
		setTimeout(() => {
			setSubmitClicked(false);
		}, 2000);
	}

	async function handleSubmitFormular(event) {
		handleSubmitButtonClicked();
		event.preventDefault();

		if (!capture || capture === null || "") {
			alert("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
			return;
		}

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			setMessageSuccess(true);
			setTimeout(() => {
				setMessageSuccess(false);
				setFormularClicked(false);
			}, 2000);
		} else {
			alert("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
		}
	}

	useBodyScrollLock(formularClicked);

	return (
		<>
			<StyledContactSection id="contact">
				<StyledHeadlineAndButtonWrapper>
					<StyledHeadline>Kontakt</StyledHeadline>
					<Greenbutton onClick={handleClickFormularButton}>
						Kontaktformular
					</Greenbutton>
				</StyledHeadlineAndButtonWrapper>
				<StyledInformationWrapper>
					<StyledInformations>
						<h2>Firmensitz:</h2>
						<p>Hannover</p>
					</StyledInformations>
					<StyledInformations>
						<PhoneIcon href="tel:051127789680">0511 277896-80</PhoneIcon>
					</StyledInformations>
					<StyledInformations>
						<MailIcon href="mailto:Info@emb-schulze.de">
							Info@emb-schulze.de
						</MailIcon>
					</StyledInformations>
					<StyledInformations>
						<h2>Adresse:</h2>
						<p>Alter Flughafen 6, 30179 Hannover</p>
					</StyledInformations>
				</StyledInformationWrapper>
				<StyledMap>
					<StyledFrame
						title="Google Maps Karte"
						src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d9733.706148067538!2d9.737020474686359!3d52.41706875254704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47b07308c9f8b3d1%3A0xcac079d74df9304a!2selektromaschinenbau%20schulze!3m2!1d52.415932399999996!2d9.7423229!5e0!3m2!1sde!2sde!4v1700135741460!5m2!1sde!2sde"
						width="600"
						height="450"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></StyledFrame>
				</StyledMap>
			</StyledContactSection>
			{formularClicked && (
				<>
					<ContactFormular
						animationTrigger={animationToggle}
						onSubmit={handleSubmitFormular}
						onClick={handleCloseWindow}
						onChange={(value) => setCapture(value)}
						disabled={submitClicked}
						successValue={submitClicked}
					/>
					{messageSuccess && <ToastMessage>Senden erfolgreich!</ToastMessage>}
				</>
			)}
		</>
	);
}

const StyledContactSection = styled.section`
	max-width: 1400px;
	margin: 6rem auto;
	padding: 0 1.5rem;

	@media (min-width: 768px) {
		padding: 0 2rem;
	}
`;

const StyledHeadline = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	color: var(--color-fourth);
	text-align: center;
	margin-bottom: 1rem;
	position: relative;
	padding-bottom: 1rem;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 3px;
		background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
	}

	@media (min-width: 768px) {
		font-size: 2.25rem;
	}

	@media (min-width: 1024px) {
		font-size: 2.5rem;
	}
`;

const StyledHeadlineAndButtonWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	align-items: center;
	margin-bottom: 3rem;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const StyledInformationWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	margin-bottom: 3rem;
	background: white;
	padding: 2rem;
	border-radius: 12px;
	border: 1px solid #e5e7eb;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

	@media (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
		gap: 2.5rem;
		padding: 2.5rem;
	}
`;

const StyledInformations = styled.article`
	h2 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-secondary);
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	p {
		font-size: 1rem;
		color: var(--color-fourth);
		line-height: 1.6;
		margin: 0;
	}

	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-fourth);
		text-decoration: none;
		transition: color 0.2s ease;
		font-size: 1rem;

		&:hover {
			color: var(--color-secondary);
		}
	}
`;

const StyledMap = styled.article`
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	border: 1px solid #e5e7eb;
`;

const StyledFrame = styled.iframe`
	border: none;
	width: 100%;
	height: 400px;
	display: block;

	@media (min-width: 768px) {
		height: 500px;
	}
`;
