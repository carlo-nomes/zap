import { HTMLProps } from "react";

const HearNoEvil = (props: HTMLProps<HTMLSpanElement>) => (
  <span role="img" aria-label="Hear No Evil" {...props}>
    🙉
  </span>
);

export default HearNoEvil;
