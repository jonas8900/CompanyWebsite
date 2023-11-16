import styled from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import { useEffect, useState } from "react";
import ContactFormular from "./ContactFormular";
import ToastMessage from "../ToastMessage/ToastMessage";
import PhoneIcon from "../Icons/PhoneIcon";
import MailIcon from "../Icons/MailIcon";


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
						<PhoneIcon href="tel:017626246722">0176 262 46722</PhoneIcon>
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
