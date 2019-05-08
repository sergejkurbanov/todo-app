import React from 'react'
import { connect } from 'react-redux'
import { Flex } from '@rebass/grid'
import { signupUser } from 'redux/modules/auth/actions'
import SignupForm from 'forms/SignupForm'
import Container from '../components/Container'

const SignupPage = ({ isLoading, signupUser }) => (
  <Flex>
    <Container as="main" mt={100} maxWidth="350px">
      <SignupForm isLoading={isLoading} signupUser={signupUser} />
    </Container>
  </Flex>
)

export default connect(
  ({ auth }) => ({
    isLoading: auth.isSignupLoading,
  }),
  { signupUser },
)(SignupPage)
