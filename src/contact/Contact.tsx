import React from "react";
import styled from "styled-components";

import AppSection from "../common/Section";
import WaveBackground from "../common/WaveBackground";
import Arrow from "../common/Arrow";
import Spacer from "../common/Spacer";

import Title from "./Title";
import Subtitle from "./Subtitle";
import SocialContacts from "./SocialContacts";

const Section = styled(AppSection)`
  color: var(--colors-gray-600);
`;

const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contact = () => {
  return (
    <WaveBackground
      id="contact"
      amount={2}
      as={Section}
      bg="linear-gradient(0deg, var(--colors-secondary), var(--colors-secondary))"
    >
      <Container>
        <Spacer />
        <Title>Get in touch</Title>
        <Subtitle>you can find me at all the usual places:</Subtitle>
        <SocialContacts />
        <Spacer />
        <Arrow direction="up" href="#landing" />
      </Container>
    </WaveBackground>
  );
};

export default Contact;
