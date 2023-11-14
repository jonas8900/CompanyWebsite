import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function ContactFormular({
	onSubmit,
	onClick,
	value,
	disabled,
	onChange,
	successValue,
	animationTrigger,
}) {
	return (
		<>
			<StyledWindow $animationtrigger={animationTrigger}>
				<StyledFormularCard>
				<StyledIcon icon={faCircleXmark} onClick={onClick} />
					<h2>Kontaktformular</h2>
					<StyledForm onSubmit={onSubmit}>
						<StyledInputAndLabelArticle>
							<StyledLabel id="name">Name</StyledLabel>
							<StyledInputField
								type="text"
								name="name"
								placeholder="Max Mustermann..."
								maxLength="50"
								required
							/>
						</StyledInputAndLabelArticle>
						<StyledInputAndLabelArticle>
							<StyledLabel id="email">E-Mail Adresse</StyledLabel>
							<StyledInputField
								type="email"
								name="email"
								placeholder="max.mustermann@..."
								maxLength="70"
								required
							/>
						</StyledInputAndLabelArticle>
						<StyledInputAndLabelArticle>
							<StyledLabel id="message" required>
								Nachricht
							</StyledLabel>
							<StyledTextArea name="message" maxLength="500" />
						</StyledInputAndLabelArticle>
						<StyledInputAndLabelArticle>
							<StyledLabel id="requestType">Art der Anfrage</StyledLabel>
							<StyledSelect name="requestType" required>
								<option value="Kundenberatung">Kundenberatung</option>
								<option value="Jobinformation">Job Informationen</option>
								<option value="Sonstige">Sonstige</option>
							</StyledSelect>
						</StyledInputAndLabelArticle>
						<ReCAPTCHA
							sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
							onChange={onChange}
						/>
						<Greenbutton type="submit" disabled={disabled}>
							Absenden
						</Greenbutton>
						{successValue && (
							<>
								<StyledCheckIcon icon={faCheck} />
							</>
						)}
					</StyledForm>
				</StyledFormularCard>
			</StyledWindow>
		</>
	);
}

const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}

`;

const FadeOut = keyframes`
0% { opacity: 1;}
100% { opacity: 0; }
`;

const StyledWindow = styled.section`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(20px);
	animation: ${({ $animationtrigger }) =>
			$animationtrigger ? FadeOut : FadeIn}
		0.4s ease;
`;

const StyledSelect = styled.select`
	height: 2rem;
	width: 35%;
	border: 1px solid rgba(0, 0, 0, 0.2);
`;

const StyledFormularCard = styled.article`
	padding: 1rem;
	position: fixed;
	top: 35%;
	transform: translate(-0%, -35%);
	border-radius: 9px;
	background-color: var(--color-third);
	width: 92%;
	left: 4%;
	right: 4%;
	@media (min-width: 768px) {
		width: 50%;
		left: 25%;
		right: 25%;
	}
	@media (min-width: 1025px) {
		width: 30%;
	}
	margin: auto;
	z-index: 1;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	margin: auto;
	margin-top: 2rem;
`;

const StyledButtonSection = styled.section`
	position: fixed;
	bottom: 3rem;
	right: 2rem;
	z-index: 99999;
	@media (max-height: 700px) {
		top: 1rem;
		right: 2rem;
	}
`;

const StyledLabel = styled.label`
	font-size: var(--font-size-subtitle);
`;

const StyledCheckIcon = styled(FontAwesomeIcon)`
	position: fixed;
	z-index: 9999;
	width: 2rem;
	height: 2rem;
	color: black;
	bottom: 3%;
	border-radius: 0%;
	right: 20%;
`;

const StyledInputAndLabelArticle = styled.article`
	display: flex;
	flex-direction: column;

	width: 80%;
	height: 100%;
	margin-left: 2rem;
	margin-right: 2rem;
	::placeholder {
		font-size: 0.8rem;
	}
`;

const StyledInputField = styled.input`
	height: 2rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
`;

const StyledTextArea = styled.textarea`
	height: 5rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
`;




const StyledIcon = styled(FontAwesomeIcon)`
	width: 2rem;
	height: 2rem;
	position: absolute;
	right: -0.5rem;
	top: -0.5rem;
	color: red;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		scale: 1.2;
	}
`;