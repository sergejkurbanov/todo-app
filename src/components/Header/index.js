import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Title from 'components/Title'
import LogoutButton from './subcomponents/LogoutButton'

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Title type="h1">My todos</Title>I heard a puppy is fed every time someone
      makes a todo app.
      <LogoutButton />
    </Container>
  </HeaderWrapper>
)

const HeaderWrapper = styled.header`
  padding: 1rem 0.5rem 2rem;
  background-color: ${props => props.theme['color-primary']};
`

export default Header
