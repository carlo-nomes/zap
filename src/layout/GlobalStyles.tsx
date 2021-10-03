import { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";

const variables = css`
  // Gray Palette
  --colors-gray-100: hsl(200, 100%, 97%);
  --colors-gray-200: hsl(200, 50%, 85%);
  --colors-gray-300: hsl(200, 28%, 70%);
  --colors-gray-400: hsl(200, 15%, 50%);
  --colors-gray-500: hsl(200, 25%, 40%);
  --colors-gray-600: hsl(200, 30%, 30%);
  --colors-gray-700: hsl(200, 40%, 20%);
  --colors-gray-800: hsl(200, 60%, 15%);
  --colors-gray-800: hsl(200, 60%, 5%);
  --colors-gray: var(--colors-gray-500);

  // Primary Palette
  --colors-primary-100: hsl(48, 87%, 97%);
  --colors-primary-300: hsl(48, 87%, 70%);
  --colors-primary-500: hsl(48, 87%, 65%);
  --colors-primary-700: hsl(48, 87%, 20%);
  --colors-primary-900: hsl(48, 87%, 10%);
  --colors-primary: var(--colors-primary-500);

  --font-family-sans: "Open Sans", sans-serif;

  --transition-duration-default: 500ms;

  --spacing-default: 1rem;
`;

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    ${variables}

    background: var(--colors-primary);
    color: var(--colors-gray-900);

    font-family: var(--font-family-sans);
    font-size: 1rem;
  }
`;

export default GlobalStyle;
