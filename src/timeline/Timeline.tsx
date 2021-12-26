import React from "react";
import styled from "styled-components";
import { Diploma, School, Tools } from "../common/icons";

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
          High school diploma with certificate of business management.
        </Item>

        <Item icon={<Tools />} title="Aan Tafel" time="July 2012">
          My first paid development project.
        </Item>

        <Item
          icon={<School />}
          title="Interactive Multimedia Design"
          subtitle="Thomas More Mechelen"
          time="2012 - 2013"
        >
          First year of a professional bachelor.
        </Item>

        <Item icon={<School />} title="Software Management" subtitle="KDG" time="2013 - 2017">
          A professional bachelor with a focus on software management. Graduated with distinction
        </Item>

        <Item icon={<Tools />} title="Smart Plant Monitor" subtitle="Optis" time="April 2017 – June 2017">
          An IoT proof-of-concept for monitoring a bonsai with an Arduino connected to a web application.
        </Item>

        <Item icon={<Tools />} title="BOOQIT" time="August 2017 – October 2017">
          A website for planning and monitoring medical and social transport.
        </Item>

        <Item icon={<Tools />} title="EnCo" subtitle="Unbrace – Proximus" time="March 2018 – June 2018">
          A wide suite of PaaS/SaaS solutions bundled trough a central marketplace.
        </Item>

        <Item icon={<Tools />} title="Marathon" subtitle="B. Rekencentra NV – Aurubis" time="July 2018 – October 2018">
          An application for managing and monitoring the different flows of Aurubis Olen.
        </Item>

        <Item icon={<Tools />} title="Stark" subtitle="National Bank of Belgium" time="October 2018 – May 2019">
          The frontend framework for NBB.
        </Item>

        <Item icon={<Diploma />} title="Certified Scrum Master" subtitle="Scrum Alliance" time="Februari 2019">
          Got my first certification from Scrum Alliance.
        </Item>

        <Item
          icon={<Tools />}
          title="Digitale Methode"
          subtitle="Calibrate - Signpost"
          time="November 2019 – March 2020"
        >
          The digitalization of the secondary education curriculum.
        </Item>

        <Item
          icon={<Tools />}
          title="Samenwerkingsplatform Uitbraak Management"
          subtitle="KPMG - Agentschap Zorg & Gezondheid"
          time="March 2021 - Current"
        >
          The Flemish platform for cooperation between the different stakeholders of the COVID-19 crisis.
        </Item>
      </List>
    </Section>
  );
};

export default Timeline;
