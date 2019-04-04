import React from 'react'
import styled from 'styled-components'

const Title = props => <TitleWrapper as={props.type} {...props} />

const TitleWrapper = styled.h1`
  margin: 0;
  font-size: ${props => fontSizes[props.type] || 7}rem;
`

const fontSizes = {
  h1: 7,
  h2: 6,
  h3: 5,
  h4: 4,
  h5: 3,
}

export default Title
