import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import * as Socials from "../../common/Socials/index.js";
const Wrapper = styled.header`
  align-self: stretch;

  display: flex;
  flex-direction: row;

  justify-content: flex-end;
`;
const List = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: auto;
  margin: 0;
  padding: 10px;
`;
const Header = () => /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(Socials.GitHub, null), /* @__PURE__ */ React.createElement(Socials.Codepen, null), /* @__PURE__ */ React.createElement(Socials.Medium, null), /* @__PURE__ */ React.createElement(Socials.LinkedIn, null), /* @__PURE__ */ React.createElement(Socials.Instagram, null), /* @__PURE__ */ React.createElement(Socials.Twitter, null)));
export default Header;
