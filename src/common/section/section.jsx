import React from "react"
import styled from "styled-components"

import { useSectionContext } from "./section-container"

const Section = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};

  position: relative;
  scroll-snap-align: start;

  background-color: ${({ color, theme }) => theme.colors[color] || color};
`

const SectionWrapper = props => {
  // Cannot change id after init
  const { current: id } = React.useRef(props.id)
  if (id !== props.id && process.env.NODE_ENV === "development") {
    console.warn(
      "props.id can't change after initialisation of Section component"
    )
  }

  const { registerSection } = useSectionContext()
  const [node, setRef] = React.useState(null)

  React.useEffect(() => {
    if (id) registerSection({ id, node })
  }, [node, id])

  return <Section ref={setRef} {...props} id={id} />
}

export default SectionWrapper
