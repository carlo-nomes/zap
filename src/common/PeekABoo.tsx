import React from "react";
import styled from "styled-components";

import { HearNoEvil, SeeNoEvil } from "./emojis";

const Hidden = styled.div`
  position: absolute;
  top: -60px;
  z-index: 1;

  width: 100%;
  height: 50px;
  overflow: hidden;
  padding: 5px;

  text-align: center;
  font-size: 50px;
`;

const usePeekABoo = (delay: number) => {
  const [peekABoo, setPeekABoo] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => setPeekABoo((prevState) => !prevState), delay);
    return () => clearInterval(interval);
  }, []);

  return peekABoo;
};

const PeekABoo = ({ delay = 3000 }) => {
  const peekABoo = usePeekABoo(delay);
  return <Hidden>{peekABoo ? <HearNoEvil /> : <SeeNoEvil />}</Hidden>;
};

export default PeekABoo;
