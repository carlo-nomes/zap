import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {
  Angular,
  Arduino,
  AWS,
  CSS,
  Diploma,
  HTML,
  Jasmine,
  Java,
  JavaScript,
  Kubernetes,
  Lambda,
  Material,
  NodeJs,
  OpenSearch,
  Podium,
  PWA,
  ReactIcon,
  Redux,
  School,
  StyledComponents,
  Tools,
  TravisCI,
  TypeScript
} from "../common/icons/index.js";
import Github from "../common/icons/Github.js";
import Karma from "../common/icons/Karma.js";
import Linux from "../common/icons/Linux.js";
import AppSection from "../common/Section/index.js";
import WaveBackground from "../common/WaveBackground.js";
import Item from "./Item.js";
import Line from "./Line.js";
import List from "./List.js";
import Title from "./Title.js";
import useIsTopOutOfView from "./useIsTopOutOfView.js";
const Section = styled(AppSection)`
  height: auto;
  min-height: 100vh;
  position: relative;

  color: var(--colors-gray-100);
  background: var(--colors-gray-600);

  scroll-snap-type: y proximity;
  &.top-out-of-view li {
    scroll-snap-align: end;
  }
`;
const Timeline = () => {
  const isTopOutOfView = useIsTopOutOfView("timeline");
  return /* @__PURE__ */ React.createElement(Section, {
    id: "timeline",
    className: isTopOutOfView ? "top-out-of-view" : ""
  }, /* @__PURE__ */ React.createElement(WaveBackground, {
    id: "timeline-title",
    position: "bottom",
    amount: 5,
    min: 0.5,
    max: 1,
    as: Title
  }, "Timeline"), /* @__PURE__ */ React.createElement(Line, null), /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(School, null),
    title: "IT-management",
    subtitle: "KS Joma",
    time: "2012"
  }, "High school diploma with a certificate of business management."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Tools, null),
    title: "Aan Tafel",
    time: "July 2012",
    footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HTML, null), /* @__PURE__ */ React.createElement(CSS, null), /* @__PURE__ */ React.createElement(JavaScript, null))
  }, "A website for a local non-profit organization. Engaged to provide affordable meals to disabled people."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(School, null),
    title: "Interactive Multimedia Design",
    subtitle: "Thomas More Mechelen",
    time: "2012 - 2013"
  }, "Junior year of a professional bachelor focussed on design."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(School, null),
    title: "Software Management",
    subtitle: "KDG",
    time: "2013 - 2017"
  }, "A professional bachelor with a focus on software management. Graduated with distinction."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Tools, null),
    title: "Smart Plant Monitor",
    subtitle: "Optis",
    time: "April 2017 - June 2017",
    footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Arduino, null), /* @__PURE__ */ React.createElement(NodeJs, null), /* @__PURE__ */ React.createElement(Angular, null))
  }, "An IoT proof-of-concept for monitoring a bonsai with an Arduino connected to a web application."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Tools, null),
    title: "BOOQIT",
    time: "August 2017 - October 2017",
    footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NodeJs, null), /* @__PURE__ */ React.createElement(Angular, null))
  }, "A webapp for planning and monitoring medical and social transport."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Tools, null),
    title: "Datamanager/Ruimtemonitor",
    subtitle: "Omgeving Vlaanderen",
    time: "October 2017 - November 2017",
    footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Java, null), /* @__PURE__ */ React.createElement(Linux, null))
  }, "A migration of two applications hosted on commercial platforms to an on site hosted environment."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Tools, null),
    title: "EnCo",
    subtitle: "Unbrace - Proximus",
    time: "March 2018 - June 2018",
    footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ReactIcon, null), /* @__PURE__ */ React.createElement(TypeScript, null), /* @__PURE__ */ React.createElement(Redux, null), /* @__PURE__ */ React.createElement(StyledComponents, null))
  }, "A wide suite of PaaS/SaaS solutions bundled trough a central marketplace."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Tools, null),
    title: "Marathon",
    subtitle: "B. Rekencentra NV - Aurubis",
    time: "July 2018 - October 2018",
    footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ReactIcon, null), /* @__PURE__ */ React.createElement(TypeScript, null), /* @__PURE__ */ React.createElement(PWA, null))
  }, "An application for managing and monitoring the different flows of Aurubis Olen."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Tools, null),
    title: "Stark",
    subtitle: "National Bank of Belgium",
    time: "October 2018 - May 2019",
    footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Angular, null), /* @__PURE__ */ React.createElement(Material, null), /* @__PURE__ */ React.createElement(Github, null), /* @__PURE__ */ React.createElement(TravisCI, null), /* @__PURE__ */ React.createElement(Jasmine, null), /* @__PURE__ */ React.createElement(Karma, null))
  }, "An open source frontend framework designed for use within the National Bank of Belgium."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Diploma, null),
    title: "Certified Scrum Master",
    subtitle: "Agilar - Scrum Alliance",
    time: "Februari 2019"
  }), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Diploma, null),
    title: "Leadership skills",
    subtitle: "Being Matters",
    time: "2019"
  }), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Tools, null),
    title: "Digitale Methode",
    subtitle: "Calibrate - Signpost",
    time: "November 2019 - March 2020",
    footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ReactIcon, null), /* @__PURE__ */ React.createElement(TypeScript, null), /* @__PURE__ */ React.createElement(StyledComponents, null))
  }, "A platform for the digitalization of the secondary education curriculum in Flanders."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Podium, null),
    title: "React Summit",
    subtitle: "React Summit Amsterdam",
    time: "2020"
  }, "A conference for React developers. Where I took several courses by some of the top experts in the field."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Tools, null),
    title: "Holmes",
    subtitle: "Agentschap Uitbetaling Groeipakket",
    time: "March 2021 - Current",
    footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Kubernetes, null), /* @__PURE__ */ React.createElement(Java, null), /* @__PURE__ */ React.createElement(HTML, null), /* @__PURE__ */ React.createElement(CSS, null), /* @__PURE__ */ React.createElement(JavaScript, null))
  }, "An application used by the agency to track and manage all incoming/outgoing communications with civilians."), /* @__PURE__ */ React.createElement(Item, {
    icon: /* @__PURE__ */ React.createElement(Tools, null),
    title: "Samenwerkingsplatform Uitbraak Management",
    subtitle: "KPMG - Agentschap Zorg & Gezondheid",
    time: "March 2021 - Current",
    footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AWS, null), /* @__PURE__ */ React.createElement(OpenSearch, null), /* @__PURE__ */ React.createElement(Lambda, null), /* @__PURE__ */ React.createElement(NodeJs, null), /* @__PURE__ */ React.createElement(ReactIcon, null), /* @__PURE__ */ React.createElement(TypeScript, null), /* @__PURE__ */ React.createElement(StyledComponents, null))
  }, "The flemish platform for cooperation between the different stakeholders of the COVID-19 crisis.")));
};
export default Timeline;
