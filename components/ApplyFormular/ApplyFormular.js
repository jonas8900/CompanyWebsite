import styled, { keyframes } from "styled-components";
import Greenbutton from "../Buttons/GreenButton";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function ApplyFormular({
	onSubmit,
	onClick,
	disabled,
	onChange,
	successValue,
	animationTrigger,
	Jobtitle,
}) {
	function checkFileSize(event) {
		const fileInput = event.target;
		const maxFileSize = 4.5 * 1024 * 1024;

		if (fileInput.files.length > 0) {
			const fileSize = fileInput.files[0].size;

			if (fileSize > maxFileSize) {
				alert("Die Dateigröße darf 4,5 MB nicht überschreiten.");
				fileInput.value = "";
			}
		}
	}
	return (
		<>
			<StyledWindow $animationtrigger={animationTrigger}>
				<StyledFormularCard>
					<StyledHeadline>Bewerbung als {Jobtitle}</StyledHeadline>
					<StyledIcon icon={faCircleXmark} onClick={onClick} />
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
								Nachricht an uns
							</StyledLabel>
							<StyledTextArea name="message"  placeholder="Schreib uns gern eine Nachricht" maxLength="500" />
						</StyledInputAndLabelArticle>
						<StyledInputAndLabelArticle>
							<StyledLabel id="earliestWorkBegin">
								Frühstmöglicher Beschäftigungsbeginn
							</StyledLabel>
							<StyledSelect name="earliestWorkBegin" required>
								<option value="Sofort">Sofort</option>
								<option value="1. Monat">1. Monat</option>
								<option value="zwischen 1. und 3. Monaten">
									zwischen 1. und 3. Monaten
								</option>
								<option value="länger als 3. Monate">
									länger als 3. Monate
								</option>
							</StyledSelect>
						</StyledInputAndLabelArticle>
						<StyledInputAndLabelArticle>
							<StyledFileLabel id="fileToUpload">
								Deine Bewerbung
							</StyledFileLabel>
							<StyledFileUpload
								type="file"
								name="fileToUpload"
								id="myFile"
								onChange={checkFileSize}
								accept=".pdf, .doc, .docx, .zip"
							/>
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

const StyledHeadline = styled.h2`
	text-decoration: underline;
	text-decoration-color: var(--color-primary);
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
	width: 60%;
	border: 1px solid rgba(0, 0, 0, 0.2);
`;

const StyledFileUpload = styled.input`
	margin-top: 1rem;

	&::file-selector-button {
		background-color: var(--color-primary);
		color: var(--color-fourth);
		border: 1px solid rgba(0, 0, 0, 0.2);
		padding: 5px 12px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;

		&:hover {
			background-color: var(--color-fourth);
			color: white;
		}
	}
`;

const StyledFileLabel = styled.label`
	font-size: var(--font-size-subtitle);
	border: none;
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
