import React, { ReactNode } from "react";
import styled from "styled-components";

import { useElementInView } from "../common/ScrollContext";

const Wrapper = styled.li`
  list-style: none;

  box-sizing: border-box;
  padding: 1rem;

  align-self: flex-start;
  width: 100%;
  grid-template:
    "title icon"
    "subtitle subtitle"
    "time time"
    "content content"
    / 1fr 1.5rem;
  grid-gap: 0.25rem;

  display: grid;
  @media screen and (min-width: 60rem) {
    max-width: 30rem;

    &:nth-child(odd) {
      align-self: flex-start;

      grid-template:
        "icon title"
        "_ subtitle"
        "_ time"
        "_ content"
        / 1.5rem 1fr;

      text-align: left;
    }

    &:nth-child(even) {
      align-self: flex-end;

      grid-template:
        "title icon"
        "subtitle _"
        "time _"
        "content _"
        / 1fr 1.5rem;
      text-align: right;
    }
  }

  opacity: 0;
  margin: 1rem 0 -1rem 0;

  transition: opacity var(--transition-duration-default) ease-in-out 500ms,
    margin var(--transition-duration-default) ease-in-out 500ms;

  &.in-view {
    opacity: 1;
    margin: 0;
  }
`;

const IconWrapper = styled.div`
  grid-area: icon;

  color: var(--colors-gray-400);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.75rem;
`;

const TitleWrapper = styled.h3`
  grid-area: title;

  color: var(--colors-primary);
  font-size: 1.5rem;
  margin: 0;
`;

const SubTitleWrapper = styled.h4`
  grid-area: subtitle;

  color: var(--colors-secondary);
  font-size: 1rem;
  margin: 0;
`;

const TimeWrapper = styled.i`
  grid-area: time;

  font-weight: lighter;

  color: var(--colors-primary);
  font-size: 0.75rem;
`;

const ContentWrapper = styled.p`
  grid-area: content;

  margin: 0;
`;

type Props = {
  icon?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  time?: string;
  children: ReactNode;
};

const Item = ({ icon, title, subtitle, time, children }: Props) => {
  const [isInView, element] = useElementInView<HTMLLIElement>();

  return (
    <Wrapper ref={element} className={isInView ? "in-view" : ""}>
      <IconWrapper>{icon}</IconWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <SubTitleWrapper>{subtitle}</SubTitleWrapper>
      <TimeWrapper>{time}</TimeWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

export default Item;
