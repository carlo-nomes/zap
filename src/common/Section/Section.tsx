import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";

import { useSectionContext } from "./SectionContext";

const Section = styled.section`
  box-sizing: border-box;

  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  position: relative;
`;

type Props = {
  id: string;
  className?: string;
  children?: ReactNode;
};

const SectionWrapper = ({ id, ...props }: Props) => {
  const { addSection, removeSection } = useSectionContext();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    addSection(id, sectionRef.current);
    return () => removeSection(id);
  }, [id, addSection, removeSection]);

  return <Section ref={sectionRef} id={id} {...props} />;
};

export default SectionWrapper;
