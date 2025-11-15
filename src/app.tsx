import ScrollContext from "./common/scroll-context";
import { SectionContext } from "./common/section";

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
