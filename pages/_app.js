import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
	const [scrollY, setScrollY] = useState(0);
	const [device, setDevice] = useState("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			function handleResize() {
				if (window.matchMedia("(min-width: 1024px)").matches) {
					setDevice(true);
				} else {
					setDevice(false);
				}
			}

			handleResize();

			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Elektromaschinenbau Schulze</title>
				<meta
					name="description"
					content="Wir sind der richtige Ansprechpartner, wenn es um Krananlagen geht! Unser erfahrenes Team bietet umfassende Leistungen wie Wartung, Reparatur und die Erfüllung der UVV-Vorschriften für Ihre Krananlagen. Verlassen Sie sich auf unsere Expertise."
				/>
				<link
					rel="canonical"
					href="https://www.elektromaschinenbau-schulze.de/"
				/>
			</Head>
			<Component
				{...pageProps}
				scrollY={scrollY}
				device={device}
				setDevice={setDevice}
			/>
			<Analytics />
		</>
	);
}
