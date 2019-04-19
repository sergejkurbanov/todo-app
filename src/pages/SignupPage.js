import React from 'react'
import { Flex } from '@rebass/grid'
import SignupForm from 'forms/SignupForm'
import Container from '../components/Container'

const SignupPage = () => (
  <Flex>
    <Container as="main" mt={100} maxWidth="350px">
      <SignupForm />
    </Container>
  </Flex>
)

export default SignupPage
