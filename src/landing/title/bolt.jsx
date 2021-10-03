import React from "react"
import styled, { keyframes } from "styled-components"

const groove = keyframes`
  0% {
    color: #b5413b;
  }
  33% {
    color: #f4d75a;
  }
  66% {
    color: #09814a;
  }
  100% {
    color: #b5413b;
  }
`

const Wrapper = styled.span`
  animation: ${groove} 30s infinite;

  align-self: stretch;
  margin: 0 10px;
  &,
  svg {
    height: 100%;
    width: auto;
  }
`

const Bolt = () => (
  <Wrapper>
    <svg viewBox="0 0 215 500" xmlns="http://www.w3.org/2000/svg">
      <title>Bolt</title>
      <polygon
        fill="currentcolor"
        points="0,2.49800181e-13 214.28571399999998,2.2586397e-13 142.857143,213.795918 214.28571399999998,213.795918 71.428571,500 71.428571,285.061224 0,285.061224"
      />
    </svg>
  </Wrapper>
)

export default Bolt
