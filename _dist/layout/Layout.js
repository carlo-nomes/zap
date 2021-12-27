import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import GlobalStyle from "./GlobalStyles.js";
const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-y: auto;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;
const Layout = ({children, ...props}) => /* @__PURE__ */ React.createElement(Wrapper, {
  ...props
}, /* @__PURE__ */ React.createElement(GlobalStyle, null), children);
export default Layout;
