import styled from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function ContactFormular({
	onSubmit,
	onClick,
	value,
	disabled,
	onChange,
	successValue,
}) {
	return (
		<>
			<StyledWindow>
				<StyledFormularCard>
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
							<select name="requestType" required>
								<option value="Kundenberatung">Kundenberatung</option>
								<option value="Kaufanfrage">Kaufanfrage</option>
								<option value="Jobinformation">Job Informationen</option>
								<option value="Sonstige">Sonstige</option>
							</select>
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
				<StyledButtonSection>
					<Greenbutton onClick={onClick} $value={value}>
						Schließen
					</Greenbutton>
				</StyledButtonSection>
			</StyledWindow>
		</>
	);
}

const StyledWindow = styled.section`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(20px);
`;

const StyledFormularCard = styled.article`
	padding: 1rem;
	position: fixed;
	top: 35%;
	transform: translate(-0%, -35%);
	border-radius: 9px;
	background-color: var(--color-third);
	width: 80%;
	left: 10%;
	right: 10%;
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
`;

const StyledTextArea = styled.textarea`
	height: 5rem;
`;

const StyledButton = styled.button`
	background-color: var(--color-primary);
	border: none;
	padding: 0.6rem;
	min-width: 6rem;
	font-size: var(--font-size-text);
	color: var(--color-fourth);
	&:active {
		box-shadow: inset 1px 1px 5px 0px black;
	}
`;
