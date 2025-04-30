import styled from "styled-components";
import Image from "next/image";

export default function Certificates({ device }) {
    return (
        <StyledSectionForWidth id="certificates" device={device}>
            <StyledCertificatesContainer device={device}>
                <StyledCertificatesText>
                    <StyledHeadline>Unsere Zertifikate</StyledHeadline>
                    <StyledParagraph>
                        Unser ISO 9001:2015 Zertifikat belegt unser Engagement für Qualität und kontinuierliche Verbesserung. Es zeigt, dass wir die höchsten Standards in der Branche einhalten und unseren Kunden stets die besten Lösungen bieten.
                    </StyledParagraph>
                    <StyledDownloadButton href="/Zertifikate/Zertifikatiso9001.pdf" download>
                        Zertifikat herunterladen
                    </StyledDownloadButton>
                </StyledCertificatesText>

                <StyledCertificatesImageContainer device={device}>
                    <a href="/Zertifikate/Zertifikatiso9001.pdf" download>
                        <Image
                            src="/Zertifikatvorschau.png"
                            alt="Zertifikat Vorschau"
                            width={500}
                            height={500}
                        />
                    </a>
                </StyledCertificatesImageContainer>
            </StyledCertificatesContainer>
        </StyledSectionForWidth>
    );
}

const StyledSectionForWidth = styled.section`
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10rem;

`;

const StyledCertificatesContainer = styled.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    @media (min-width: 768px) {
        width: 100%;
        padding-bottom: 0;
    }
`;

const StyledCertificatesText = styled.div`
    text-align: center;

`;

const StyledParagraph = styled.p`
    font-size: var(--font-size-text);
    color: var(--color-fourth);
    margin-top: 1rem;
    margin-bottom: 2rem;
    max-width: 500px;
    text-align: left;
`;

const StyledHeadline = styled.h1`
	width: 10rem;
    margin: auto;
	@media (min-width: 768px) {
		width: 12rem;
	}
	@media (min-width: 1025px) {
		margin-top: 5%;
		text-shadow: 1px 3px 1px #eee;
	}
	border-bottom: 2px solid var(--color-primary);
`;

const StyledDownloadButton = styled.a`
    background-color: var(--color-primary);
    text-decoration: none;
	border: none;
	padding: 0.6rem;
	min-width: 6rem;
	font-size: var(--font-size-text);
	color: var(--color-fourth);
	margin-bottom: ${({ $margin }) => $margin + "rem"};
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:active {
		box-shadow: inset 1px 1px 5px 0px black;
	}

	&:hover {
		background-color: var(--color-fourth);
		color: white;
		
	}
`;

const StyledCertificatesImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
`;
