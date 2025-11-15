import styled from "styled-components";

import AppSection from "../common/section";
import WaveBackground from "../common/wave-background";
import Arrow from "../common/arrow";
import Spacer from "../common/spacer";
import * as Socials from "../common/socials";

import Title from "./title";
import Subtitle from "./subtitle";

const Section = styled(AppSection)`
  color: var(--colors-gray-600);
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 35rem;
  margin: 2rem auto 4rem;
  padding: 0 1rem;

  @media screen and (max-width: 480px) {
    gap: 0.75rem;
    max-width: 100%;
  }
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
        <Subtitle>You can find me at these places:</Subtitle>
        <SocialsWrapper>
          <Socials.Mail />
          <Socials.GitHub />
          <Socials.LinkedIn />
          <Socials.Medium />
          <Socials.Codepen />
          <Socials.Behance />
        </SocialsWrapper>
        <Spacer />
        <Arrow direction="up" href="#landing" />
      </Container>
    </WaveBackground>
  );
};

export default Contact;
