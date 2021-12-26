import styled from "styled-components";

const Line = styled.div`
  @media screen and (max-width: 60rem) {
    display: none;
  }

  position: absolute;
  z-index: 300;
  top: 10rem;
  bottom: -10rem;
  right: calc(50% - 0.25rem);

  width: 0.5rem;

  background: linear-gradient(
    to bottom,
    var(--colors-primary),
    var(--colors-primary) 10rem,
    var(--colors-tertiary),
    var(--colors-secondary),
    var(--colors-secondary)
  );
`;

export default Line;
