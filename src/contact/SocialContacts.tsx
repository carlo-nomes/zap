import React from "react";
import styled from "styled-components";
import * as Socials from "../common/Socials";

const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;

  max-width: 25rem;
  margin: 0 0 5rem 0;
`;

const SocialContacts = () => (
  <Wrapper>
    <Socials.GitHub />
    <Socials.Codepen />
    <Socials.Medium />
    <Socials.Behance />
    <Socials.LinkedIn />
    <Socials.Instagram />
    <Socials.Twitter />
    <Socials.Bar />
  </Wrapper>
);

export default SocialContacts;
