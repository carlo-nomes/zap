import React, {useCallback, useEffect, useReducer} from "../../../_snowpack/pkg/react.js";
import {useScrollContext} from "../ScrollContext/index.js";
import {isElementInView} from "../ScrollContext/util.js";
import useHash from "../useHash.js";
const SectionContext = React.createContext({
  sections: {},
  addSection: (_id, _node) => {
  },
  removeSection: (_id) => {
  }
});
export const useSectionContext = () => {
  const context = React.useContext(SectionContext);
  return context;
};
const sectionReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {...state, [action.id]: action.node};
    case "REMOVE":
      return Object.keys(state).filter((key) => key !== action.id).reduce((acc, key) => ({...acc, [key]: state[key]}), {});
    default:
      return state;
  }
};
const SectionContextProvider = ({children}) => {
  const {addListener, removeListener} = useScrollContext();
  const [hash, setHash] = useHash();
  const [sections, dispatchSection] = useReducer(sectionReducer, {});
  const addSection = useCallback((id, node) => dispatchSection({type: "ADD", id, node}), []);
  const removeSection = useCallback((id) => dispatchSection({type: "REMOVE", id}), []);
  useEffect(() => {
    const section = sections[hash];
    if (!section)
      return;
    if (isElementInView(section))
      return;
    section.scrollIntoView({behavior: "smooth"});
  }, [hash, sections]);
  useEffect(() => {
    const updateHash = () => {
      const [section, ...other] = Object.keys(sections).filter((k) => isElementInView(sections[k]));
      if (other.length)
        return;
      setHash(section);
    };
    addListener(updateHash);
    return () => removeListener(updateHash);
  }, [addListener, removeListener, sections, setHash]);
  return /* @__PURE__ */ React.createElement(SectionContext.Provider, {
    value: {sections, addSection, removeSection}
  }, children);
};
export default SectionContextProvider;
