import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { MapPin, ExternalLink } from "lucide-react";
import Greenbutton from "../Buttons/GreenButton";

const MAP_EMBED_URL =
	"https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d9733.706148067538!2d9.737020474686359!3d52.41706875254704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47b07308c9f8b3d1%3A0xcac079d74df9304a!2selektromaschinenbau%20schulze!3m2!1d52.415932399999996!2d9.7423229!5e0!3m2!1sde!2sde!4v1700135741460!5m2!1sde!2sde";

const ROUTE_URL =
	"https://www.google.com/maps/dir/?api=1&destination=Alter+Flughafen+6,+30179+Hannover";

// Zwei-Klick-Lösung: Die Google-Maps-Karte wird erst nach aktiver Einwilligung
// geladen. Die Einwilligung wird bewusst NICHT gespeichert (kein localStorage),
// sie gilt nur für den aktuellen Seitenaufruf – damit entfällt ein separater
// Widerrufs-Mechanismus.
export default function GoogleMapsConsent() {
	const [mapLoaded, setMapLoaded] = useState(false);

	return (
		<StyledMap>
			{mapLoaded ? (
				<StyledFrame
					title="Google Maps Karte"
					src={MAP_EMBED_URL}
					allowFullScreen=""
					referrerPolicy="no-referrer-when-downgrade"
				/>
			) : (
				<StyledPlaceholder>
					<StyledIcon aria-hidden="true">
						<MapPin size={32} />
					</StyledIcon>
					<StyledTitle>Alter Flughafen 6, 30179 Hannover</StyledTitle>
					<StyledHint>
						Mit dem Laden der Karte werden Daten (u.&nbsp;a. Ihre IP-Adresse)
						an Google übertragen und ggf. Cookies gesetzt. Mehr dazu in
						unserer{" "}
						<Link href="/privacy#google-maps">Datenschutzerklärung</Link>.
					</StyledHint>
					<Greenbutton onClick={() => setMapLoaded(true)}>
						Karte laden
					</Greenbutton>
					<StyledRouteLink
						href={ROUTE_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						Route in Google Maps planen
						<ExternalLink size={16} aria-hidden="true" />
					</StyledRouteLink>
				</StyledPlaceholder>
			)}
		</StyledMap>
	);
}

const MAP_HEIGHT_MOBILE = "400px";
const MAP_HEIGHT_DESKTOP = "500px";

const StyledMap = styled.article`
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	border: 1px solid #e5e7eb;
`;

const StyledFrame = styled.iframe`
	border: none;
	width: 100%;
	height: ${MAP_HEIGHT_MOBILE};
	display: block;

	@media (min-width: 768px) {
		height: ${MAP_HEIGHT_DESKTOP};
	}
`;

// Gleiche Höhe wie das iframe, damit beim Laden nichts springt (CLS).
// isolation: isolate sorgt dafür, dass der Hover-Effekt des Greenbutton
// (::before mit z-index: -1) über dem Hintergrund sichtbar bleibt.
const StyledPlaceholder = styled.div`
	isolation: isolate;
	height: ${MAP_HEIGHT_MOBILE};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 1.5rem;
	text-align: center;
	background-color: var(--color-third);
	background-image: radial-gradient(#dfe3ec 1px, transparent 1px);
	background-size: 20px 20px;

	@media (min-width: 768px) {
		height: ${MAP_HEIGHT_DESKTOP};
	}
`;

const StyledIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background-color: var(--color-primary);
	color: var(--color-secondary);
`;

const StyledTitle = styled.p`
	margin: 0;
	font-size: 1.125rem;
	font-weight: 600;
	color: var(--color-fourth);
`;

const StyledHint = styled.p`
	margin: 0;
	max-width: 32rem;
	font-size: 0.9rem;
	line-height: 1.6;
	color: var(--color-fourth);

	a {
		color: var(--color-secondary);
		text-decoration: underline;
	}
`;

const StyledRouteLink = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 0.4rem;
	font-size: 0.9rem;
	color: var(--color-fourth);
	text-decoration: underline;
	transition: color 0.2s ease;

	&:hover {
		color: var(--color-secondary);
	}
`;
