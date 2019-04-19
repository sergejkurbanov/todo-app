import React, { useEffect } from 'react'
import { Flex } from '@rebass/grid'
import {
  getTodos,
  createTodo,
  deleteTodo,
  completeTodo,
} from 'redux/modules/todos/actions'
import { connect } from 'react-redux'
import Header from 'components/Header/index'
import TodoList from 'components/TodoList'
import Container from 'components/Container'
import TodoForm from 'forms/TodoForm'

const TodosPage = ({
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
    <React.Fragment>
      <Header />
      <Flex flexDirection="column">
        <Container as="main" px={2} pt={3} maxWidth="500px">
          <TodoForm createTodo={createTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        </Container>
      </Flex>
    </React.Fragment>
  )
}

export default connect(
  ({ todos }) => ({
    todos: todos.all,
  }),
  {
    getTodos,
    createTodo,
    completeTodo,
    deleteTodo,
  },
)(TodosPage)
