import React from "react"

import Section from "common/section"
import Spacer from "common/spacer"
import Arrow from "common/arrow"

import Title from "./title"
import SubTitle from "./sub-title"
import Header from "./header"

const Landing = () => (
  <Section color="#fafafa">
    <Header />
    <Spacer />
    <Title />
    <SubTitle />
    <Spacer />
    <Arrow href="#bio" />
  </Section>
)

export default Landing
