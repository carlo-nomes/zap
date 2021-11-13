import React from "react";

import ScrollContext from "./common/ScrollContext";
import { SectionContext } from "./common/Section";

import Layout from "./layout";
import Landing from "./landing";
import Bio from "./bio";
import Timeline from "./timeline";
import Contact from "./contact";

const App = () => {
  return (
    <ScrollContext Container={Layout}>
      <SectionContext>
        <Landing />
        <Bio />
        <Timeline />
        <Contact />
      </SectionContext>
    </ScrollContext>
  );
};

export default App;
