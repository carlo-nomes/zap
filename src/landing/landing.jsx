import React from "react";

import Section from "common/Section";
import Spacer from "common/Spacer";
import Arrow from "common/Arrow";

import Title from "./Title";
import SubTitle from "./SubTitle";
import Header from "./Header";

const Landing = () => (
  <Section id="landing" color="light">
    <Header />
    <Spacer />
    <Title />
    <SubTitle />
    <Spacer />
    <Arrow href="#bio" />
  </Section>
);

export default Landing;
