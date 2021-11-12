import React from "../../_snowpack/pkg/react.js";
const NUMBER_OF_CURVES = 7;
const MAX_DEPTH = 0.125;
const SMOOTH = 0.05;
const getPath = () => {
  const curves = [];
  for (let i = 0; i < NUMBER_OF_CURVES; i++) {
    const startX = curves[i - 1]?.endP.x || 0;
    const endX = (i + 1) / NUMBER_OF_CURVES;
    const lowestY = i % 2 ? 0 : MAX_DEPTH;
    const startCP = {x: startX + SMOOTH, y: lowestY};
    const endCP = {x: endX - SMOOTH, y: lowestY};
    const endP = {x: endX, y: MAX_DEPTH / 2};
    curves.push({startCP, endCP, endP});
  }
  const curvesString = curves.map((c) => `C${c.startCP.x},${c.startCP.y} ${c.endCP.x},${c.endCP.y} ${c.endP.x},${c.endP.y}`);
  return `M0,${MAX_DEPTH / 2} ${curvesString.join(" ")} L1,${MAX_DEPTH / 2} L1,1 L0,1 Z`;
};
const ClipPath = ({id}) => {
  return /* @__PURE__ */ React.createElement("svg", {
    height: "0",
    width: "0"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id,
    clipPathUnits: "objectBoundingBox"
  }, /* @__PURE__ */ React.createElement("path", {
    d: getPath()
  }))));
};
export default ClipPath;
