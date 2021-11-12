import React, {useMemo} from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
const Wrapper = styled.div`
  clip-path: url(#${({id}) => `${id}-wave-clip-path`});
`;
const getPath = (position, amount, min, max) => {
  const hd = (max + min) / 2;
  const step = 0.5 / amount;
  const start = {x: 0, y: hd};
  const curves = [];
  for (let i = 0; i < amount; i++) {
    const cp = {x: (curves[i - 1]?.end || start).x + step, y: i % 2 ? min : max};
    const end2 = {x: cp.x + step, y: hd};
    curves.push({cp, end: end2});
  }
  const end = {x: 1, y: hd};
  const curvesString = curves.map(({cp, end: end2}) => `Q${cp.x},${cp.y} ${end2.x},${end2.y}`).join(" ");
  if (position === "bottom")
    return `M${start.x},${start.y} ${curvesString} L${end.x},${end.y} L1,0 L0,0 Z`;
  return `M${start.x},${start.y} ${curvesString} L${end.x},${end.y} L1,1 L0,1 Z`;
};
const WaveBackground = ({children, position, amount, min, max, ...props}) => {
  const path = useMemo(() => getPath(position, amount, min, max), [position, amount, min, max]);
  return /* @__PURE__ */ React.createElement(Wrapper, {
    ...props
  }, /* @__PURE__ */ React.createElement("svg", {
    height: "0",
    width: "0"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: `${props.id}-wave-clip-path`,
    clipPathUnits: "objectBoundingBox"
  }, /* @__PURE__ */ React.createElement("path", {
    d: path
  })))), children);
};
export default WaveBackground;
