import styled from "styled-components";

const List = styled.ul`
  z-index: 100;

  width: 100%;
  max-width: 75rem;

  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
  padding: 0;

  @media screen and (max-width: 60rem) {
    margin-left: 2.5rem;
  }
`;

export default List;
