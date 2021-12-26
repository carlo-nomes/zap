import { useEffect, useState } from "react";
import { useScrollContext } from "../common/ScrollContext";

const isIdTopOutOfView = (id: string) => {
  const sectionEl = document.querySelector(`#${id}`);
  if (!sectionEl) return true;
  return sectionEl.getBoundingClientRect().top < 0;
};

const useIsTopOutOfView = (id: string) => {
  const [isTopOutOfView, setIsTopOutOfView] = useState(false);
  const { addListener, removeListener } = useScrollContext();

  useEffect(() => {
    const listener = () => setIsTopOutOfView(isIdTopOutOfView(id));
    addListener(listener);
    return () => removeListener(listener);
  }, [addListener, id, removeListener]);

  return isTopOutOfView;
};

export default useIsTopOutOfView;
