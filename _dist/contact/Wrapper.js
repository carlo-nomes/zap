import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import WaveBackground from "../common/WaveBackground.js";
const Wrapper = styled.div`
  height: 100%;
  background-color: var(--colors-secondary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WaveWrapper = (props) => /* @__PURE__ */ React.createElement(WaveBackground, {
  id: "contact-wrapper",
  position: "top",
  amount: 2,
  min: 0,
  max: 0.2,
  as: Wrapper,
  ...props
});
export default WaveWrapper;
