import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import AppSection from "../common/Section/index.js";
import {Wave as AppWave} from "../common/emojis/index.js";
import Arrow from "../common/Arrow.js";
const Section = styled(AppSection)`
  background-color: var(--colors-primary);
`;
const Wave = styled(AppWave)`
  margin: 1rem;

  text-align: center;
  font-size: 2rem;
`;
const Text = styled.p`
  flex: 1;

  box-sizing: border-box;
  padding: 1rem;
  max-width: 50rem;

  font-size: 1.5rem;
  @media screen and (max-height: 700px), screen and (max-width: 700px) {
    font-size: 1rem;
  }

  q {
    display: inline-block;
    margin: 0.5rem 0;
    font-weight: bold;
  }
`;
const Bio = () => /* @__PURE__ */ React.createElement(Section, {
  id: "bio"
}, /* @__PURE__ */ React.createElement(Wave, null), /* @__PURE__ */ React.createElement(Text, null, "Hi there,", /* @__PURE__ */ React.createElement("br", null), "my name is Carlo.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "I am a full-stack JavaScript developer and UX/UI enthusiast and have been using my passion for technology to help organizations create amazing web applications since 2017.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "My credo is:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("q", null, "For every problem, there exists an elegant solution."), /* @__PURE__ */ React.createElement("br", null), "I get to these solutions by using the latest and greatest tools/techniques available. Through persistent learning and critical reflection, I maintain a current view of what is needed to make a project succeed.", /* @__PURE__ */ React.createElement("br", null), "I believe that every successful project requires agility and an open, honest and clear line of communication between all stakeholders and team members, regardless of the size of the project."), /* @__PURE__ */ React.createElement(Arrow, {
  href: "#timeline"
}));
export default Bio;
