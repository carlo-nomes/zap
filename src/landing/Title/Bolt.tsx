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

const Background = styled.div`
  width: 100%;
  height: 100%;

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

const ClipPath = styled.div`
  clip-path: path("M0 0 H150 L100 150 H150 L50 350 V200 H0 Z");
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 350px;
`;

const Wrapper = styled.div`
  z-index: -1;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
`;

const Bolt = () => (
  <Wrapper>
    <ClipPath>
      <Background />
    </ClipPath>
  </Wrapper>
);

export default Bolt;
