import React from "react"
import styled from "styled-components"

import Right from "./right"
import Left from "./left"
import Bolt from "./bolt"

const Wrapper = styled.h1`
  display: flex;
  margin: 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 10rem;
  height: 200px;

  @media (max-width: 700px), (max-height: 700px) {
    font-size: 7rem;
    height: 140px;
  }
  @media (max-width: 600px), (max-height: 600px) {
    font-size: 6rem;
    height: 120px;
  }
  @media (max-width: 500px), (max-height: 500px) {
    font-size: 5rem;
    height: 100px;
  }
  @media (max-width: 400px), (max-height: 400px) {
    font-size: 4rem;
    height: 80px;
  }
  @media (max-width: 300px), (max-height: 300px) {
    font-size: 3rem;
    height: 60px;
  }
`

const Title = () => (
  <Wrapper>
    <Left>zap</Left>
    <Bolt />
    <Right>dev</Right>
  </Wrapper>
)

export default Title
