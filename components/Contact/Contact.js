import styled from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import { useEffect, useState } from "react";
import ContactFormular from "./ContactFormular";
import ToastMessage from "../ToastMessage/ToastMessage";

export default function Contact() {
	const [messageSuccess, setMessageSuccess] = useState(false);
	const [messageError, setMessageError] = useState(false);
	const [animationTrigger, setAnimationTrigger] = useState(false);
	const [submitClicked, setSubmitClicked] = useState(false);
	const [formularClicked, setFormularClicked] = useState(false);
	const [capture, setCapture] = useState("");

	function handleClickFormularButton() {
		setFormularClicked(!formularClicked);
	}

	function handleSubmitButtonClicked() {
		setSubmitClicked(true);
		setTimeout(() => {
			setSubmitClicked(false);
		}, 3000);
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
			}, 3000);
		} else {
			alert("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
		}
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (formularClicked) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		}
	}, [formularClicked]);

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
						<h2>Telefon:</h2>
						<p>0511 27789680</p>
					</StyledInformations>
					<StyledInformations>
						<h2>E-Mail:</h2>
						<p>info@emb-schulze.de</p>
					</StyledInformations>
					<StyledInformations>
						<h2>Fax:</h2>
						<p>0511 337706</p>
					</StyledInformations>
					<StyledInformations>
						<h2>Adresse:</h2>
						<p>Alter Flughafen 6, 30179 Hannover</p>
					</StyledInformations>
				</StyledInformationWrapper>
				<StyledMap>
					<StyledFrame
						title="Google Maps Karte"
						src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d9733.956892292174!2d9.7423785!3d52.4159328!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x47b07308c9f8b3d1%3A0xcac079d74df9304a!2sElektromaschinenbau%20Schulze%20GmbH%2C%20Alter%20Flughafen%206%2C%2030179%20Hannover!3m2!1d52.415932399999996!2d9.7423229!5e0!3m2!1sde!2sde!4v1696775027478!5m2!1sde!2sde"
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
						onSubmit={handleSubmitFormular}
						onClick={handleClickFormularButton}
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
	margin-left: 10%;
	margin-right: 10%;
`;

const StyledHeadline = styled.h1`
	margin-bottom: 2rem;
`;

const StyledHeadlineAndButtonWrapper = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledInformationWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const StyledInformations = styled.article``;

const StyledMap = styled.article``;

const StyledFrame = styled.iframe`
	border: none;
	width: 100%;
	height: 100%;
	margin-bottom: 2rem;
`;