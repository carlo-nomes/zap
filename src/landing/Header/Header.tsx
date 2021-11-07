import React from "react";
import styled from "styled-components";

import List, { Items } from "./List";

const Wrapper = styled.header`
  align-self: stretch;

  display: flex;
  flex-direction: row;

  justify-content: flex-end;
`;

const Header = () => (
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
);

export default Header;
