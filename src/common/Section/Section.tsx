import React, { ReactNode } from "react";
import styled from "styled-components";

import { useSectionContext } from "./SectionContainer";

const Section = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
  scroll-snap-align: start;

  background-color: ${({ color }) => color};
`;

type Props = {
  id: string;
  color?: string;
  children: ReactNode;
};

const SectionWrapper = (props: Props) => {
  // Cannot change id after init
  const { current: id } = React.useRef(props.id);
  if (id !== props.id && process.env.NODE_ENV === "development") {
    console.warn("props.id can't change after initialisation of Section component");
  }

  const { registerSection } = useSectionContext();
  const [node, setRef] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!id || !node) return;
    registerSection(id, node);
  }, [node, id, registerSection]);

  return <Section ref={setRef} {...props} />;
};

export default SectionWrapper;
