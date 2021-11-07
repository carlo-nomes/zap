import React, { HTMLProps } from "react";

const SeeNoEvil = (props: HTMLProps<HTMLSpanElement>) => (
  <span role="img" aria-label="See No Evil" {...props}>
    🙈
  </span>
);

export default SeeNoEvil;
