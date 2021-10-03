import React from "../pkg/react.js";
import styled from "../pkg/styled-components.js";
import {ConstructionSign} from "../common/emojis/index.js";
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
const SubTitle = () => /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(ConstructionSign, null), "under construction", /* @__PURE__ */ React.createElement(ConstructionSign, null));
export default SubTitle;
