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
        <h1>Todo app</h1>
        <p>A demonstrational app in React</p>
      </header>
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
      <footer />
    </div>
  )
}

const App = styled(AppBase)`
  text-align: center;

  header {
    text-align: left;
    background-color: ${props => props.theme['color-main--primary']};
    padding: 2rem;

    @media only screen and (min-width: ${props => props.theme['screen-xs']}) {
      padding: 3rem 10%;
    }

    @media only screen and (min-width: ${props => props.theme['screen-sm']}) {
      padding: 4rem 20%;
    }
  }

  main {
    padding: 2rem;
  }

  h1 {
    font-size: 7rem;
    margin: 0;
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
