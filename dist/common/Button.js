import styled from "../pkg/styled-components.js";
const Button = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;

  display: block;

  box-sizing: border-box;
  width: ${({size}) => size || "auto"};
  height: ${({size}) => size || "auto"};

  padding: 10px;
  border-radius: 50%;

  background-color: #d3d3d3;
  color: #fafafa;

  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 2px;

  &:hover {
    background-color: #c4c4c4;
  }

  &:active,
  &::focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 2px inset;
  }
`;
export default Button;
