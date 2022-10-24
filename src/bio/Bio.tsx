import React from "react";
import styled from "styled-components";

import AppSection from "../common/Section";
import { Wave as AppWave } from "../common/emojis";
import Arrow from "../common/Arrow";
import Spacer from "../common/Spacer";
import WaveBackground from "../common/WaveBackground";
import { useElementInView } from "../common/ScrollContext";

const Section = styled(AppSection)`
  align-items: center;
  justify-content: space-between;

  background-color: var(--colors-primary);
`;

const Wave = styled(AppWave)`
  float: left;
  margin: 1rem;

  text-align: center;
  font-size: 2rem;
`;

const Text = styled.p`
  box-sizing: border-box;
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

  opacity: 0;
  margin: 5rem 0 -5rem 0;
  transition: opacity var(--transition-duration-long) ease-in-out, margin var(--transition-duration-long) ease-in-out;

  &.in-view {
    opacity: 1;
    margin: 0;
  }
`;

const Profile = styled.img`
  width: 33%;
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0.75;
`;

const Bio = () => {
  const [inView, ref] = useElementInView<HTMLParagraphElement>();
  return (
    <WaveBackground id="bio" position="top" amount={3} min={0} max={0.15} as={Section}>
      <Profile src="./images/profile.svg" alt="Profile" />
      <Spacer />
      <Wave />
      <Text ref={ref} className={inView ? "in-view" : ""}>
        Hi there,
        <br />
        my name is Carlo.
        <br />
        <br />I am a full-stack JavaScript developer and UX/UI enthusiast. <br />
        Since 2017 I have been using my passion for technology to help organizations create amazing web applications.
        <br />
        <br />
        My credo is:
        <br />
        <q>For every challenge, there exists an elegant solution.</q>
        <br />I get these solutions with the latest and greatest tools/techniques available. Through persistent learning
        and critical reflection, I maintain a current view of what is needed to make any project succeed.
        <br />I believe that every successful endeavor, no matter the size or complexity, requires agility and an open,
        honest and clear line of communication between all parties.
      </Text>
      <Spacer />
      <Arrow href="#timeline" />
    </WaveBackground>
  );
};

export default Bio;
