import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import AppButton from "../Button.js";
const Button = styled(AppButton)`
  width: 2.5rem;
  height: 2.5rem;
`;
const ItemWrapper = styled.li`
  display: block;
  text-decoration: none;
  margin: 0.25rem;
`;
const Social = (props) => /* @__PURE__ */ React.createElement(ItemWrapper, null, /* @__PURE__ */ React.createElement(Button, {
  as: "a",
  target: "_blank",
  rel: "noopener noreferrer",
  ...props
}));
export default Social;
