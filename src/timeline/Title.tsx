import React, { ReactNode } from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  width: 100%;

  background: var(--colors-primary);
  overflow: hidden;
  position: relative;

  h2 {
    height: 20rem;
    @media screen and (max-width: 60rem) {
      height: 10rem;
    }

    text-align: center;
    font-size: 3rem;
    color: var(--colors-gray-600);

    margin: 3rem 0 0 0;
    padding: 0;
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    fill: var(--colors-gray-600);
  }
`;

const Title = ({ children }: { children: ReactNode }) => (
  <TitleWrapper>
    <h2>{children}</h2>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path d="M0,128L40,149.3C80,171,160,213,240,213.3C320,213,400,171,480,170.7C560,171,640,213,720,202.7C800,192,880,128,960,122.7C1040,117,1120,171,1200,165.3C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
    </svg>
  </TitleWrapper>
);

export default Title;
