import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Input from 'components/Input'
import Button from 'components/Button'

const LoginForm = ({ loginUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    loginUser({ email, password })
  }

  return (
    <LoginFormWrapper onSubmit={handleSubmit}>
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
      <span>
        Don't have an account? <Link to="/sign-up">Sign up!</Link>
      </span>
      <Button onClick={handleSubmit}>Log in</Button>
    </LoginFormWrapper>
  )
}

const LoginFormWrapper = styled.form`
  display: grid;
  grid-gap: 1.5rem;
  justify-items: center;
  padding: 1.5rem;
  border-radius: ${props => props.theme['border-radius']};
  background-color: ${props => props.theme['color-main--primary']};
  box-shadow: ${props => props.theme['box-shadow--strong']};
`

export default LoginForm
