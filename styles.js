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
}
:root{
    --color-primary: #BAFFC6;
    --color-secondary: #34FF66;
    --color-third: #F5F6FF;
    --color-fourth: #4B5E6B;
    --color-fifth: #2C65FF;
    --font-size-text: 12px;
    --font-size-subtitle: 14px;
    --font-size-title: 16px;
    --font-size-headlines: 22px;
}

body {
    font-family: ${roboto.style.fontFamily};
    margin: 0;
    padding: 0;
    font-family: system-ui;
    font-size: 100%;
    width: 100%;
    height: 100%;
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
