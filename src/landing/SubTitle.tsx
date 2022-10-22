import React from "react";
import styled from "styled-components";

import { HighVoltage } from "../common/emojis";

const Wrapper = styled.h2`
  align-self: center;
  > span {
    margin: 0 10px;
  }

  text-transform: uppercase;
  text-align: center;

  font-size: 2rem;

  @media (max-width: 700px), (max-height: 700px) {
    font-size: 1rem;
  }

  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));
`;

const SubTitle = () => (
  <Wrapper>
    <HighVoltage />
    Lightning fast development
    <HighVoltage />
  </Wrapper>
);

export default SubTitle;
