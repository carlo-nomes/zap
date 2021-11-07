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
  sections: {} as Record<string, HTMLElement | null>,
  registerSection: (_id: string, _node: HTMLElement | null) => {},
});

const SectionContainer = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<Record<string, HTMLElement | null>>({});
  const registerSection = (id: string, node: HTMLElement | null) => setSections((prev) => ({ ...prev, [id]: node }));

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
    const id = Object.values(sections).find((element) => element?.getBoundingClientRect().top === 0)?.id || "";
    window.location.hash = `#${id}`;
    setHash(id);
  }, SCROLL_DEBOUNCE_TIME);

  return (
    <SectionContext.Provider value={{ sections, registerSection }}>
      <Main onScroll={updateScrollLocation}>{children}</Main>
    </SectionContext.Provider>
  );
};

const useSectionContext = () => {
  const context = React.useContext(SectionContext);

  if (!context) throw Error("useSectionContext is not available outside of SectionContainer");

  return context;
};

export default SectionContainer;
export { useSectionContext };
