import React from "../snowpack/pkg/react.js";
import {SectionContainer} from "./common/Section/index.js";
import Landing from "./landing/index.js";
import Bio from "./bio/index.js";
import Layout from "./layout/index.js";
const App = () => {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(SectionContainer, null, /* @__PURE__ */ React.createElement(Landing, null), /* @__PURE__ */ React.createElement(Bio, null)));
};
export default App;
