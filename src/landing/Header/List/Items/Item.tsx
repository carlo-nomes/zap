import React, { ReactNode } from "react";
import styled from "styled-components";

import Button from "../../../../common/Button";

const ItemWrapper = styled.li`
  display: block;
  text-decoration: none;
  margin: 5px;
`;

type Props = {
  href: string;
  "aria-label": string;
  children: ReactNode;
};
const Item = (props: Props) => (
  <ItemWrapper>
    <Button as="a" target="_blank" rel="noopener noreferrer" size="40px" {...props} />
  </ItemWrapper>
);

export default Item;
