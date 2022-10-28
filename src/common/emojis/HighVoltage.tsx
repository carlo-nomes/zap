import { HTMLProps } from "react";

const HighVoltage = (props: HTMLProps<HTMLSpanElement>) => (
  <span role="img" aria-label="high voltage" {...props}>
    ⚡
  </span>
);

export default HighVoltage;
