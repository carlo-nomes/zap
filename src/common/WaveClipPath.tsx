import React from "react";

const NUMBER_OF_CURVES = 7;
const MAX_DEPTH = 0.125;
const SMOOTH = 0.05;

const getPath = () => {
  const curves: Record<string, { x: number; y: number }>[] = [];
  for (let i = 0; i < NUMBER_OF_CURVES; i++) {
    const startX = curves[i - 1]?.endP.x || 0;
    const endX = (i + 1) / NUMBER_OF_CURVES;

    const lowestY = i % 2 ? 0 : MAX_DEPTH;

    const startCP = { x: startX + SMOOTH, y: lowestY };
    const endCP = { x: endX - SMOOTH, y: lowestY };

    const endP = { x: endX, y: MAX_DEPTH / 2 };

    curves.push({ startCP, endCP, endP });
  }

  const curvesString = curves.map(
    (c) => `C${c.startCP.x},${c.startCP.y} ${c.endCP.x},${c.endCP.y} ${c.endP.x},${c.endP.y}`
  );

  return `M0,${MAX_DEPTH / 2} ${curvesString.join(" ")} L1,${MAX_DEPTH / 2} L1,1 L0,1 Z`;
};

type Props = {
  id: string;
};
const ClipPath = ({ id }: Props) => {
  return (
    <svg height="0" width="0">
      <defs>
        <clipPath id={id} clipPathUnits="objectBoundingBox">
          <path d={getPath()}></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default ClipPath;
