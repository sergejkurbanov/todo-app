import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  createTodo,
  deleteTodo,
  completeTodo,
  getTodos,
} from 'redux/modules/todos/actions'
import Todo from 'components/Todo'
import TodoForm from 'components/TodoForm'

const TodoList = ({
  todos,
  createTodo,
  deleteTodo,
  completeTodo,
  getTodos,
}) => {
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <TodoListWrapper>
      <TodoForm createTodo={createTodo} />
      {todos.map(({ id, text, isCompleted }) => (
        <Todo
          key={id}
          remove={() => deleteTodo(id)}
          complete={() => completeTodo({ id: id, isCompleted: !isCompleted })}
          isCompleted={isCompleted}
        >
          {text}
        </Todo>
      ))}
    </TodoListWrapper>
  )
}

const TodoListWrapper = styled.main`
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
`

export default connect(
  ({ todos }) => ({
    todos: todos.all,
  }),
  {
    createTodo,
    completeTodo,
    deleteTodo,
    getTodos,
  },
)(TodoList)
