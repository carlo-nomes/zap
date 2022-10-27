import React from "react";
import styled from "styled-components";

import * as Socials from "../common/Socials";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;

  justify-content: flex-end;
`;

const List = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: auto;
  margin: 0;
  padding: 10px;
`;

type Props = {
  className?: string;
};

const Header = (props: Props) => (
  <Wrapper {...props}>
    <List>
      <Socials.GitHub />
      <Socials.Medium />
      <Socials.LinkedIn />
      <Socials.Twitter />
    </List>
  </Wrapper>
);

export default Header;
