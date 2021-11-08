import React from "react";

import { SectionContainer } from "./common/Section";

import Landing from "./landing";
import Bio from "./bio";
import Layout from "./layout";
import Timeline from "./timeline";

const App = () => {
  return (
    <Layout>
      <SectionContainer>
        <Landing />
        <Bio />
        <Timeline />
      </SectionContainer>
    </Layout>
  );
};

export default App;
