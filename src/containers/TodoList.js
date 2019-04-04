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

const TodoList = ({ todos, createTodo, deleteTodo, completeTodo }) => (
  <TodoListWrapper>
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
  </TodoListWrapper>
)

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
  },
)(TodoList)
