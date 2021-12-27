import styled, {css} from "../../_snowpack/pkg/styled-components.js";
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
    "icon title time"
    "_ subtitle time"
    "_ content content"
    "_ footer footer"
    / 1.5rem 1fr auto;

  text-align: left;
  .time {
    text-align: right;
  }
`;
const rightItem = css`
  align-self: flex-end;
  grid-template:
    "time title icon"
    "time subtitle _"
    "content content _"
    "footer footer _"
    / auto 1fr 1.5rem;

  text-align: right;
  .time {
    text-align: left;
  }
`;
export const Wrapper = styled.li`
  list-style: none;

  box-sizing: border-box;
  padding: 1rem;

  display: grid;
  ${smallItem}
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.75rem;

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
export const Icon = styled.div`
  grid-area: icon;

  color: var(--colors-gray-300);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.75rem;
`;
export const Title = styled.h3`
  grid-area: title;

  color: var(--colors-primary);
  font-size: 1.5rem;
  margin: 0;

  a {
    color: inherit;
  }
`;
export const Subtitle = styled.h4`
  grid-area: subtitle;

  color: var(--colors-secondary);
  font-size: 1rem;
  margin: 0;
`;
export const Time = styled.i`
  grid-area: time;

  display: flex;
  align-items: center;
  color: var(--colors-primary);
`;
export const Content = styled.p`
  grid-area: content;

  margin: 0;
`;
export const Footer = styled.div`
  grid-area: footer;

  color: var(--colors-gray-300);

  margin: -0.5rem;
  > * {
    margin: 0.5rem;
  }
`;
