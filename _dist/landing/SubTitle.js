import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {HighVoltage} from "../common/emojis/index.js";
const Wrapper = styled.h2`
  align-self: center;
  > span {
    margin: 0 10px;
  }

  text-transform: uppercase;
  text-align: center;

  font-size: 2rem;

  @media (max-width: 700px), (max-height: 700px) {
    font-size: 1rem;
  }
`;
const SubTitle = () => /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(HighVoltage, null), "Lightning fast development", /* @__PURE__ */ React.createElement(HighVoltage, null));
export default SubTitle;
