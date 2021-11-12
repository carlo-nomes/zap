import React, { ReactElement } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  clip-path: url(#${({ id }: { id: string }) => `${id}-wave-clip-path`});
`;

type Coordinates = { x: number; y: number };

const SMOOTH = 0.05;
const MIN_DEPTH = 0;
const MAX_DEPTH = 0.15;
const HALF_DEPTH = (MAX_DEPTH - MIN_DEPTH) / 2;

const getRandomInt = (min: number, max: number, round: number = 1000) => {
  return Math.round((min + Math.random() * (max - min)) * round) / round;
};

const getPath = () => {
  const numberOfCurves = Math.round(getRandomInt(3, 7));
  const STEP = 1 / numberOfCurves;

  const start: Coordinates = { x: 0, y: getRandomInt(MIN_DEPTH, MAX_DEPTH) };
  const curves: { cp: Coordinates; end: Coordinates }[] = [];
  for (let i = 0; i < numberOfCurves; i++) {
    const step = STEP / 2;
    const max = getRandomInt(HALF_DEPTH + SMOOTH, MAX_DEPTH);
    const min = getRandomInt(MIN_DEPTH, HALF_DEPTH - SMOOTH);

    const cp = { x: (curves[i - 1]?.end || start).x + step, y: i % 2 ? min : max };
    const end = { x: cp.x + step, y: HALF_DEPTH };

    curves.push({ cp, end });
  }
  const end = { x: 1, y: getRandomInt(MIN_DEPTH, MAX_DEPTH) };

  const curvesString = curves.map(({ cp, end }) => `Q${cp.x},${cp.y} ${end.x},${end.y}`);
  return `M${start.x},${start.y} ${curvesString.join("")} L${end.x},${end.y} L1,1 L0,1 Z`;
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
