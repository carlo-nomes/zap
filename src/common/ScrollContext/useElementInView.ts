import { useRef, useState, useEffect } from "react";

import { useScrollContext } from "./ScrollContext";
import { isFullElementInView } from "./util";

const useElementInView = <ElementType extends HTMLElement>() => {
  const { addListener, removeListener } = useScrollContext();
  const element = useRef<ElementType>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const updateIsInView = () => element.current && setIsInView(isFullElementInView(element.current));
    addListener(updateIsInView);
    return () => removeListener(updateIsInView);
  }, [addListener, removeListener]);

  return [isInView, element] as const;
};

export default useElementInView;
