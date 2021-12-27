import {createGlobalStyle, css} from "../../_snowpack/pkg/styled-components.js";
import {normalize} from "../../_snowpack/pkg/styled-normalize.js";
const variables = css`
  // Gray Palette
  --colors-gray-100: hsl(0, 5%, 97%);
  --colors-gray-200: hsl(0, 5%, 80%);
  --colors-gray-300: hsl(0, 5%, 60%);
  --colors-gray-400: hsl(0, 5%, 30%);
  --colors-gray-500: hsl(0, 5%, 25%);
  --colors-gray-600: hsl(0, 5%, 20%);
  --colors-gray-700: hsl(0, 5%, 15%);
  --colors-gray-800: hsl(0, 5%, 10%);
  --colors-gray-900: hsl(0, 5%, 5%);
  --colors-gray: var(--colors-gray-500);

  // Primary Palette
  --colors-primary-500: hsl(48, 87%, 65%);
  --colors-primary: var(--colors-primary-500);

  // Secondary Palette
  --colors-secondary-500: hsl(3, 51%, 47%);
  --colors-secondary: var(--colors-secondary-500);

  // Tertiary Palette
  --colors-tertiary-500: hsl(152, 87%, 27%);
  --colors-tertiary: var(--colors-tertiary-500);

  --font-family-sans: "Open Sans", sans-serif;

  --transition-duration-default: 500ms;
  --transition-duration-long: 1000ms;

  --spacing-default: 1rem;
`;
const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    ${variables}

    background: var(--colors-gray-100);
    color: var(--colors-gray-900);

    font-family: var(--font-family-sans);
    font-size: 1rem;
  }
`;
export default GlobalStyle;
