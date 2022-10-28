import { HTMLProps } from "react";

const ConstructionSign = (props: HTMLProps<HTMLSpanElement>) => (
  <span role="img" aria-label="Construction Sign" {...props}>
    🚧
  </span>
);

export default ConstructionSign;
