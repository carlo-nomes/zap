import React from "react"
import styled from "styled-components"

import List, { Items } from "./list"

const Wrapper = styled.header`
  align-self: stretch;

  display: flex;
  flex-direction: row;

  justify-content: flex-end;
`

export default () => (
  <Wrapper>
    <List>
      <Items.GitHub />
      <Items.Codepen />
      <Items.Medium />
      <Items.LinkedIn />
      <Items.Instagram />
      <Items.Twitter />
    </List>
  </Wrapper>
)
