import React, { useState } from 'react'
import Input from './Input'

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
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

export default TodoForm
