import styled from "styled-components";

const Line = styled.div`
  position: absolute;
  margin: 0 1rem;

  width: 0.5rem;
  height: 100%;

  background: linear-gradient(to bottom, var(--colors-primary), #09814a, var(--colors-secondary));

  @media screen and (min-width: 60rem) {
    left: 50%;
    right: 50%;
  }
`;

export default Line;
