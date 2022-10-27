import styled, { keyframes } from "styled-components";

const gradientKeys = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 0 100%;
  }
  100% {
    background-position: 0 0;
  }
`;

const Wrapper = styled.div`
  aspect-ratio: 150/350;
`;

const Shape = styled.div`
  width: 100%;
  height: 100%;

  clip-path: url(#bolt-clip-path);

  --bolt-color-1: hsl(218, 95%, 74%);
  --bolt-color-2: hsl(151, 83%, 35%);
  --bolt-color-3: hsl(25, 88.6%, 75.9%);
  --bolt-color-4: hsl(1, 43%, 54%);
  --bolt-color-5: hsl(48, 87%, 65%);

  background: var(--bolt-color-5);
  background: linear-gradient(
    35deg,
    var(--bolt-color-1),
    var(--bolt-color-2),
    var(--bolt-color-3),
    var(--bolt-color-4),
    var(--bolt-color-5)
  );

  background-size: 400% 400%;

  animation: ${gradientKeys} 20s ease-in-out infinite;
`;

type Props = {
  className?: string;
};
const Bolt = (props: Props) => (
  <Wrapper {...props}>
    <Shape aria-label="lightning bolt">
      <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="bolt-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0 0 H1 L0.6666666666 0.4285714286 H1 L0.3333333333 1 V0.5714285714 H0 Z" />
        </clipPath>
      </svg>
    </Shape>
  </Wrapper>
);

export default Bolt;
