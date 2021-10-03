import React from "react";
import styled from "styled-components";

import Section from "../common/Section";
import Spacer from "../common/Spacer";

import { Wave } from "../common/emojis";

const Wrapper = styled.span`
  align-self: center;
  margin: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-aspect-ratio: 1/1), (min-width: 1000px) and (min-height: 800px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  flex: 1;
  margin: 20px;
  max-width: 900px;

  box-sizing: border-box;
  text-align: left;

  font-size: 3rem;
  @media (max-width: 500px), (max-height: 500px) {
    font-size: 1.5rem;
  }
`;

const Bio = () => (
  <Section id="bio" color="primary">
    <Spacer />
    <Wrapper>
      <Text>
        <Wave />
        &nbsp; Hi, I'm Carlo.
        <br />
        I'm an Antwerp based developer, helping companies create amazing webapps
        using the latest tools and techniques.
      </Text>
    </Wrapper>
    <Spacer />
  </Section>
);

export default Bio;
