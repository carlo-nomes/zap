import React from "react";
import styled from "styled-components";

import AppSection from "../common/Section";

import { Wave as AppWave } from "../common/emojis";

const Section = styled(AppSection)`
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 1rem;
`;

const Wave = styled(AppWave)`
  flex: 1;
  margin: 1rem;
  margin-top: 0;

  text-align: center;
  font-size: 2rem;
`;

const Text = styled.p`
  max-width: 50rem;

  font-size: 1.5rem;
  @media screen and (max-height: 700px), screen and (max-width: 700px) {
    font-size: 1rem;
  }

  margin: 0;
  box-sizing: border-box;
`;

const Q = styled.q`
  font-weight: bold;
`;

const Bio = () => (
  <Section id="bio" color="var(--colors-primary)">
    <Wrapper>
      <Wave />
      <Text>
        Hi there,
        <br />
        my name is Carlo.
        <br />
        <br />I am a full-stack JavaScript developer and UX/UI enthusiast and have been using my passion for technology
        to help organizations create amazing web applications since 2017.
        <br />
        <br />
        My credo is:
        <br />
        <Q>For every problem, there exists an elegant solution.</Q>
        <br />I get to these solutions by using the latest and greatest tools/techniques available. Through persistent
        learning and critical reflection, I maintain a current view of what is needed to make a project succeed.
        <br />I believe that every successful project requires agility and an open, honest and clear line of
        communication between all stakeholders and team members, regardless of the size of the project.
      </Text>
    </Wrapper>
  </Section>
);

export default Bio;
