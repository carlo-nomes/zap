import styled from "styled-components";

const List = styled.ul`
  box-sizing: border-box;
  width: 100%;
  max-width: 90rem;

  margin: -5rem 0 0 0;
  padding: 5rem 1rem 0 1rem;

  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  --color-0: transparent;
  --color-1: var(--colors-primary);
  --color-2: var(--colors-tertiary);
  --color-3: var(--colors-secondary);
  --color-4: var(--colors-secondary);
  --gradient-line: linear-gradient(to bottom, var(--color-1), var(--color-2), var(--color-3), var(--color-4));

  background-image: var(--gradient-line);
  background-size: 0.5rem 100%;
  background-repeat: no-repeat;
  background-position: 0 0;

  @media screen and (min-width: 60rem) {
    background-position: center 0;
    margin: 0;
    padding: 0 1rem 0 1rem;
  }
`;

export default List;
