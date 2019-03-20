import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  createTodo,
  deleteTodo,
  completeTodo,
} from './redux/modules/todos/actions'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

const AppBase = ({
  className,
  todos,
  createTodo,
  deleteTodo,
  completeTodo,
}) => {
  return (
    <div className={className}>
      <header>
        <nav />
      </header>
      <main>
        <h1>Todos</h1>
        <TodoForm createTodo={createTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            remove={deleteTodo}
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

export default connect(
  ({ todos }) => ({
    todos: todos.all,
  }),
  {
    createTodo,
    completeTodo,
    deleteTodo,
  },
)(App)
