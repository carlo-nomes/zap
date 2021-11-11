import React from "../_snowpack/pkg/react.js";
import ScrollContext from "./common/ScrollContext/index.js";
import {SectionContext} from "./common/Section/index.js";
import Layout from "./layout/index.js";
import Landing from "./landing/index.js";
import Bio from "./bio/index.js";
import Timeline from "./timeline/index.js";
const App = () => {
  return /* @__PURE__ */ React.createElement(ScrollContext, {
    Container: Layout
  }, /* @__PURE__ */ React.createElement(SectionContext, null, /* @__PURE__ */ React.createElement(Landing, null), /* @__PURE__ */ React.createElement(Bio, null), /* @__PURE__ */ React.createElement(Timeline, null)));
};
export default App;
