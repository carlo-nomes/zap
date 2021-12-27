import React, { FC } from "react";
import styled from "styled-components";

import WaveBackground from "../common/WaveBackground";

const Wrapper = styled.div`
  height: 100%;
  background-color: var(--colors-secondary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WaveWrapper: FC = (props) => (
  <WaveBackground id="contact-wrapper" position="top" amount={2} min={0} max={0.2} as={Wrapper} {...props} />
);

export default WaveWrapper;
