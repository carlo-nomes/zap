import styled from "styled-components";

import AppSection from "../common/Section";
import { Wave } from "../common/emojis";
import Arrow from "../common/Arrow";
import WaveBackground from "../common/WaveBackground";

const Section = styled(AppSection)`
  align-items: center;

  --negative-margin: 15rem;
  min-height: calc(100vh + var(--negative-margin));
  padding-bottom: var(--negative-margin);
  margin-bottom: calc(0px - var(--negative-margin));

  justify-content: space-between;
`;

const Text = styled.p`
  z-index: 1; // above the profile image
  filter: drop-shadow(0 0 0.5rem var(--colors-primary));

  box-sizing: border-box;
  margin: 0;
  padding: 1rem;
  max-width: 50rem;

  font-size: 1.5rem;
  @media screen and (max-height: 700px), screen and (max-width: 700px) {
    font-size: 1rem;
  }

  q {
    display: inline-block;
    margin: 0.5rem 0;
    font-weight: bold;
  }
`;

const Profile = styled.div`
  pointer-events: none;
  position: absolute;

  opacity: 0.5;
  filter: blur(0.25rem);

  top: 10rem;
  left: 0;
  right: 0;
  bottom: 0;

  background-image: url("./images/profile.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
`;

const Bio = () => {
  return (
    <WaveBackground
      id="bio"
      amount={2}
      as={Section}
      bg="linear-gradient(0deg, var(--colors-primary), var(--colors-primary))"
    >
      <Profile aria-label="drawing of me" />
      <Text>
        Hi there! <Wave />
        <br />
        My name is Carlo.
        <br />
        <br />
        I am a full-stack developer, agile consultant and UX/UI enthusiast. <br />
        Since 2017 I have been using my passion for technology to help organizations create amazing web applications.
        <br />
        <br />
        My credo is:
        <br />
        <q>For every challenge, there exists an elegant solution.</q>
        <br />
        I get these solutions with the latest and greatest tools/techniques available. Through persistent learning and
        critical reflection, I maintain a current view of what is needed to make any project succeed.
        <br />
        I believe that every successful endeavor, no matter the size or complexity, requires agility and an open, honest
        and clear line of communication between all parties.
        <br />
        <br />
        Checkout my <a href="#timeline">previous projects</a>! And if you like what you see, feel free to{" "}
        <a href="#contact">get in touch</a>!
      </Text>
      <Arrow href="#timeline" />
    </WaveBackground>
  );
};

export default Bio;
