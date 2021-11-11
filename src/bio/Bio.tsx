import React from "react";
import styled from "styled-components";

import AppSection from "../common/Section";
import { Wave as AppWave } from "../common/emojis";
import Arrow from "../common/Arrow";
import Spacer from "../common/Spacer";

const Section = styled(AppSection)`
  background-color: var(--colors-primary);

  align-items: center;
  justify-content: space-between;
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
`;

const Bio = () => (
  <Section id="bio">
    <Spacer />
    <Wave />
    <Text>
      Hi there,
      <br />
      my name is Carlo.
      <br />
      <br />I am a full-stack JavaScript developer and UX/UI enthusiast and have been using my passion for technology to
      help organizations create amazing web applications since 2017.
      <br />
      <br />
      My credo is:
      <br />
      <q>For every problem, there exists an elegant solution.</q>
      <br />I get to these solutions by using the latest and greatest tools/techniques available. Through persistent
      learning and critical reflection, I maintain a current view of what is needed to make a project succeed.
      <br />I believe that every successful project requires agility and an open, honest and clear line of communication
      between all stakeholders and team members, regardless of the size of the project.
    </Text>
    <Spacer />
    <Arrow href="#timeline" />
  </Section>
);

export default Bio;
