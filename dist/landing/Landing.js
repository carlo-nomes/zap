import React from "../pkg/react.js";
import Section from "../common/Section/index.js";
import Spacer from "../common/Spacer.js";
import Arrow from "../common/Arrow.js";
import Title from "./Title/index.js";
import SubTitle from "./SubTitle.js";
import Header from "./Header/index.js";
const Landing = () => /* @__PURE__ */ React.createElement(Section, {
  id: "landing",
  color: "light"
}, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Spacer, null), /* @__PURE__ */ React.createElement(Title, null), /* @__PURE__ */ React.createElement(SubTitle, null), /* @__PURE__ */ React.createElement(Spacer, null), /* @__PURE__ */ React.createElement(Arrow, {
  href: "#bio"
}));
export default Landing;
