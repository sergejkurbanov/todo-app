import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { logoutUser } from 'redux/modules/users/actions'

const LogoutButton = props => (
  // eslint-disable-next-line
  <LogoutButtonWrapper onClick={props.logoutUser} {...props}>
    Logout
  </LogoutButtonWrapper>
)

const LogoutButtonWrapper = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${props => props.theme['color-gray--dark']};
  }
`

export default connect(
  null,
  { logoutUser },
)(LogoutButton)