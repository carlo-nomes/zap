import { SVGProps } from "react";

const Bulma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-icon="bulma"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42 64"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 44L3.81818 16L19.0909 0L38.1818 20L26.7273 32L42 48L19.0909 64L0 44Z"
      fill="currentColor"
    />
  </svg>
);

export default Bulma;
