import React from "../../_snowpack/pkg/react.js";
import styled, {ThemeProvider} from "../../_snowpack/pkg/styled-components.js";
import theme from "./theme.json.proxy.js";
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  font: ${({theme: theme2}) => theme2.font.base};
  color: ${({theme: theme2}) => theme2.colors.text};
`;
const Layout = ({children}) => /* @__PURE__ */ React.createElement(ThemeProvider, {
  theme
}, /* @__PURE__ */ React.createElement(Wrapper, null, children));
export default Layout;
