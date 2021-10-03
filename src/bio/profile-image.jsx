import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const clippath = `
clip-path: polygon(
  50% 0%,
  83% 12%,
  100% 43%,
  94% 78%,
  68% 100%,
  32% 100%,
  6% 78%,
  0% 43%,
  17% 12%
);
`

const StyledImage = styled(Img)`
  margin: 20px;

  ${clippath};
  filter: saturate(17%) brightness(105%) contrast(215%);
`

const ProfileImage = props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "profile-square.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledImage fixed={data.file.childImageSharp.fixed} {...props} />
    )}
  />
)

export default ProfileImage
