import React from 'react'
import styled from 'styled-components'
import Title from 'components/Title'
import Paragraph from 'components/Paragraph'

const Header = () => (
  <HeaderWrapper>
    <Title type="h1">My todos</Title>
    <Paragraph>
      I heard a puppy is fed every time someone makes a todo app.
    </Paragraph>
  </HeaderWrapper>
)

const HeaderWrapper = styled.header`
  text-align: left;
  background-color: ${props => props.theme['color-main--primary']};
  padding: 2rem;

  @media only screen and (min-width: ${props => props.theme['screen-xs']}) {
    padding: 3rem 10%;
  }

  @media only screen and (min-width: ${props => props.theme['screen-sm']}) {
    padding: 4rem 20%;
  }
`

export default Header
