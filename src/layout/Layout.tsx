import { HTMLAttributes } from "react";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyles";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-y: auto;
  overflow-x: hidden;

  scroll-behavior: smooth;
`;

const Layout = ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
  <Wrapper {...props}>
    <GlobalStyle />
    {children}
  </Wrapper>
);

export default Layout;
