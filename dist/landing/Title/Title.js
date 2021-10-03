import React from "../../../snowpack/pkg/react.js";
import styled from "../../../snowpack/pkg/styled-components.js";
import Right from "./Right.js";
import Left from "./Left.js";
import Bolt from "./Bolt.js";
const Wrapper = styled.h1`
  display: flex;
  margin: 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 10rem;
  height: 200px;

  @media (max-width: 700px), (max-height: 700px) {
    font-size: 7rem;
    height: 140px;
  }
  @media (max-width: 600px), (max-height: 600px) {
    font-size: 6rem;
    height: 120px;
  }
  @media (max-width: 500px), (max-height: 500px) {
    font-size: 5rem;
    height: 100px;
  }
  @media (max-width: 400px), (max-height: 400px) {
    font-size: 4rem;
    height: 80px;
  }
  @media (max-width: 300px), (max-height: 300px) {
    font-size: 3rem;
    height: 60px;
  }
`;
const Title = () => /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Left, null, "zap"), /* @__PURE__ */ React.createElement(Bolt, null), /* @__PURE__ */ React.createElement(Right, null, "dev"));
export default Title;
