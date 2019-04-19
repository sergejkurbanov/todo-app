import React from 'react'
import styled from 'styled-components'

const Title = props => <TitleWrapper as={props.type} {...props} />

const TitleWrapper = styled.h1`
  margin: 0;
  font-size: ${props => fontSizes[props.type] || fontSizes.h1}rem;
`

const fontSizes = {
  h1: 3,
  h2: 2.25,
  h3: 1.75,
  h4: 1.125,
}

export default Title
