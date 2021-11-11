import React from "react";

import ScrollContext from "./common/ScrollContext";
import { SectionContext } from "./common/Section";

import Layout from "./layout";
import Landing from "./landing";
import Bio from "./bio";
import Timeline from "./timeline";

const App = () => {
  return (
    <ScrollContext Container={Layout}>
      <SectionContext>
        <Landing />
        <Bio />
        <Timeline />
      </SectionContext>
    </ScrollContext>
  );
};

export default App;
