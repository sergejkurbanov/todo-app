import React from 'react'
import { Flex } from '@rebass/grid'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from 'redux/modules/auth/actions'
import LoginForm from 'forms/LoginForm'
import Container from 'components/Container'

const LoginPage = ({ user, location, loginUser, isLoading }) => {
  const { from } = location.state || { from: { pathname: '/' } }

  if (user) return <Redirect to={from} />

  return (
    <Flex>
      <Container as="main" mt={100} maxWidth="350px">
        <LoginForm isLoading={isLoading} loginUser={loginUser} />
      </Container>
    </Flex>
  )
}

export default connect(
  ({ auth }) => ({
    user: auth.current,
    isLoading: auth.isLoginLoading,
  }),
  { loginUser },
)(LoginPage)
