import React from "react";
import styled from "styled-components";

import AppSection from "../common/Section";

import Wrapper from "./Wrapper";
import Title from "./Title";
import Subtitle from "./Subtitle";
import SocialContacts from "./SocialContacts";

const Section = styled(AppSection)`
  background-color: var(--colors-gray-600);
  color: var(--colors-gray-600);
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Wrapper>
        <Title>Get in touch</Title>
        <Subtitle>you can find me at all the usual places:</Subtitle>
        <SocialContacts />
      </Wrapper>
    </Section>
  );
};

export default Contact;
