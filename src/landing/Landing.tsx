import React from "react";
import styled from "styled-components";

import AppSection from "../common/Section";
import Spacer from "../common/Spacer";
import Arrow from "../common/Arrow";

import Title from "./Title";
import SubTitle from "./SubTitle";
import Header from "./Header";

const Section = styled(AppSection)`
  background-color: var(--color-grey-100);
  position: relative;
`;

const Wrapper = styled.div`
  position: fixed;

  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Landing = () => (
  <Section id="landing">
    <Header />
    <Wrapper>
      <Title />
      <SubTitle />
    </Wrapper>
    <Spacer />
    <Arrow href="#bio" />
  </Section>
);

export default Landing;
