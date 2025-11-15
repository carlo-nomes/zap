import styled from "styled-components";

import AppSection from "../common/section";
import WaveBackground from "../common/wave-background";
import Arrow from "../common/arrow";
import Spacer from "../common/spacer";

import Title from "./title";
import Subtitle from "./subtitle";
import SocialContacts from "./social-contacts";

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
