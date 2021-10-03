import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"

import theme from "./theme.json"

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
`

const Layout = ({ element }) => (
  <>
    <Helmet>
      <meta
        name="Description"
        content="Lightning fast development and design."
      />
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji*/}
      <title>ZAP⚡DEV</title>
    </Helmet>
    <ThemeProvider theme={theme}>
      <Wrapper>{element}</Wrapper>
    </ThemeProvider>
  </>
)

export default Layout
