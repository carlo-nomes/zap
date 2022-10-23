import React from "react";
import styled from "styled-components";

import AppSection from "../common/Section";
import WaveBackground from "../common/WaveBackground";

import useIsTopOutOfView from "./useIsTopOutOfView";
import Title from "./Title";
import Line from "./Line";
import List from "./List";
import * as Item from "./Item";
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
        <Item.Wrapper>
          <Item.Icon>
            <Icons.School />
          </Item.Icon>
          <Item.Title>IT-management</Item.Title>
          <Item.Subtitle>KS Joma</Item.Subtitle>
          <Item.Time>Graduated 2012</Item.Time>
          <Item.Content>High school diploma with a certificate of business management.</Item.Content>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Project />
          </Item.Icon>
          <Item.Title>Aan Tafel</Item.Title>
          <Item.Time>Summer 2012</Item.Time>
          <Item.Content>
            A website for a local non&#8209;profit organization. Engaged to provide affordable meals to disabled people.
          </Item.Content>
          <Item.Footer>
            <Icons.HTML />
            <Icons.CSS />
            <Icons.JavaScript />
          </Item.Footer>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.School />
          </Item.Icon>
          <Item.Title>Interactive Multimedia Design</Item.Title>
          <Item.Subtitle>Thomas More Mechelen</Item.Subtitle>
          <Item.Time>Finished 2013</Item.Time>
          <Item.Content>Junior year of a professional bachelor focussed on design.</Item.Content>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Project />
          </Item.Icon>
          <Item.Title>Smart Plant Monitor</Item.Title>
          <Item.Subtitle>Optis</Item.Subtitle>
          <Item.Time>Internship 2017</Item.Time>
          <Item.Content>
            An IoT proof-of-concept for monitoring a bonsai with an Arduino connected to a web application.
          </Item.Content>
          <Item.Footer>
            <Icons.Arduino />
            <Icons.NodeJs />
            <Icons.Angular />
          </Item.Footer>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.School />
          </Item.Icon>
          <Item.Title>Software Management</Item.Title>
          <Item.Subtitle>KDG</Item.Subtitle>
          <Item.Time>Graduated 2017</Item.Time>
          <Item.Content>
            A professional bachelor with a focus on software management. Graduated with distinction.
          </Item.Content>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Project />
          </Item.Icon>
          <Item.Title>
            <a href="https://www.booqit.be/en/" target="_blank" rel="noopener noreferrer">
              BOOQIT
            </a>
          </Item.Title>
          <Item.Time>August 2017 &#8594; October 2017</Item.Time>
          <Item.Content>A web application for planning and monitoring medical and social transport.</Item.Content>
          <Item.Footer>
            <Icons.NodeJs />
            <Icons.Angular />
          </Item.Footer>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Project />
          </Item.Icon>
          <Item.Title>Datamanager &amp; Ruimtemonitor</Item.Title>
          <Item.Subtitle>Omgeving Vlaanderen</Item.Subtitle>
          <Item.Time>October 2017 &#8594; November 2017</Item.Time>
          <Item.Content>
            A migration of two applications hosted on commercial platforms to an on site hosted environment.
          </Item.Content>
          <Item.Footer>
            <Icons.Java />
            <Icons.Linux />
          </Item.Footer>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Project />
          </Item.Icon>
          <Item.Title>
            <a href="https://proximusapi.enco.io/" target="_blank" rel="noopener noreferrer">
              EnCo
            </a>
          </Item.Title>
          <Item.Subtitle>Unbrace &#8209; Proximus</Item.Subtitle>
          <Item.Time>March 2018 &#8594; June 2018</Item.Time>
          <Item.Content>A wide suite of PaaS/SaaS solutions bundled trough a central marketplace.</Item.Content>
          <Item.Footer>
            <Icons.ReactJs />
            <Icons.TypeScript />
            <Icons.Redux />
            <Icons.StyledComponents />
          </Item.Footer>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Project />
          </Item.Icon>
          <Item.Title>Marathon</Item.Title>
          <Item.Subtitle>B. Rekencentra NV &#8209; Aurubis</Item.Subtitle>
          <Item.Time>July 2018 &#8594; October 2018</Item.Time>
          <Item.Content>An application for managing and monitoring the different flows of Aurubis Olen.</Item.Content>
          <Item.Footer>
            <Icons.ReactJs />
            <Icons.TypeScript />
            <Icons.PWA />
          </Item.Footer>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Project />
          </Item.Icon>
          <Item.Title>
            <a href="https://github.com/NationalBankBelgium/stark" target="_blank" rel="noopener noreferrer">
              Stark
            </a>
          </Item.Title>
          <Item.Subtitle>National Bank of Belgium</Item.Subtitle>
          <Item.Time>October 2018 &#8594; May 2019</Item.Time>
          <Item.Content>
            An open source frontend framework designed for use within the National Bank of Belgium.
          </Item.Content>
          <Item.Footer>
            <Icons.Angular />
            <Icons.Material />
            <Icons.Github />
            <Icons.TravisCI />
            <Icons.Jasmine />
            <Icons.Karma />
          </Item.Footer>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Certificate />
          </Item.Icon>
          <Item.Title>Certified Scrum Master</Item.Title>
          <Item.Subtitle>Agilar &#8209; Scrum Alliance</Item.Subtitle>
          <Item.Time>Februari 2019</Item.Time>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Certificate />
          </Item.Icon>
          <Item.Title>Leadership skills</Item.Title>
          <Item.Subtitle>Being Matters</Item.Subtitle>
          <Item.Time>March 2019 &#8594; December 2019</Item.Time>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Project />
          </Item.Icon>
          <Item.Title>
            <a href="https://digitalemethode.be/info/" target="_blank" rel="noopener noreferrer">
              Digitale Methode
            </a>
          </Item.Title>
          <Item.Subtitle>Calibrate &#8209; Signpost</Item.Subtitle>
          <Item.Time>November 2019 &#8594; March 2020</Item.Time>
          <Item.Content>
            A platform for the digitalization of the secondary education curriculum in Flanders.
          </Item.Content>
          <Item.Footer>
            <Icons.ReactJs />
            <Icons.TypeScript />
            <Icons.StyledComponents />
          </Item.Footer>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Project />
          </Item.Icon>
          <Item.Title>Holmes</Item.Title>
          <Item.Subtitle>Agentschap Uitbetaling Groeipakket</Item.Subtitle>
          <Item.Time>August 2020 &#8594; March 2021</Item.Time>
          <Item.Content>
            An application used by the agency to track and manage all incoming/outgoing communications with civilians.
          </Item.Content>
          <Item.Footer>
            <Icons.Kubernetes />
            <Icons.Java />
            <Icons.HTML />
            <Icons.CSS />
            <Icons.JavaScript />
          </Item.Footer>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Project />
          </Item.Icon>
          <Item.Title>Samenwerkingsplatform Uitbraak Management</Item.Title>
          <Item.Subtitle>KPMG &#8209; Agentschap Zorg & Gezondheid</Item.Subtitle>
          <Item.Time>March 2021 &#8594; ...</Item.Time>
          <Item.Content>
            The flemish platform for cooperation between the different stakeholders of the COVID&#8209;19 crisis.
          </Item.Content>
          <Item.Footer>
            <Icons.AWS />
            <Icons.OpenSearch />
            <Icons.Lambda />
            <Icons.NodeJs />
            <Icons.ReactJs />
            <Icons.TypeScript />
            <Icons.StyledComponents />
          </Item.Footer>
        </Item.Wrapper>

        <Item.Wrapper>
          <Item.Icon>
            <Icons.Project />
          </Item.Icon>
          <Item.Title>Zorg Dataplatform</Item.Title>
          <Item.Subtitle>Agentschap Zorg & Gezondheid</Item.Subtitle>
          <Item.Time>January 2022 &#8594; ...</Item.Time>
          <Item.Content>A suite off applications for the Flemish Agency of public health.</Item.Content>
          <Item.Footer>
            <Icons.AWS />
            <Icons.OpenSearch />
            <Icons.Lambda />
            <Icons.NodeJs />
            <Icons.ReactJs />
            <Icons.TypeScript />
            <Icons.StyledComponents />
          </Item.Footer>
        </Item.Wrapper>
      </List>
    </Section>
  );
};

export default Timeline;
