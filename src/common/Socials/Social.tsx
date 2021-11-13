import React, { ReactNode } from "react";
import styled from "styled-components";

import AppButton from "../Button";

const Button = styled(AppButton)`
  width: 2.5rem;
  height: 2.5rem;
`;

const ItemWrapper = styled.li`
  display: block;
  text-decoration: none;
  margin: 0.25rem;
`;

type Props = {
  href: string;
  "aria-label": string;
  children: ReactNode;
};
const Social = (props: Props) => (
  <ItemWrapper>
    <Button as="a" target="_blank" rel="noopener noreferrer" {...props} />
  </ItemWrapper>
);

export default Social;
