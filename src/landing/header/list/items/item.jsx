import React from "react"
import styled from "styled-components"

import Button from "common/button"

const ItemWrapper = styled.li`
  display: block;
  text-decoration: none;
  margin: 5px;
`

const Item = props => (
  <ItemWrapper>
    <Button.Link
      href=""
      target="_blank"
      rel="noopener noreferrer"
      size="40px"
      {...props}
    />
  </ItemWrapper>
)

export default Item
