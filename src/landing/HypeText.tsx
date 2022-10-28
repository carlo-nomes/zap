import { ReactNode, useState, useEffect } from "react";
import styled from "styled-components";

const HYPE_INTERVAL = 10000;

const hypes: ReactNode[] = [
  "Full Stack Development",
  "Cloud Native Development",
  "Agile Coaching",
  "JavaScript Coaching",
  "TypeScript Coaching",
  "Node.js Coaching",
  "React Coaching",
  "AWS Coaching",
  "UX/UI Design",
];

const HypeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  h2 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    transition: opacity 0.5s ease-in-out;
    opacity: 0;
    &.active {
      opacity: 1;
    }
  }
`;

const HypeText = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex(() => Math.floor(Math.random() * hypes.length)), HYPE_INTERVAL);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <HypeWrapper>
      {hypes.map((hype, i) => (
        <h2 key={i} className={i === index ? "active" : ""}>
          {hype}
        </h2>
      ))}
    </HypeWrapper>
  );
};

export default HypeText;
