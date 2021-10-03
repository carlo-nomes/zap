import React from "react"
import styled, { keyframes } from "styled-components"

const jitter = keyframes`
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 25%);
  }
`

const Link = styled.a`
  position: relative;
  overflow: hidden;

  height: 100px;
  width: 100px;

  @media (max-width: 700px), (max-height: 700px) {
    height: 50px;
    width: 50px;
  }

  margin: 10px;
  align-self: center;

  svg {
    position: absolute;
    animation: ${jitter} 1s ease-in-out infinite;

    height: auto;
    width: 50%;
    left: 25%;

    color: #333333;

    &:first-child {
      top: 25%;
      animation-delay: 50ms;
    }
  }
`

const ChevronDown = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"
    />
  </svg>
)

const Arrow = props => (
  <Link aria-label="Next section" {...props}>
    <ChevronDown />
    <ChevronDown />
  </Link>
)

export default Arrow
