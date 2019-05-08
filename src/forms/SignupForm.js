import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { signupUser } from 'redux/modules/auth/actions'
import Input from 'components/Input'
import Button from 'components/Button'

const SignupForm = ({ signupUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      return toast.error(
        "Passwords need to match! Make sure you've entered the same password twice.",
      )
    }

    signupUser({ email, password })
  }

  return (
    <SignupFormWrapper onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        label="Email"
      />
      <Input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        label="Password"
      />
      <Input
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        label="Confirm password"
      />
      <span>
        Already have an account? <Link to="/log-in">Log in!</Link>
      </span>
      <Button onClick={handleSubmit}>Sign up</Button>
    </SignupFormWrapper>
  )
}

const SignupFormWrapper = styled.form`
  display: grid;
  position: relative;
  grid-gap: 1.5rem;
  justify-items: center;
  padding: 1.5rem;
  border-radius: ${props => props.theme['border-radius']};
  background-color: ${props => props.theme['color-primary']};
  box-shadow: ${props => props.theme['box-shadow--strong']};
`

export default connect(
  null,
  { signupUser },
)(SignupForm)
