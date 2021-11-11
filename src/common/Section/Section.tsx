import React, { ReactNode, useRef } from "react";
import styled from "styled-components";

import { useSectionContext } from "./SectionContext";

const Section = styled.section<{ index: number }>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
  scroll-snap-align: start;
`;

type Props = {
  id: string;
  children?: ReactNode;
};

const SectionWrapper = ({ id, ...props }: Props) => {
  const { addSection, removeSection } = useSectionContext();
  const sectionRef = useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!sectionRef.current) return;
    addSection(id, sectionRef.current);
    return () => removeSection(id);
  }, [id, addSection, removeSection]);

  return <Section ref={sectionRef} {...props} />;
};

export default SectionWrapper;
