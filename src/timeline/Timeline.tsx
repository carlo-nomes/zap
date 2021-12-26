import React from "react";
import styled from "styled-components";
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
  TypeScript,
} from "../common/icons";
import Github from "../common/icons/Github";
import Karma from "../common/icons/Karma";
import Linux from "../common/icons/Linux";

import AppSection from "../common/Section";
import WaveBackground from "../common/WaveBackground";
import Item from "./Item";
import Line from "./Line";
import List from "./List";
import Title from "./Title";
import useIsTopOutOfView from "./useIsTopOutOfView";

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

  return (
    <Section id="timeline" className={isTopOutOfView ? "top-out-of-view" : ""}>
      <WaveBackground id="timeline-title" position="bottom" amount={5} min={0.5} max={1} as={Title}>
        Timeline
      </WaveBackground>
      <Line />
      <List>
        <Item icon={<School />} title="IT-management" subtitle="KS Joma" time="2012">
          High school diploma with a certificate of business management.
        </Item>

        <Item
          icon={<Tools />}
          title="Aan Tafel"
          time="July 2012"
          footer={
            <>
              <HTML />
              <CSS />
              <JavaScript />
            </>
          }
        >
          A website for a local non-profit organization. Engaged to provide affordable meals to disabled people.
        </Item>

        <Item
          icon={<School />}
          title="Interactive Multimedia Design"
          subtitle="Thomas More Mechelen"
          time="2012 - 2013"
        >
          Junior year of a professional bachelor focussed on design.
        </Item>

        <Item icon={<School />} title="Software Management" subtitle="KDG" time="2013 - 2017">
          A professional bachelor with a focus on software management. Graduated with distinction.
        </Item>

        <Item
          icon={<Tools />}
          title="Smart Plant Monitor"
          subtitle="Optis"
          time="April 2017 - June 2017"
          footer={
            <>
              <Arduino />
              <NodeJs />
              <Angular />
            </>
          }
        >
          An IoT proof-of-concept for monitoring a bonsai with an Arduino connected to a web application.
        </Item>

        <Item
          icon={<Tools />}
          title="BOOQIT"
          time="August 2017 - October 2017"
          footer={
            <>
              <NodeJs />
              <Angular />
            </>
          }
        >
          A webapp for planning and monitoring medical and social transport.
        </Item>

        <Item
          icon={<Tools />}
          title="Datamanager/Ruimtemonitor"
          subtitle="Omgeving Vlaanderen"
          time="October 2017 - November 2017"
          footer={
            <>
              <Java />
              <Linux />
            </>
          }
        >
          A migration of two applications hosted on commercial platforms to an on site hosted environment.
        </Item>

        <Item
          icon={<Tools />}
          title="EnCo"
          subtitle="Unbrace - Proximus"
          time="March 2018 - June 2018"
          footer={
            <>
              <ReactIcon />
              <TypeScript />
              <Redux />
              <StyledComponents />
            </>
          }
        >
          A wide suite of PaaS/SaaS solutions bundled trough a central marketplace.
        </Item>

        <Item
          icon={<Tools />}
          title="Marathon"
          subtitle="B. Rekencentra NV - Aurubis"
          time="July 2018 - October 2018"
          footer={
            <>
              <ReactIcon />
              <TypeScript />
              <PWA />
            </>
          }
        >
          An application for managing and monitoring the different flows of Aurubis Olen.
        </Item>

        <Item
          icon={<Tools />}
          title="Stark"
          subtitle="National Bank of Belgium"
          time="October 2018 - May 2019"
          footer={
            <>
              <Angular />
              <Material />
              <Github />
              <TravisCI />
              <Jasmine />
              <Karma />
            </>
          }
        >
          An open source frontend framework designed for use within the National Bank of Belgium.
        </Item>

        <Item
          icon={<Diploma />}
          title="Certified Scrum Master"
          subtitle="Agilar - Scrum Alliance"
          time="Februari 2019"
        />

        <Item icon={<Diploma />} title="Leadership skills" subtitle="Being Matters" time="2019" />

        <Item
          icon={<Tools />}
          title="Digitale Methode"
          subtitle="Calibrate - Signpost"
          time="November 2019 - March 2020"
          footer={
            <>
              <ReactIcon />
              <TypeScript />
              <StyledComponents />
            </>
          }
        >
          A platform for the digitalization of the secondary education curriculum in Flanders.
        </Item>

        <Item icon={<Podium />} title="React Summit" subtitle="React Summit Amsterdam" time="2020">
          A conference for React developers. Where I took several courses by some of the top experts in the field.
        </Item>

        <Item
          icon={<Tools />}
          title="Holmes"
          subtitle="Agentschap Uitbetaling Groeipakket"
          time="March 2021 - Current"
          footer={
            <>
              <Kubernetes />
              <Java />
              <HTML />
              <CSS />
              <JavaScript />
            </>
          }
        >
          An application used by the agency to track and manage all incoming/outgoing communications with civilians.
        </Item>

        <Item
          icon={<Tools />}
          title="Samenwerkingsplatform Uitbraak Management"
          subtitle="KPMG - Agentschap Zorg & Gezondheid"
          time="March 2021 - Current"
          footer={
            <>
              <AWS />
              <OpenSearch />
              <Lambda />
              <NodeJs />
              <ReactIcon />
              <TypeScript />
              <StyledComponents />
            </>
          }
        >
          The flemish platform for cooperation between the different stakeholders of the COVID-19 crisis.
        </Item>
      </List>
    </Section>
  );
};

export default Timeline;
