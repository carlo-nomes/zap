import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

const smallItem = css`
  align-self: stretch;
  grid-template:
    "title icon"
    "subtitle _"
    "time _"
    "content content"
    "footer footer"
    / 1fr 1.5rem;
`;

const leftItem = css`
  align-self: flex-start;
  grid-template:
    "icon title"
    "_ subtitle"
    "_ time"
    "_ content"
    "_ footer"
    / 1.5rem 1fr;
  text-align: left;
`;

const rightItem = css`
  align-self: flex-end;
  grid-template:
    "title icon"
    "subtitle _"
    "time _"
    "content _"
    "footer _"
    / 1fr 1.5rem;
  text-align: right;
`;

const Wrapper = styled.li`
  list-style: none;

  box-sizing: border-box;
  padding: 1rem;

  display: grid;
  ${smallItem}
  grid-column-gap: 0.5rem;

  @media screen and (min-width: 60rem) {
    width: 50%;

    &:nth-child(odd) {
      ${leftItem}
    }

    &:nth-child(even) {
      ${rightItem}
    }
  }
`;

const IconWrapper = styled.div`
  grid-area: icon;

  color: var(--colors-gray-300);

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

const FooterWrapper = styled.div`
  grid-area: footer;

  color: var(--colors-gray-300);

  margin: 0rem -0.5rem;
  > * {
    height: 1.5rem;
    margin: 0.5rem;
  }
`;

type Props = {
  icon?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  time?: string;
  children?: ReactNode;
  footer?: ReactNode;
};

const Item = ({ icon, title, subtitle, time, children, footer }: Props) => {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <SubTitleWrapper>{subtitle}</SubTitleWrapper>
      <TimeWrapper>{time}</TimeWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      <FooterWrapper>{footer}</FooterWrapper>
    </Wrapper>
  );
};

export default Item;
