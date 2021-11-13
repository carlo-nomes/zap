import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {useElementInView} from "../common/ScrollContext/index.js";
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

  transition: opacity var(--transition-duration-default) ease-in-out 500ms,
    margin var(--transition-duration-default) ease-in-out 500ms;

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
const Item = ({title, subtitle, time, children}) => {
  const [isInView, element] = useElementInView();
  return /* @__PURE__ */ React.createElement(Wrapper, {
    ref: element,
    className: isInView ? "in-view" : ""
  }, /* @__PURE__ */ React.createElement(TitleWrapper, null, title), /* @__PURE__ */ React.createElement(SubTitleWrapper, null, subtitle), /* @__PURE__ */ React.createElement(TimeWrapper, null, time), /* @__PURE__ */ React.createElement(Text, null, children));
};
export default Item;
