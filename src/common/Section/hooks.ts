import React, { useState } from "react";
import debounce from "lodash.debounce";

const useSectionList = () => {
  const [sections, setSections] = useState<Record<string, HTMLElement>>({});
  const registerSection = ({ id, node }: { id: string; node: any }) => setSections((prevSections) => ({ ...prevSections, [id]: node }));

  return { sections, registerSection };
};

const getHashFromLocation = () => window.location.hash.substring(1);

const useLocationHash = () => {
  const [hash, setHash] = useState(getHashFromLocation);

  if (typeof window !== "undefined") window.onhashchange = () => setHash(getHashFromLocation);

  const updateHash = (id: string) => {
    if (!id) return;
    window.location.hash = `#${id}`;
    setHash(id);
  };

  return [hash, updateHash] as const;
};

const useScrollLocation = () => {
  const { sections, registerSection } = useSectionList();

  const [hash, setHash] = useLocationHash();
  React.useEffect(() => {
    if (sections[hash]) sections[hash].scrollIntoView();
  }, [hash, sections]);

  const setHashToScroll = () => {
    const id = Object.keys(sections).find((v) => sections[v] && sections[v].getBoundingClientRect().top === 0);
    setHash(id || "");
  };
  const updateScrollLocation = debounce(setHashToScroll, 100);

  return { sections, registerSection, updateScrollLocation };
};

export { useScrollLocation };
