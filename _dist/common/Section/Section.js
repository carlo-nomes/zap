import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {useSectionContext} from "./SectionContainer.js";
const Section = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
  scroll-snap-align: start;

  background-color: ${({color}) => color};
`;
const SectionWrapper = (props) => {
  const {current: id} = React.useRef(props.id);
  if (id !== props.id && process.env.NODE_ENV === "development") {
    console.warn("props.id can't change after initialisation of Section component");
  }
  const {registerSection} = useSectionContext();
  const [node, setRef] = React.useState(null);
  React.useEffect(() => {
    if (id)
      registerSection(id, node);
  }, [node, id]);
  return /* @__PURE__ */ React.createElement(Section, {
    ref: setRef,
    ...props
  });
};
export default SectionWrapper;
