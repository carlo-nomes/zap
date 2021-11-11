import React, {
  useContext,
  createContext,
  useReducer,
  useCallback
} from "../../../_snowpack/pkg/react.js";
import {debounce} from "../../../_snowpack/pkg/lodash.js";
import {SCROLL_DEBOUNCE_TIME} from "./constants.js";
const ScrollContainerContext = createContext({
  addListener: (_func) => {
  },
  removeListener: (_func) => {
  }
});
export const useScrollContext = () => {
  return useContext(ScrollContainerContext);
};
const listenerReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.listener];
    case "REMOVE":
      return state.filter((listener) => listener !== action.listener);
    default:
      return state;
  }
};
const ScrollContext = ({Container, children}) => {
  const [listeners, dispatch] = useReducer(listenerReducer, []);
  const addListener = useCallback((listener) => dispatch({type: "ADD", listener}), []);
  const removeListener = useCallback((listener) => dispatch({type: "REMOVE", listener}), []);
  const handleScroll = debounce(() => listeners.forEach((listener) => listener()), SCROLL_DEBOUNCE_TIME);
  return /* @__PURE__ */ React.createElement(ScrollContainerContext.Provider, {
    value: {addListener, removeListener}
  }, /* @__PURE__ */ React.createElement(Container, {
    onScroll: handleScroll
  }, children));
};
export default ScrollContext;
