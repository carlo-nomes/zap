import React from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "./theme.json";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  font: ${({ theme }) => theme.font.base};
  color: ${({ theme }) => theme.colors.text};
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
);

export default Layout;
