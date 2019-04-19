import React, { useState } from 'react'
import styled from 'styled-components'
import Input from 'components/Input'
import Button from 'components/Button'

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
  margin-bottom: 1rem;
`

export default TodoForm
