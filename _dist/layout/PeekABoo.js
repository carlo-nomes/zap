import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {HearNoEvil, SeeNoEvil} from "../common/emojis/index.js";
const Hidden = styled.div`
  position: absolute;
  top: -60px;
  z-index: 1;

  width: 100%;
  height: 50px;
  overflow: hidden;
  padding: 5px;

  text-align: center;
  font-size: 50px;
`;
const usePeekABoo = (delay) => {
  const [peekABoo, setPeekABoo] = React.useState(false);
  React.useEffect(() => {
    const interval = setInterval(() => setPeekABoo((prevState) => !prevState), delay);
    return () => clearInterval(interval);
  }, []);
  return peekABoo;
};
const PeekABoo = ({delay = 3e3}) => {
  const peekABoo = usePeekABoo(delay);
  return /* @__PURE__ */ React.createElement(Hidden, null, peekABoo ? /* @__PURE__ */ React.createElement(HearNoEvil, null) : /* @__PURE__ */ React.createElement(SeeNoEvil, null));
};
export default PeekABoo;
