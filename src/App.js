import React, { useState } from 'react'
import styled from 'styled-components'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

const AppBase = ({ className }) => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !todos[index].isCompleted
    setTodos(newTodos)
  }

  return (
    <div className={className}>
      <header>
        <nav />
      </header>
      <main>
        <h1>Todos</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            complete={completeTodo}
            isCompleted={todo.isCompleted}
          >
            {todo.text}
          </Todo>
        ))}
      </main>
      <footer />
    </div>
  )
}

const App = styled(AppBase)`
  text-align: center;
`

export default App
