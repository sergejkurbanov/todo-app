import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { createUser } from 'redux/modules/users/actions'
import Input from 'components/Input'
import Button from 'components/Button'

const SignupForm = ({ createUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error(
        "Passwords need to match! Make sure you've entered the same password twice.",
      )
      return
    }

    createUser({ email, password })
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
  grid-gap: 1.5rem;
  justify-items: center;
  padding: 1.5rem;
  border-radius: ${props => props.theme['border-radius']};
  background-color: ${props => props.theme['color-main--primary']};
  box-shadow: ${props => props.theme['box-shadow--strong']};
`

export default connect(
  null,
  { createUser },
)(SignupForm)
