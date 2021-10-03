import React from "../../pkg/react.js";
import styled from "../../pkg/styled-components.js";
import List, {Items} from "./List/index.js";
const Wrapper = styled.header`
  align-self: stretch;

  display: flex;
  flex-direction: row;

  justify-content: flex-end;
`;
export default () => /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(Items.GitHub, null), /* @__PURE__ */ React.createElement(Items.Codepen, null), /* @__PURE__ */ React.createElement(Items.Medium, null), /* @__PURE__ */ React.createElement(Items.LinkedIn, null), /* @__PURE__ */ React.createElement(Items.Instagram, null), /* @__PURE__ */ React.createElement(Items.Twitter, null)));
