import React, { ReactElement } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  clip-path: url(#${({ id }: { id: string }) => `${id}-wave-clip-path`});
`;

type Coordinates = { x: number; y: number };
type Curve = { cp: Coordinates; start: Coordinates; end: Coordinates };

const NUMBER_OF_CURVES = 10;
const MIN_DEPTH = 0;
const MAX_DEPTH = 0.125;
const HALF_DEPTH = (MIN_DEPTH + MAX_DEPTH) / 2;

const getPath = () => {
  const curves: Curve[] = [];
  const step = 1 / NUMBER_OF_CURVES / 2;
  for (let i = 0; i < NUMBER_OF_CURVES; i++) {
    const start = i === 0 ? { x: 0, y: HALF_DEPTH } : curves[i - 1].end;

    const cp = { x: start.x + step, y: i % 2 ? MAX_DEPTH : MIN_DEPTH };
    const end = { x: cp.x + step, y: HALF_DEPTH };

    curves.push({ start, cp, end });
  }

  const curvesString = curves.map(({ cp, end }) => `Q${cp.x},${cp.y} ${end.x},${end.y}`);
  return `M0,${HALF_DEPTH} ${curvesString.join(" ")} L1,${HALF_DEPTH} L1,1 L0,1 Z`;
};

type WaveSvgProps = {
  id: string;
};
const WaveSvg = ({ id }: WaveSvgProps) => {
  const pathValue = getPath();
  return (
    <svg height="0" width="0">
      <defs>
        <clipPath id={`${id}-wave-clip-path`} clipPathUnits="objectBoundingBox">
          <path d={pathValue}></path>
        </clipPath>
      </defs>
    </svg>
  );
};

type Props = {
  id: string;
  className?: string;
  children?: React.ReactNode;
  as: (props: any, context?: any) => ReactElement<any, any> | null;
};

const WaveBackground = ({ children, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <WaveSvg id={props.id} />
      {children}
    </Wrapper>
  );
};

export default WaveBackground;
