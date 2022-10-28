import { PropsWithChildren } from "react";
import styled from "styled-components";

import AppButton from "../Button";

const Button = styled(AppButton)`
  width: 2.5rem;
  height: 2.5rem;
  &:hover,
  &:focus,
  &:active,
  &:visited {
    color: var(--colors-gray-100);
  }
`;

const ItemWrapper = styled.div`
  display: block;
  text-decoration: none;
  margin: 0.25rem;
`;

type Props = PropsWithChildren<{
  href: string;
  "aria-label": string;
}>;
const Social = (props: Props) => (
  <ItemWrapper>
    <Button as="a" target="_blank" rel="noopener noreferrer" {...props} />
  </ItemWrapper>
);

export default Social;
