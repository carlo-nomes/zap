import React, { ReactNode } from "react";
import styled from "styled-components";

import { useElementInView } from "../common/ScrollContext";

const Wrapper = styled.li`
  list-style: none;

  box-sizing: border-box;
  padding: 1rem;

  align-self: flex-start;
  @media screen and (min-width: 60rem) {
    max-width: 25rem;

    &:nth-child(even) {
      align-self: flex-end;
      text-align: right;
    }

    &:nth-child(odd) {
      align-self: flex-start;
      text-align: left;
    }
  }

  opacity: 0;
  margin: 1rem 0 -1rem 0;

  transition: opacity var(--transition-duration-default) ease-in-out,
    margin var(--transition-duration-default) ease-in-out;

  &.in-view {
    opacity: 1;
    margin: 0;
  }
`;

const TitleWrapper = styled.h3`
  color: var(--colors-primary);
  font-size: 1.5rem;
  margin: 0;
`;

const SubTitleWrapper = styled.h4`
  color: var(--colors-secondary);
  font-size: 1rem;
  margin: 0;
`;

const TimeWrapper = styled.i`
  font-weight: lighter;

  color: var(--colors-primary);
  font-size: 0.75rem;
`;

const Text = styled.p`
  margin: 0;
`;

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  time?: string;
  children: ReactNode;
};

const Item = ({ title, subtitle, time, children }: Props) => {
  const [isInView, element] = useElementInView<HTMLLIElement>();

  return (
    <Wrapper ref={element} className={isInView ? "in-view" : ""}>
      <TitleWrapper>{title}</TitleWrapper>
      <SubTitleWrapper>{subtitle}</SubTitleWrapper>
      <TimeWrapper>{time}</TimeWrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Item;
