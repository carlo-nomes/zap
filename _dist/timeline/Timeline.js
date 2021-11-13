import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import AppSection from "../common/Section/index.js";
import WaveBackground from "../common/WaveBackground.js";
import Item from "./Item.js";
import List from "./List.js";
import Title from "./Title.js";
const Section = styled(AppSection)`
  height: auto;
  min-height: 100vh;
  position: relative;

  color: var(--colors-gray-100);
  background: var(--colors-gray-600);
`;
const Line = styled.div`
  @media screen and (max-width: 60rem) {
    display: none;
  }

  position: absolute;
  z-index: 300;
  top: 10rem;
  bottom: -10rem;
  right: calc(50% - 0.25rem);

  width: 0.5rem;

  background: linear-gradient(
    to bottom,
    var(--colors-primary),
    var(--colors-primary) 10rem,
    var(--colors-tertiary),
    var(--colors-secondary),
    var(--colors-secondary)
  );
`;
const Timeline = () => /* @__PURE__ */ React.createElement(Section, {
  id: "timeline"
}, /* @__PURE__ */ React.createElement(WaveBackground, {
  id: "timeline-title",
  position: "bottom",
  amount: 5,
  min: 0.5,
  max: 1,
  as: Title
}, "Timeline"), /* @__PURE__ */ React.createElement(Line, null), /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(Item, {
  title: "IT-management",
  subtitle: "KS Joma",
  time: "2012"
}, "High school diploma with certificate of business management."), /* @__PURE__ */ React.createElement(Item, {
  title: "Aan Tafel",
  time: "July 2012"
}, "My first paid development project."), /* @__PURE__ */ React.createElement(Item, {
  title: "Interactive Multimedia Design",
  subtitle: "Thomas More Mechelen",
  time: "2012 - 2013"
}, "First year of a professional bachelor."), /* @__PURE__ */ React.createElement(Item, {
  title: "Software Management",
  subtitle: "KDG",
  time: "2013 - 2017"
}, "A professional bachelor with a focus on software management. Graduated with distinction"), /* @__PURE__ */ React.createElement(Item, {
  title: "Smart Plant Monitor",
  subtitle: "Optis",
  time: "April 2017 – June 2017"
}, "An IoT proof-of-concept for monitoring a bonsai with an Arduino connected to a web application."), /* @__PURE__ */ React.createElement(Item, {
  title: "BOOQIT",
  time: "August 2017 – October 2017"
}, "A website for planning and monitoring medical and social transport."), /* @__PURE__ */ React.createElement(Item, {
  title: "EnCo",
  subtitle: "Unbrace – Proximus",
  time: "March 2018 – June 2018"
}, "A wide suite of PaaS/SaaS solutions bundled trough a central marketplace."), /* @__PURE__ */ React.createElement(Item, {
  title: "Marathon",
  subtitle: "B. Rekencentra NV – Aurubis",
  time: "July 2018 – October 2018"
}, "An application for managing and monitoring the different flows of Aurubis Olen."), /* @__PURE__ */ React.createElement(Item, {
  title: "Stark",
  subtitle: "National Bank of Belgium",
  time: "October 2018 – May 2019"
}, "The frontend framework for NBB."), /* @__PURE__ */ React.createElement(Item, {
  title: "Certified Scrum Masterr",
  subtitle: "Scrum Alliance",
  time: "Februari 2019"
}, "Got my first certification from Scrum Alliance."), /* @__PURE__ */ React.createElement(Item, {
  title: "Digitale Methode",
  subtitle: "Calibrate - Signpost",
  time: "November 2019 – March 2020"
}, "The digitalization of the secondary education curriculum.")));
export default Timeline;
