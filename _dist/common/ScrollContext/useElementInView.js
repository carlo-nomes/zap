import {useRef, useState, useEffect} from "../../../_snowpack/pkg/react.js";
import {useScrollContext} from "./ScrollContext.js";
import {isElementInView} from "./util.js";
const useElementInView = () => {
  const {addListener, removeListener} = useScrollContext();
  const element = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const updateIsInView = () => element.current && setIsInView(isElementInView(element.current));
    addListener(updateIsInView);
    return () => removeListener(updateIsInView);
  }, [addListener, removeListener]);
  return [isInView, element];
};
export default useElementInView;
