import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useReducer } from "react";

import { useScrollContext } from "../ScrollContext";
import { isElementInView } from "../ScrollContext/util";

import useHash from "../useHash";

const SectionContext = createContext({
  sections: {} as Record<string, HTMLElement>,
  addSection: (_id: string, _node: HTMLElement) => {},
  removeSection: (_id: string) => {},
});

export const useSectionContext = () => {
  const context = useContext(SectionContext);
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

const SectionContextProvider = ({ children }: PropsWithChildren) => {
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
      const [section] = Object.entries(sections)
        .sort(([_key1, element1], [_key2, element2]) => {
          // sort by amount of pixels visible
          const rect1 = element1.getBoundingClientRect();
          const rect2 = element2.getBoundingClientRect();

          const bottom1 = rect1.bottom > window.innerHeight ? window.innerHeight : rect1.bottom;
          const bottom2 = rect2.bottom > window.innerHeight ? window.innerHeight : rect2.bottom;

          const top1 = rect1.top < 0 ? 0 : rect1.top;
          const top2 = rect2.top < 0 ? 0 : rect2.top;

          const visible1 = bottom1 - top1;
          const visible2 = bottom2 - top2;

          return visible2 - visible1;
        })
        .map(([key]) => key);

      setHash(section);
    };

    addListener(updateHash);
    return () => removeListener(updateHash);
  }, [addListener, removeListener, sections, setHash]);

  return <SectionContext.Provider value={{ sections, addSection, removeSection }}>{children}</SectionContext.Provider>;
};

export default SectionContextProvider;
