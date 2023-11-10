import { createGlobalStyle } from "styled-components";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"], weight: "400" });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-primary: #BAFFC6;
    --color-secondary: #178012;
    --color-third: #F5F6FF;
    --color-fourth: #4B5E6B;
    --color-fifth: #181E90;
    --font-size-text: 12px;
    --font-size-subtitle: 14px;
    --font-size-title: 16px;
    --font-size-headlines: 22px;
    @media (min-width: 768px) {
      --font-size-text: 1rem;
      --font-size-subtitle: 1.2rem;
      --font-size-title: 1.3rem;
      --font-size-headlines: 1.8rem;
    }
  }

  body {
    font-family: ${roboto.style.fontFamily}, sans-serif;
    margin: 0;
    padding: 0;
    font-family: system-ui;
    font-size: 100%;
    width: 100%;
    height: 100%;
    @media (min-width: 1199px) {
      margin: auto;
    }

    .react-responsive-carousel .carousel .slide[aria-hidden="true"] {
  pointer-events: none;
}
    @font-face {
      font-family: 'Roboto';
      src: url('/path/to/your-font.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: optional;
    }
  }

  h1 {
    font-size: var(--font-size-title);
    font-weight: 700;
    color: var(--color-fourth);
  }

  h2 {
    font-size: var(--font-size-subtitle);
    font-weight: 700;
    color: var(--color-fourth);
  }

  p {
    font-size: var(--font-size-text);
    font-weight: 400;
    color: var(--color-fourth);
  }
`;
