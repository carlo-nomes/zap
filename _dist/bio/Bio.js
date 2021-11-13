import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import AppSection from "../common/Section/index.js";
import {Wave as AppWave} from "../common/emojis/index.js";
import Arrow from "../common/Arrow.js";
import Spacer from "../common/Spacer.js";
import WaveBackground from "../common/WaveBackground.js";
import {useElementInView} from "../common/ScrollContext/index.js";
const Section = styled(AppSection)`
  align-items: center;
  justify-content: space-between;

  background-color: var(--colors-primary);
`;
const Wave = styled(AppWave)`
  float: left;
  margin: 1rem;

  text-align: center;
  font-size: 2rem;
`;
const Text = styled.p`
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

  opacity: 0;
  margin: 5rem 0 -5rem 0;
  transition: opacity var(--transition-duration-long) ease-in-out, margin var(--transition-duration-long) ease-in-out;

  &.in-view {
    opacity: 1;
    margin: 0;
  }
`;
const Bio = () => {
  const [inView, ref] = useElementInView();
  return /* @__PURE__ */ React.createElement(WaveBackground, {
    id: "bio",
    position: "top",
    amount: 3,
    min: 0,
    max: 0.15,
    as: Section
  }, /* @__PURE__ */ React.createElement(Spacer, null), /* @__PURE__ */ React.createElement(Wave, null), /* @__PURE__ */ React.createElement(Text, {
    ref,
    className: inView ? "in-view" : ""
  }, "Hi there,", /* @__PURE__ */ React.createElement("br", null), "my name is Carlo.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "I am a full-stack JavaScript developer and UX/UI enthusiast and have been using my passion for technology to help organizations create amazing web applications since 2017.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "My credo is:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("q", null, "For every problem, there exists an elegant solution."), /* @__PURE__ */ React.createElement("br", null), "I get to these solutions by using the latest and greatest tools/techniques available. Through persistent learning and critical reflection, I maintain a current view of what is needed to make a project succeed.", /* @__PURE__ */ React.createElement("br", null), "I believe that every successful project requires agility and an open, honest and clear line of communication between all stakeholders and team members, regardless of the size of the project."), /* @__PURE__ */ React.createElement(Spacer, null), /* @__PURE__ */ React.createElement(Arrow, {
    href: "#timeline"
  }));
};
export default Bio;
