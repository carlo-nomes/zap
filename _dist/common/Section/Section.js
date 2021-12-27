import React, {useRef} from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {useSectionContext} from "./SectionContext.js";
const Section = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
  scroll-snap-align: start;
`;
const SectionWrapper = ({id, ...props}) => {
  const {addSection, removeSection} = useSectionContext();
  const sectionRef = useRef(null);
  React.useEffect(() => {
    if (!sectionRef.current)
      return;
    addSection(id, sectionRef.current);
    return () => removeSection(id);
  }, [id, addSection, removeSection]);
  return /* @__PURE__ */ React.createElement(Section, {
    ref: sectionRef,
    id,
    ...props
  });
};
export default SectionWrapper;
