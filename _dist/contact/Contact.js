import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import AppSection from "../common/Section/index.js";
import Wrapper from "./Wrapper.js";
import Title from "./Title.js";
import Subtitle from "./Subtitle.js";
import SocialContacts from "./SocialContacts.js";
const Section = styled(AppSection)`
  background-color: var(--colors-gray-600);
  color: var(--colors-gray-600);
`;
const Contact = () => {
  return /* @__PURE__ */ React.createElement(Section, {
    id: "contact"
  }, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Title, null, "Get in touch"), /* @__PURE__ */ React.createElement(Subtitle, null, "you can find me at all the usual places:"), /* @__PURE__ */ React.createElement(SocialContacts, null)));
};
export default Contact;
