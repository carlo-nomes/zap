import React from "../../../../pkg/react.js";
import styled from "../../../../pkg/styled-components.js";
import Button from "../../../../common/Button.js";
const ItemWrapper = styled.li`
  display: block;
  text-decoration: none;
  margin: 5px;
`;
const Item = (props) => /* @__PURE__ */ React.createElement(ItemWrapper, null, /* @__PURE__ */ React.createElement(Button, {
  as: "a",
  target: "_blank",
  rel: "noopener noreferrer",
  size: "40px",
  ...props
}));
export default Item;
