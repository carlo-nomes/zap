import React, {
  useContext,
  createContext,
  ReactNode,
  useReducer,
  useCallback,
  ComponentType,
  HTMLAttributes,
} from "react";
import useDebouncedCallback from "../useDebouncedCallback";

// High enough to prevent triggers during smooth scroll
const SCROLL_DEBOUNCE_TIME = 100;

const ScrollContainerContext = createContext({
  addListener: (_func: () => void) => {},
  removeListener: (_func: () => void) => {},
});

export const useScrollContext = () => {
  return useContext(ScrollContainerContext);
};

type Action = { type: "ADD" | "REMOVE"; listener: () => void };
const listenerReducer = (state: Array<() => void>, action: Action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.listener];
    case "REMOVE":
      return state.filter((listener) => listener !== action.listener);
    default:
      return state;
  }
};

type Props = {
  Container: ComponentType<HTMLAttributes<HTMLElement>>;
  children?: ReactNode;
};
const ScrollContext = ({ Container, children }: Props) => {
  const [listeners, dispatch] = useReducer(listenerReducer, []);
  const addListener = useCallback((listener: () => void) => dispatch({ type: "ADD", listener }), []);
  const removeListener = useCallback((listener: () => void) => dispatch({ type: "REMOVE", listener }), []);

  const handleScroll = useDebouncedCallback(() => listeners.forEach((listener) => listener()), SCROLL_DEBOUNCE_TIME);
  return (
    <ScrollContainerContext.Provider value={{ addListener, removeListener }}>
      <Container onScroll={handleScroll}>{children}</Container>
    </ScrollContainerContext.Provider>
  );
};
export default ScrollContext;
