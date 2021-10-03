import React from "react"
import styled from "styled-components"
import { useScrollLocation } from "./hooks"

const Main = styled.main`
  flex: 1;

  overflow-y: auto;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`
const SectionContext = React.createContext()
const useSectionContext = () => {
  const context = React.useContext(SectionContext)

  if (!context)
    throw Error(
      "useSectionContext is not available outside of SectionContainer"
    )

  return context
}

const SectionContainer = props => {
  const { registerSection, updateScrollLocation } = useScrollLocation()

  return (
    <SectionContext.Provider value={{ registerSection }}>
      <Main onScroll={updateScrollLocation} {...props} />
    </SectionContext.Provider>
  )
}

export default SectionContainer
export { useSectionContext }
