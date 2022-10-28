import { HTMLProps } from "react";

const Wave = (props: HTMLProps<HTMLSpanElement>) => (
  <span role="img" aria-label="Waving Hand" {...props}>
    👋
  </span>
);

export default Wave;
