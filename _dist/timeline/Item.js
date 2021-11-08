import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
const Wrapper = styled.li`
  list-style: none;

  box-sizing: border-box;
  margin: 1rem;
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
const Item = ({title, subtitle, time, children}) => /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(TitleWrapper, null, title), /* @__PURE__ */ React.createElement(SubTitleWrapper, null, subtitle), /* @__PURE__ */ React.createElement(TimeWrapper, null, time), /* @__PURE__ */ React.createElement(Text, null, children));
export default Item;
