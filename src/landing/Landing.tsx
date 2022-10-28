import React from "react";
import styled from "styled-components";

import AppSection from "../common/Section";
import Arrow from "../common/Arrow";
import { HighVoltage } from "../common/emojis";

import Bolt from "./Bolt";

const Title = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  font-size: 1.5rem;
  @media only screen and (min-width: 480px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 5rem;
  }

  .hidden {
    visibility: hidden;
  }

  h1,
  h2 {
    margin: 0;
    filter: drop-shadow(0 0.125rem 0.25rem var(--colors-gray-300));
    text-align: center;
  }

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 0.5em;
    font-style: italic;
  }

  .bolt {
    position: absolute;
    z-index: -1;

    padding: 1rem;
    box-sizing: border-box;

    max-width: 100%;
    max-height: 200vh;

    filter: drop-shadow(0 0.125rem 0.25rem var(--colors-gray-300));
  }
`;

const Section = styled(AppSection)`
  height: auto;
  min-height: 100vh;

  background-color: var(--color-grey-100);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: center;

  .header {
    align-self: flex-end;
  }
`;

const Landing = () => (
  <Section id="landing">
    <Title>
      <h1>
        ZAP
        <HighVoltage />
        DEV
      </h1>

      <h2>Lightning fast development</h2>

      <Bolt className="bolt" />
    </Title>
    <Arrow className="arrow" href="#bio" />
  </Section>
);

export default Landing;
