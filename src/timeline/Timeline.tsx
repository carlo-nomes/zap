import styled from "styled-components";

import AppSection from "../common/Section";
import WaveBackground from "../common/WaveBackground";

import List from "./List";
import * as Item from "./Item";
import * as Icons from "./TimelineIcons";

const Section = styled(AppSection)`
  --negative-margin: 15rem;
  min-height: calc(100vh + var(--negative-margin));
  margin-bottom: calc(0px - var(--negative-margin));
`;

const Title = styled.h2`
  height: 5rem;
  width: 100%;
  margin: 0;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  color: var(--colors-gray-600);
  font-size: 3rem;
  @media screen and (max-width: 60rem) {
    font-size: 2rem;
  }
`;

const ListWrapper = styled.div`
  position: relative;

  color: var(--colors-gray-100);

  box-sizing: border-box;
  width: 100%;
  ul {
    padding-bottom: var(--negative-margin);
  }

  display: flex;
  flex-direction: column;
`;

const Timeline = () => {
  return (
    <Section id="timeline">
      <Title>Timeline</Title>
      <WaveBackground
        id="timeline-list"
        amount={5}
        as={ListWrapper}
        bg="linear-gradient(0deg, var(--colors-gray-600), var(--colors-gray-600))"
      >
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
              A promotional website for a non-profit organization by the same name engaged in providing affordable and
              nutritious meals to persons with a physical or mental impairment.
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
              An IoT proof-of-concept for monitoring and managing the health of a bonsai tree using an Arduino and a web
              interface.
            </Item.Content>
            <Item.Footer>
              <Icons.Arduino />
              <Icons.MQTT />
              <Icons.NodeJs />
              <Icons.MongoDB />
              <Icons.Angular />
              <Icons.Material />
              <Icons.HTML />
              <Icons.CSS />
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
              <a href="https://www.booqit.be" target="_blank" rel="noopener noreferrer">
                BOOQIT
              </a>
            </Item.Title>
            <Item.Time>August 2017 &#8594; October 2017</Item.Time>
            <Item.Content>A web application for planning and monitoring medical and social transport.</Item.Content>
            <Item.Footer>
              <Icons.NodeJs />
              <Icons.Angular />
              <Icons.Bulma />
              <Icons.HTML />
              <Icons.CSS />
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
              <Icons.DynamoDB />
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
      </WaveBackground>
    </Section>
  );
};

export default Timeline;
