import React, { useState } from 'react'
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'

const TodoForm = ({ createTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const sanitizedValue = value.trim()
    if (!sanitizedValue) return

    createTodo(sanitizedValue)
    setValue('')
  }

  return (
    <TodoFormWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <Button onClick={handleSubmit}>Add todo</Button>
    </TodoFormWrapper>
  )
}

const TodoFormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0.8rem;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${props => props.theme['screen-xs']}) {
    width: 50rem;
  }
`

export default TodoForm
