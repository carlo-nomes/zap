import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";

const Main = styled.main`
  flex: 1;

  overflow-y: auto;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const SCROLL_DEBOUNCE_TIME = 100;

const SectionContext = React.createContext({
  sections: {} as Record<string, HTMLElement>,
  registerSection: (_id: string, _node: HTMLElement) => {},
});

const SectionContainer = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<Record<string, HTMLElement>>({});
  const registerSection = (id: string, node: HTMLElement) => setSections((prev) => ({ ...prev, [id]: node }));

  const [hash, setHash] = useState<string>("");
  // Keep hash in sync
  useEffect(() => {
    if (!window) return;
    window.onhashchange = () => setHash(window.location.hash.substring(1));
    setHash(window.location.hash.substring(1));

    // Remove listener when unmounting
    return () => {
      window.onhashchange = null;
    };
  }, []);

  useEffect(() => {
    if (sections[hash]) sections[hash]?.scrollIntoView();
  }, [hash, sections]);

  const updateScrollLocation = debounce(() => {
    const elementInView = Object.values(sections).find((element) => {
      const { top, bottom } = element.getBoundingClientRect();
      return top <= 0 && bottom > 0;
    });

    if (!elementInView) return;
    window.location.hash = `#${elementInView.id}`;
    setHash(elementInView.id);
  }, SCROLL_DEBOUNCE_TIME);

  return (
    <SectionContext.Provider value={{ sections, registerSection }}>
      <Main onScroll={updateScrollLocation}>{children}</Main>
    </SectionContext.Provider>
  );
};

const useSectionContext = () => {
  const context = React.useContext(SectionContext);
  return context;
};

export default SectionContainer;
export { useSectionContext };
