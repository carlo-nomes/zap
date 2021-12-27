import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import * as Socials from "../common/Socials/index.js";
const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;

  max-width: 25rem;
  margin: 0 0 5rem 0;
`;
const SocialContacts = () => /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Socials.GitHub, null), /* @__PURE__ */ React.createElement(Socials.Codepen, null), /* @__PURE__ */ React.createElement(Socials.Medium, null), /* @__PURE__ */ React.createElement(Socials.Behance, null), /* @__PURE__ */ React.createElement(Socials.LinkedIn, null), /* @__PURE__ */ React.createElement(Socials.Instagram, null), /* @__PURE__ */ React.createElement(Socials.Twitter, null), /* @__PURE__ */ React.createElement(Socials.Bar, null));
export default SocialContacts;
