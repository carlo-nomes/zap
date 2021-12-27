import React from "react";
import styled from "styled-components";

import AppSection from "../common/Section";
import WaveBackground from "../common/WaveBackground";

import useIsTopOutOfView from "./useIsTopOutOfView";
import Title from "./Title";
import Line from "./Line";
import List from "./List";
import Item from "./Item";
import * as Icons from "./TimelineIcons";

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
        <Item icon={<Icons.School />} title="IT-management" subtitle="KS Joma" time="2012">
          High school diploma with a certificate of business management.
        </Item>

        <Item
          icon={<Icons.Project />}
          title="Aan Tafel"
          time="July 2012"
          footer={
            <>
              <Icons.HTML />
              <Icons.CSS />
              <Icons.JavaScript />
            </>
          }
        >
          A website for a local non-profit organization. Engaged to provide affordable meals to disabled people.
        </Item>

        <Item
          icon={<Icons.School />}
          title="Interactive Multimedia Design"
          subtitle="Thomas More Mechelen"
          time="2012 - 2013"
        >
          Junior year of a professional bachelor focussed on design.
        </Item>

        <Item icon={<Icons.School />} title="Software Management" subtitle="KDG" time="2013 - 2017">
          A professional bachelor with a focus on software management. Graduated with distinction.
        </Item>

        <Item
          icon={<Icons.Project />}
          title="Smart Plant Monitor"
          subtitle="Optis"
          time="April 2017 - June 2017"
          footer={
            <>
              <Icons.Arduino />
              <Icons.NodeJs />
              <Icons.Angular />
            </>
          }
        >
          An IoT proof-of-concept for monitoring a bonsai with an Arduino connected to a web application.
        </Item>

        <Item
          icon={<Icons.Project />}
          title="BOOQIT"
          time="August 2017 - October 2017"
          footer={
            <>
              <Icons.NodeJs />
              <Icons.Angular />
            </>
          }
        >
          A webapp for planning and monitoring medical and social transport.
        </Item>

        <Item
          icon={<Icons.Project />}
          title="Datamanager/Ruimtemonitor"
          subtitle="Omgeving Vlaanderen"
          time="October 2017 - November 2017"
          footer={
            <>
              <Icons.Java />
              <Icons.Linux />
            </>
          }
        >
          A migration of two applications hosted on commercial platforms to an on site hosted environment.
        </Item>

        <Item
          icon={<Icons.Project />}
          title="EnCo"
          subtitle="Unbrace - Proximus"
          time="March 2018 - June 2018"
          footer={
            <>
              <Icons.ReactJs />
              <Icons.TypeScript />
              <Icons.Redux />
              <Icons.StyledComponents />
            </>
          }
        >
          A wide suite of PaaS/SaaS solutions bundled trough a central marketplace.
        </Item>

        <Item
          icon={<Icons.Project />}
          title="Marathon"
          subtitle="B. Rekencentra NV - Aurubis"
          time="July 2018 - October 2018"
          footer={
            <>
              <Icons.ReactJs />
              <Icons.TypeScript />
              <Icons.PWA />
            </>
          }
        >
          An application for managing and monitoring the different flows of Aurubis Olen.
        </Item>

        <Item
          icon={<Icons.Project />}
          title="Stark"
          subtitle="National Bank of Belgium"
          time="October 2018 - May 2019"
          footer={
            <>
              <Icons.Angular />
              <Icons.Material />
              <Icons.Github />
              <Icons.TravisCI />
              <Icons.Jasmine />
              <Icons.Karma />
            </>
          }
        >
          An open source frontend framework designed for use within the National Bank of Belgium.
        </Item>

        <Item
          icon={<Icons.Certificate />}
          title="Certified Scrum Master"
          subtitle="Agilar - Scrum Alliance"
          time="Februari 2019"
        />

        <Item icon={<Icons.Certificate />} title="Leadership skills" subtitle="Being Matters" time="2019" />

        <Item
          icon={<Icons.Project />}
          title="Digitale Methode"
          subtitle="Calibrate - Signpost"
          time="November 2019 - March 2020"
          footer={
            <>
              <Icons.ReactJs />
              <Icons.TypeScript />
              <Icons.StyledComponents />
            </>
          }
        >
          A platform for the digitalization of the secondary education curriculum in Flanders.
        </Item>

        <Item icon={<Icons.Conference />} title="React Summit" subtitle="React Summit Amsterdam" time="2020">
          A conference for React developers. Where I took several courses by some of the top experts in the field.
        </Item>

        <Item
          icon={<Icons.Project />}
          title="Holmes"
          subtitle="Agentschap Uitbetaling Groeipakket"
          time="March 2021 - Current"
          footer={
            <>
              <Icons.Kubernetes />
              <Icons.Java />
              <Icons.HTML />
              <Icons.CSS />
              <Icons.JavaScript />
            </>
          }
        >
          An application used by the agency to track and manage all incoming/outgoing communications with civilians.
        </Item>

        <Item
          icon={<Icons.Project />}
          title="Samenwerkingsplatform Uitbraak Management"
          subtitle="KPMG - Agentschap Zorg & Gezondheid"
          time="March 2021 - Current"
          footer={
            <>
              <Icons.AWS />
              <Icons.OpenSearch />
              <Icons.Lambda />
              <Icons.NodeJs />
              <Icons.ReactJs />
              <Icons.TypeScript />
              <Icons.StyledComponents />
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
