import React, { ReactNode } from "react";
import styled from "styled-components";

import AppButton from "../../../../common/Button";

const Button = styled(AppButton)`
  width: 2.5rem;
  height: 2.5rem;
`;

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
    <Button as="a" target="_blank" rel="noopener noreferrer" {...props} />
  </ItemWrapper>
);

export default Item;
