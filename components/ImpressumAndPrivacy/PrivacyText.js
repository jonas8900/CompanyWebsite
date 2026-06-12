import Link from "next/link";
import styled from "styled-components";

export default function PrivacyText() {
    return (
        <StyledSection>
            <StyledHeadline>Datenschutz</StyledHeadline>
            
            <StyledSecondHeadline>
                Hosting bei Vercel
            </StyledSecondHeadline>
            <StyledParagraph>
                Wir hosten unsere Website bei Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA). Vercel ist ein Cloud-Hosting-Dienst, über dessen weltweit verteiltes Netzwerk unsere Website ausgeliefert wird. Hierbei verarbeitet Vercel zwingend technisch notwendige Daten wie z. B. Ihre IP-Adresse und speichert diese kurzzeitig in Server-Logfiles, um die Auslieferung der Website zu gewährleisten und Angriffe abzuwehren. <br /><br />
                Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen, schnellen und sicheren Bereitstellung unseres Online-Angebotes. Vercel Inc. ist nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF) zertifiziert. Zudem haben wir einen Vertrag zur Auftragsverarbeitung (AVV) mit Vercel geschlossen.
            </StyledParagraph>

            <StyledSecondHeadline>
                Vercel Web Analytics
            </StyledSecondHeadline>
            <StyledParagraph>
                Um die Aufrufe unserer Website statistisch auszuwerten, nutzen wir &bdquo;Vercel Web Analytics&ldquo;, ebenfalls einen Dienst der Vercel Inc. Dieser Dienst arbeitet datenschutzfreundlich und setzt standardmäßig <strong>keine</strong> Tracking-Cookies auf Ihrem Endgerät. Informationen über Ihre Nutzung der Website werden lediglich anonymisiert und aggregiert erfasst, sodass keine Rückschlüsse auf Ihre Person oder eine detaillierte Profilbildung möglich sind. <br /><br />
                Die Nutzung dieses Dienstes erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) an der statistischen Auswertung der Besucherströme zur stetigen Optimierung unseres Webangebots. Weitere Informationen zum Datenschutz bei Vercel finden Sie unter: <br />
                <StyledLink href="https://vercel.com/legal/privacy-policy">
                    https://vercel.com/legal/privacy-policy
                </StyledLink>
            </StyledParagraph>

            <StyledSecondHeadline>reCAPTCHA</StyledSecondHeadline>
            <StyledParagraph>
                Zum Schutz Ihrer Anfragen per Internetformular verwenden wir den Dienst
                reCAPTCHA des Unternehmens Google LLC (Google). Die Abfrage dient der
                Unterscheidung, ob die Eingabe durch einen Menschen oder missbräuchlich
                durch automatisierte, maschinelle Verarbeitung erfolgt.<br /><br />
                Die Abfrage schließt den Versand der IP-Adresse und ggf.
                weiterer von Google für den Dienst reCAPTCHA benötigter Daten an Google
                ein. Zu diesem Zweck wird Ihre Eingabe an Google übermittelt und dort
                weiter verwendet. Ihre IP-Adresse wird von Google jedoch innerhalb von
                Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten
                des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.{" "}
                <br /><br />
                Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server
                von Google in den USA übertragen und dort gekürzt. Im Auftrag des
                Betreibers dieser Website wird Google diese Informationen benutzen, um
                Ihre Nutzung dieses Dienstes auszuwerten. Die im Rahmen von reCaptcha
                von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten
                von Google zusammengeführt. Für diese Daten gelten die abweichenden
                Datenschutzbestimmungen des Unternehmens Google. Weitere Informationen
                zu den Datenschutzrichtlinien von Google finden Sie unter: <br />
                <StyledLink href="https://policies.google.com/privacy?hl=de">
                    https://policies.google.com/privacy?hl=de
                </StyledLink>
            </StyledParagraph>
        </StyledSection>
    );
}

const StyledHeadline = styled.h1`
    font-size: var(--font-size-title);
    text-decoration: underline;
    text-decoration-color: var(--color-secondary);

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

const StyledParagraph = styled.p`
    line-height: 1.5;
    @media (min-width: 1400px) {
    }
`;

const StyledSection = styled.section`
    padding: 1rem;
`;

const StyledLink = styled(Link)`
    color: var(--color-fourth);
    &:hover {
        color: var(--color-fifth);
        transition: all 0.3s ease-in-out;
    }
    &:not(:hover) {
        transition: all 0.2s ease-in-out;
    }
`;