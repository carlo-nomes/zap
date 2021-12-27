import {useEffect, useState} from "../../_snowpack/pkg/react.js";
import {useScrollContext} from "../common/ScrollContext/index.js";
const isIdTopOutOfView = (id) => {
  const sectionEl = document.querySelector(`#${id}`);
  if (!sectionEl)
    return true;
  return sectionEl.getBoundingClientRect().top < 0;
};
const useIsTopOutOfView = (id) => {
  const [isTopOutOfView, setIsTopOutOfView] = useState(false);
  const {addListener, removeListener} = useScrollContext();
  useEffect(() => {
    const listener = () => setIsTopOutOfView(isIdTopOutOfView(id));
    addListener(listener);
    return () => removeListener(listener);
  }, [addListener, id, removeListener]);
  return isTopOutOfView;
};
export default useIsTopOutOfView;
