import React from "react";

const App = () => {
  return (
    <SectionContainer>
      <Landing />
      <Bio />
    </SectionContainer>
  );
};

React.render(<App />, document.getElementById("app"));
