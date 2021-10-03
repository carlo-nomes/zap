import React from "react";

import { SectionContainer } from "./common/Section";

import Landing from "./landing";
import Bio from "./bio";
import Layout from "./layout";

const App = () => {
  return (
    <Layout>
      <SectionContainer>
        <Landing />
        <Bio />
      </SectionContainer>
    </Layout>
  );
};

export default App;
