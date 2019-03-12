import React, { useState } from 'react'
import Input from './Input'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
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
