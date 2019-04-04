import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  createTodo,
  deleteTodo,
  completeTodo,
} from 'redux/modules/todos/actions'

import Todo from 'components/Todo'
import TodoForm from 'components/TodoForm'
import Header from 'components/Header'

const App = ({ todos, createTodo, deleteTodo, completeTodo }) => {
  return (
    <AppWrapper>
      <Header />
      <main>
        <TodoForm createTodo={createTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            remove={() => deleteTodo(index)}
            complete={() => completeTodo(index)}
            isCompleted={todo.isCompleted}
          >
            {todo.text}
          </Todo>
        ))}
      </main>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  text-align: center;

  main {
    padding: 2rem;
    display: grid;
    grid-gap: 1rem;
    justify-content: center;
  }

  p {
    font-size: 3rem;
    margin: 1rem;
  }
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
