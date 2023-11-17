import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "styled-components";
import PhoneIcon from "../Icons/PhoneIcon";
import MailIcon from "../Icons/MailIcon";
import FaxIcon from "../Icons/FaxIcon";

export default function ImpressumText() {
	return (
		<>
			<StyledSection>
				<StyledHeadline>Impressum</StyledHeadline>
				<StyledArticle>
					<p>
						T.Schulze Geschäftsführer/Inhaber Elektromaschinenbau Schulze GmbH
					</p>
					<StyledSecondHeadline>Sitz der Gesellschaft:</StyledSecondHeadline>
					<p>Hannover (Vahrenheide) Alter Flughafen 6</p>
					<p>30179 Hannover</p>
					<StyledSecondHeadline>Handelsregister</StyledSecondHeadline>
					<p>Amtsgericht Hannover </p>
					<p>HRB 207493</p>
					<StyledSecondHeadline>Kontakt</StyledSecondHeadline>
					<PhoneIcon href="tel:051127789680">0511 277896-80</PhoneIcon>
					<MailIcon href="mailto:Info@emb-schulze.de">
						Info@emb-schulze.de
					</MailIcon>
					<p>www.emb-schulze.de</p>
					<p>www.elektromaschinenbau-schulze.de</p>
					<StyledSecondHeadline>Finanzamt Hannover</StyledSecondHeadline>
					<p>
						Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
						DE278590404
					</p>
					<p>
						Anganben gemäß § 5 TMG Inhaltlich verantwortlich gemäß §55 II RStV:
						T. Schulze, Max-Müller-Straße 22,30179 Hannover
					</p>
					<StyledSecondHeadline>Haftung für Inhalte</StyledSecondHeadline>
					<p>
						Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
						auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
						<br></br> Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
						nicht verpflichtet, übermittelte oder gespeicherte fremde
						Informationen zu überwachen oder nach Umständen zu forschen, die auf
						eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
						Entfernung oder Sperrung der Nutzung von Informationen nach den
						allgemeinen Gesetzen bleiben hiervon unberührt.<br></br> Eine
						diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
						einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
						entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
						entfernen.
					</p>
					<StyledSecondHeadline>Urheberrecht</StyledSecondHeadline>
					<p>
						Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
						diesen Seiten unterliegen dem deutschen Urheberrecht. <br></br>Die
						Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
						Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
						schriftlichen Zustimmung des jeweiligen Autors bzw. <br></br>
						Erstellers. Downloads und Kopien dieser Seite sind nur für den
						privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte
						auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
						Urheberrechte Dritter beachtet. <br></br>Insbesondere werden Inhalte
						Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
						Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
						entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
						werden wir derartige Inhalte umgehend entfernen.
					</p>
					<StyledLink href="https://www.e-recht24.de">
						Quelle: https://www.e-recht24.de
					</StyledLink>
				</StyledArticle>
			</StyledSection>
		</>
	);
}

const StyledSection = styled.section`
	padding: 1rem;
`;

const StyledArticle = styled.article``;

const StyledHeadline = styled.h1`
	font-size: var(--font-size-title);
	text-decoration: underline;
	text-decoration-color: var(--color-primary);

	@media (min-width: 768px) {
	}
`;

const StyledSecondHeadline = styled.h2`
	font-size: var(--font-size-text);
	margin-top: 2rem;
	@media (min-width: 768px) {
		margin-top: 4rem;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: var(--color-fourth);
	font-size: var(--font-size-text);

	&:hover {
		color: var(--color-fifth);
		transition: all 0.3s ease-in-out;
	}
	&:not(:hover) {
		transition: all 0.2s ease-in-out;
	}
`;

const StyledPhoneIcon = styled(FontAwesomeIcon)``;
