import React from "react";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyles";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
  </>
);

export default Layout;
