import ScrollContext from "./common/scroll-context";
import { SectionContext } from "./common/section";

import Bio from "./bio";
import Contact from "./contact";
import Landing from "./landing";
import Layout from "./layout";
import Timeline from "./timeline";

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
