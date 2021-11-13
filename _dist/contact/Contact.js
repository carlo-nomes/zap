import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import AppSection from "../common/Section/index.js";
import * as Socials from "../common/Socials/index.js";
import WaveBackground from "../common/WaveBackground.js";
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
  return /* @__PURE__ */ React.createElement(Section, {
    id: "contact"
  }, /* @__PURE__ */ React.createElement(WaveBackground, {
    id: "contact-wrapper",
    position: "top",
    amount: 2,
    min: 0,
    max: 0.2,
    as: Wrapper
  }, /* @__PURE__ */ React.createElement(Title, null, "Get in touch"), /* @__PURE__ */ React.createElement(SubTitle, null, "you can find me at all the usual places:"), /* @__PURE__ */ React.createElement(SocialsWrapper, null, /* @__PURE__ */ React.createElement(Socials.GitHub, null), /* @__PURE__ */ React.createElement(Socials.Codepen, null), /* @__PURE__ */ React.createElement(Socials.Medium, null), /* @__PURE__ */ React.createElement(Socials.LinkedIn, null), /* @__PURE__ */ React.createElement(Socials.Instagram, null), /* @__PURE__ */ React.createElement(Socials.Twitter, null), /* @__PURE__ */ React.createElement(Socials.Bar, null))));
};
export default Contact;
