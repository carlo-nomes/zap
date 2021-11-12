import React, { ReactElement, useMemo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  clip-path: url(#${({ id }: { id: string }) => `${id}-wave-clip-path`});
`;

type Coordinates = { x: number; y: number };

const getPath = (position: "top" | "bottom", amount: number, min: number, max: number) => {
  const hd = (max + min) / 2;
  const step = 0.5 / amount;

  const start: Coordinates = { x: 0, y: hd };
  const curves: { cp: Coordinates; end: Coordinates }[] = [];
  for (let i = 0; i < amount; i++) {
    const cp = { x: (curves[i - 1]?.end || start).x + step, y: i % 2 ? min : max };
    const end = { x: cp.x + step, y: hd };
    curves.push({ cp, end });
  }
  const end = { x: 1, y: hd };

  const curvesString = curves.map(({ cp, end }) => `Q${cp.x},${cp.y} ${end.x},${end.y}`).join(" ");
  if (position === "bottom") return `M${start.x},${start.y} ${curvesString} L${end.x},${end.y} L1,0 L0,0 Z`;
  return `M${start.x},${start.y} ${curvesString} L${end.x},${end.y} L1,1 L0,1 Z`;
};

type Props = {
  id: string;
  position: "top" | "bottom";
  amount: number;
  min: number;
  max: number;
  className?: string;
  children?: React.ReactNode;
  as: (props: any, context?: any) => ReactElement<any, any> | null;
};

const WaveBackground = ({ children, position, amount, min, max, ...props }: Props) => {
  const path = useMemo(() => getPath(position, amount, min, max), [position, amount, min, max]);
  return (
    <Wrapper {...props}>
      <svg height="0" width="0">
        <defs>
          <clipPath id={`${props.id}-wave-clip-path`} clipPathUnits="objectBoundingBox">
            <path d={path}></path>
          </clipPath>
        </defs>
      </svg>

      {children}
    </Wrapper>
  );
};

export default WaveBackground;
