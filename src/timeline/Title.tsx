import React, { ReactNode } from "react";
import styled from "styled-components";
import WaveBackground from "../common/WaveBackground";

const TitleWrapper = styled.h2`
  width: 100%;
  margin: 0;
  padding: 10rem 0;
  background: var(--colors-primary);

  text-align: center;
  font-size: 3rem;
  color: var(--colors-gray-600);
`;

const Title = ({ children }: { children: ReactNode }) => <TitleWrapper>{children}</TitleWrapper>;

export default Title;
