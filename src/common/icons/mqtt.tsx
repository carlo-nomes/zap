import { SVGProps } from "react";

const MQTT = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-icon="mqtt"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="40 20 220 220"
    {...props}
  >
    <path
      fill="currentColor"
      d="M46.5 136.4h-.6V214c0 5.6 4.6 10.2 10.2 10.2H136c-.7-48.5-40.5-87.8-89.5-87.8zm0-64h-.6v33c65.9.3 119.5 53.3 120.2 118.8h34.2C199.7 140.4 131 72.4 46.5 72.4zm202.3 141.7V144c-23.2-56.8-69.9-101.7-128-122.6H56.1c-5.6 0-10.2 4.6-10.2 10.2v9.9c101.4.3 183.9 82 184.5 182.8h8.2c5.7-.1 10.2-4.6 10.2-10.2zM222.1 49.7c9.4 9.4 19 21.3 26.7 31.8v-50a10.07 10.07 0 0 0-10.1-10.1h-51.5c12 8.3 24.4 17.8 34.9 28.3z"
    />
  </svg>
);

export default MQTT;
