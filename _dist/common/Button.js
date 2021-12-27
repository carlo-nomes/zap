import styled from "../../_snowpack/pkg/styled-components.js";
const Button = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;

  display: block;

  box-sizing: border-box;

  padding: 10px;
  border-radius: 50%;

  background-color: var(--colors-gray-400);
  transition: background-color var(--transition-duration-default) ease-in-out;
  color: var(--colors-gray-100);

  box-shadow: rgba(0, 0, 0, 0.5) 0 0.125rem 0.25rem;

  &:hover {
    background-color: var(--colors-gray-300);
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0.125rem 0.25rem inset;
    background-color: var(--colors-gray-300);
  }
`;
export default Button;
