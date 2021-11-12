import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import AppSection from "../common/Section/index.js";
import Spacer from "../common/Spacer.js";
import Arrow from "../common/Arrow.js";
import Title from "./Title/index.js";
import SubTitle from "./SubTitle.js";
import Header from "./Header/index.js";
const Section = styled(AppSection)`
  background-color: var(--color-grey-100);
`;
const Wrapper = styled.div`
  position: fixed;

  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  display: flex;
  flex-direction: column;
`;
const Landing = () => /* @__PURE__ */ React.createElement(Section, {
  id: "landing"
}, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Title, null), /* @__PURE__ */ React.createElement(SubTitle, null)), /* @__PURE__ */ React.createElement(Spacer, null), /* @__PURE__ */ React.createElement(Arrow, {
  href: "#bio"
}));
export default Landing;
