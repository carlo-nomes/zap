import React, {useEffect, useState} from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import debounce from "../../../_snowpack/pkg/lodash.debounce.js";
const Main = styled.main`
  flex: 1;

  overflow-y: auto;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;
const SCROLL_DEBOUNCE_TIME = 100;
const SectionContext = React.createContext({
  sections: {},
  registerSection: (id, node) => {
  }
});
const SectionContainer = ({children}) => {
  const [sections, setSections] = useState({});
  const registerSection = (id, node) => setSections((prev) => ({...prev, [id]: node}));
  const [hash, setHash] = useState("");
  useEffect(() => {
    if (!window)
      return;
    window.onhashchange = () => setHash(window.location.hash.substring(1));
    setHash(window.location.hash.substring(1));
    return () => {
      window.onhashchange = null;
    };
  }, []);
  useEffect(() => {
    if (sections[hash])
      sections[hash]?.scrollIntoView();
  }, [hash, sections]);
  const updateScrollLocation = debounce(() => {
    const id = Object.values(sections).find((element) => element?.getBoundingClientRect().top === 0)?.id || "";
    window.location.hash = `#${id}`;
    setHash(id);
  }, SCROLL_DEBOUNCE_TIME);
  return /* @__PURE__ */ React.createElement(SectionContext.Provider, {
    value: {sections, registerSection}
  }, /* @__PURE__ */ React.createElement(Main, {
    onScroll: updateScrollLocation
  }, children));
};
const useSectionContext = () => {
  const context = React.useContext(SectionContext);
  if (!context)
    throw Error("useSectionContext is not available outside of SectionContainer");
  return context;
};
export default SectionContainer;
export {useSectionContext};
