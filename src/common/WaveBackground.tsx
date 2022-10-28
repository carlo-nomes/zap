import React, { ReactElement, useMemo } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ id: string; bg: string }>`
  --curve-height: 5rem;
  --background-image: ${({ bg }) => bg};

  &:before {
    content: "";

    width: 100%;
    height: var(--curve-height);

    clip-path: url(#${({ id }: { id: string }) => `${id}-wave-clip-path`});
    background: var(--background-image);
  }
  background: var(--background-image) center var(--curve-height) / cover no-repeat;
`;

type Coordinates = { x: number; y: number };

const getPath = (amount: number, min: number, max: number) => {
  const half = (max + min) / 2; // 0.5
  const step = 0.5 / amount;

  const start: Coordinates = { x: 0, y: half };
  const curves: { cp: Coordinates; end: Coordinates }[] = [];
  for (let i = 0; i < amount; i++) {
    const prevEnd = curves[i - 1]?.end ?? start;
    const cp = { x: prevEnd.x + step, y: i % 2 ? min - half : max + half };
    const end = { x: cp.x + step, y: half };
    curves.push({ cp, end });
  }

  const curvesString = curves.map(({ cp, end }) => `Q${cp.x},${cp.y} ${end.x},${end.y}`).join(" ");
  return `M${start.x},${start.y} ${curvesString}  L1,1 L0,1 Z`;
};

type Props = {
  id: string;
  amount: number;
  min?: number;
  max?: number;
  bg: string;
  className?: string;
  children?: React.ReactNode;
  as: (props: any, context?: any) => ReactElement<any, any> | null;
};

const WaveBackground = ({ children, amount, min = 0, max = 1, ...props }: Props) => {
  const path = useMemo(() => getPath(amount, min, max), [amount, min, max]);
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
