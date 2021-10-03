import React from "../pkg/react.js";
import styled from "../pkg/styled-components.js";
import Section from "../common/Section/index.js";
import Spacer from "../common/Spacer.js";
import {Wave} from "../common/emojis/index.js";
const Wrapper = styled.span`
  align-self: center;
  margin: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-aspect-ratio: 1/1), (min-width: 1000px) and (min-height: 800px) {
    flex-direction: column;
  }
`;
const Text = styled.p`
  flex: 1;
  margin: 20px;
  max-width: 900px;

  box-sizing: border-box;
  text-align: left;

  font-size: 3rem;
  @media (max-width: 500px), (max-height: 500px) {
    font-size: 1.5rem;
  }
`;
const Bio = () => /* @__PURE__ */ React.createElement(Section, {
  id: "bio",
  color: "primary"
}, /* @__PURE__ */ React.createElement(Spacer, null), /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Text, null, /* @__PURE__ */ React.createElement(Wave, null), "  Hi, I'm Carlo.", /* @__PURE__ */ React.createElement("br", null), "I'm an Antwerp based developer, helping companies create amazing webapps using the latest tools and techniques.")), /* @__PURE__ */ React.createElement(Spacer, null));
export default Bio;
