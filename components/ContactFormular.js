import styled from "styled-components";
import Greenbutton from "./GreenButton";

export default function ContactFormular({ onSubmit, onClick, value }) {
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
								required
							/>
						</StyledInputAndLabelArticle>
						<StyledInputAndLabelArticle>
							<StyledLabel id="email">E-Mail Adresse</StyledLabel>
							<StyledInputField
								type="email"
								name="email"
								placeholder="max.mustermann@..."
								required
							/>
						</StyledInputAndLabelArticle>
						<StyledInputAndLabelArticle>
							<StyledLabel id="message" required>
								Nachricht
							</StyledLabel>
							<StyledTextArea name="message" />
						</StyledInputAndLabelArticle>
						<StyledInputAndLabelArticle>
							<StyledLabel id="requestType">Art der Anfrage</StyledLabel>
							<select name="requestType" required>
								<option value="Kundenberatung">Kundenberatung</option>
								<option value="Kaufanfrage">Kaufanfrage</option>
								<option value="Jobinformation">Job Informationen</option>
							</select>
						</StyledInputAndLabelArticle>
						<Greenbutton type="submit">Absenden</Greenbutton>
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
