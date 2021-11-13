import React from "react";
import styled from "styled-components";

import AppSection from "../common/Section";
import * as Socials from "../common/Socials";
import WaveBackground from "../common/WaveBackground";

const Section = styled(AppSection)`
  background-color: var(--colors-gray-600);
  color: var(--colors-gray-600);
`;

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;

  margin: 3rem 2rem 0 2rem;
`;

const Wrapper = styled.div`
  height: 100%;
  background-color: var(--colors-secondary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;

  margin: 0 2rem 3rem 2rem;
`;

const SocialsWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;

  max-width: 25rem;
  margin: 0 0 5rem 0;
`;

const Contact = () => {
  return (
    <Section id="contact">
      <WaveBackground id="contact-wrapper" position="top" amount={2} min={0} max={0.2} as={Wrapper}>
        <Title>Get in touch</Title>
        <SubTitle>you can find me at all the usual places:</SubTitle>
        <SocialsWrapper>
          <Socials.GitHub />
          <Socials.Codepen />
          <Socials.Medium />
          <Socials.LinkedIn />
          <Socials.Instagram />
          <Socials.Twitter />
          <Socials.Bar />
        </SocialsWrapper>
      </WaveBackground>
    </Section>
  );
};

export default Contact;
