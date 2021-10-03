import React, { ReactNode } from "react";
import styled from "styled-components";
import { useScrollLocation } from "./hooks";

const Main = styled.main`
  flex: 1;

  overflow-y: auto;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

type SectionContextType = {
  registerSection: (v: { id: string; node: any }) => void;
};
const SectionContext = React.createContext<SectionContextType>({ registerSection: () => {} });
const useSectionContext = () => {
  const context = React.useContext(SectionContext);

  if (!context) throw Error("useSectionContext is not available outside of SectionContainer");

  return context;
};

type Props = {
  children: ReactNode;
};

const SectionContainer = ({ children }: Props) => {
  const { registerSection, updateScrollLocation } = useScrollLocation();

  return (
    <SectionContext.Provider value={{ registerSection }}>
      <Main onScroll={updateScrollLocation}>{children}</Main>
    </SectionContext.Provider>
  );
};

export default SectionContainer;
export { useSectionContext };
