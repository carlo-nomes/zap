import { useEffect, useState } from "react";
import styled from "styled-components";
import useGlyphTransition from "../common/use-glyph-transition";

const HYPE_ROTATION = 10000;
const HYPES = [
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

const HypeWrapper = styled.h2`
  letter-spacing: 0.05em;
`;

const HypeText = () => {
  const [prevHype, setPrevHype] = useState(HYPES[0] ?? "");
  const [nextHype, setNextHype] = useState(HYPES[0] ?? "");
  const { text, stage } = useGlyphTransition(prevHype, nextHype);

  useEffect(() => {
    if (stage !== "DONE") return;

    const timeout = setTimeout(() => {
      const currentIndex = HYPES.indexOf(nextHype);
      const nextIndex = (currentIndex + 1) % HYPES.length;
      const nextValue = HYPES[nextIndex];
      if (nextValue) {
        setPrevHype(nextHype);
        setNextHype(nextValue);
      }
    }, HYPE_ROTATION);

    return () => clearTimeout(timeout);
  }, [stage, nextHype]);

  return (
    <HypeWrapper aria-label={nextHype}>
      <pre>{text}</pre>
    </HypeWrapper>
  );
};

export default HypeText;
