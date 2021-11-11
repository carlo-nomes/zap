import React, { ReactNode, useCallback, useEffect, useReducer } from "react";
import styled from "styled-components";

import { useScrollContext } from "../ScrollContext";
import { isElementInView } from "../ScrollContext/util";

import useHash from "../useHash";
import Section from "./Section";

const EndSection = styled(Section)`
  height: 0;
`;

const SectionContext = React.createContext({
  sections: {} as Record<string, HTMLElement>,
  addSection: (_id: string, _node: HTMLElement) => {},
  removeSection: (_id: string) => {},
});

export const useSectionContext = () => {
  const context = React.useContext(SectionContext);
  return context;
};

type Action = { type: "ADD"; id: string; node: HTMLElement } | { type: "REMOVE"; id: string };
const sectionReducer = (state: Record<string, HTMLElement>, action: Action): Record<string, HTMLElement> => {
  switch (action.type) {
    case "ADD":
      return { ...state, [action.id]: action.node };
    case "REMOVE":
      return Object.keys(state)
        .filter((key) => key !== action.id)
        .reduce((acc, key) => ({ ...acc, [key]: state[key] }), {});
    default:
      return state;
  }
};

const SectionContextProvider = ({ children }: { children: ReactNode }) => {
  const { addListener, removeListener } = useScrollContext();
  const [hash, setHash] = useHash();

  const [sections, dispatchSection] = useReducer(sectionReducer, {} as Record<string, HTMLElement>);
  const addSection = useCallback((id: string, node: HTMLElement) => dispatchSection({ type: "ADD", id, node }), []);
  const removeSection = useCallback((id: string) => dispatchSection({ type: "REMOVE", id }), []);

  useEffect(() => {
    const section = sections[hash];

    if (!section) return;
    if (isElementInView(section)) return;

    section.scrollIntoView({ behavior: "smooth" });
  }, [hash, sections]);

  useEffect(() => {
    const updateHash = () => {
      const [section, ...other] = Object.keys(sections).filter((k) => isElementInView(sections[k]));
      if (other.length) return;
      setHash(section);
    };

    addListener(updateHash);
    return () => removeListener(updateHash);
  }, [addListener, removeListener, sections, setHash]);

  return (
    <SectionContext.Provider value={{ sections, addSection, removeSection }}>
      {children}
      <EndSection id="end" />
    </SectionContext.Provider>
  );
};

export default SectionContextProvider;
