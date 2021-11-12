import React from "react";
import styled from "styled-components";

import AppSection from "../common/Section";
import WaveBackground from "../common/WaveBackground";
import Item from "./Item";
import List from "./List";
import Title from "./Title";

const Section = styled(AppSection)`
  height: auto;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  color: var(--colors-gray-100);
  background: var(--colors-gray-600);
`;

const Line = styled.div`
  position: absolute;
  top: 10rem;
  right: calc(50% - 0.25rem);
  @media screen and (max-width: 60rem) {
    left: 1rem;
  }

  width: 0.5rem;
  height: 100%;

  background: linear-gradient(
    to bottom,
    var(--colors-primary),
    var(--colors-primary) 10rem,
    var(--colors-tertiary),
    var(--colors-secondary)
  );
`;

const Timeline = () => (
  <Section id="timeline">
    <WaveBackground id="timeline-title" position="bottom" amount={5} min={0.5} max={1} as={Title}>
      Timeline
    </WaveBackground>
    <Line className="line" />
    <List>
      <Item title="IT-management" subtitle="KS Joma" time="2012">
        High school diploma with certificate of business management.
      </Item>

      <Item title="Aan Tafel" time="July 2012">
        My first paid development project.
      </Item>

      <Item title="Interactive Multimedia Design" subtitle="Thomas More Mechelen" time="2012 - 2013">
        First year of a professional bachelor.
      </Item>

      <Item title="Software Management" subtitle="KDG" time="2013 - 2017">
        A professional bachelor with a focus on software management. Graduated with distinction
      </Item>

      <Item title="Smart Plant Monitor" subtitle="Optis" time="April 2017 – June 2017">
        An IoT proof-of-concept for monitoring a bonsai with an Arduino connected to a web application.
      </Item>

      <Item title="BOOQIT" time="August 2017 – October 2017">
        A website for planning and monitoring medical and social transport.
      </Item>

      <Item title="EnCo" subtitle="Unbrace – Proximus" time="March 2018 – June 2018">
        A wide suite of PaaS/SaaS solutions bundled trough a central marketplace.
      </Item>

      <Item title="Marathon" subtitle="B. Rekencentra NV – Aurubis" time="July 2018 – October 2018">
        An application for managing and monitoring the different flows of Aurubis Olen.
      </Item>

      <Item title="Stark" subtitle="National Bank of Belgium" time="October 2018 – May 2019">
        The frontend framework for NBB.
      </Item>

      <Item title="Certified Scrum Masterr" subtitle="Scrum Alliance" time="Februari 2019">
        Got my first certification from Scrum Alliance.
      </Item>

      <Item title="Digitale Methode" subtitle="Calibrate - Signpost" time="November 2019 – March 2020">
        The digitalization of the secondary education curriculum.
      </Item>
    </List>
  </Section>
);

export default Timeline;
