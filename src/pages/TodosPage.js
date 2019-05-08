import React, { useEffect } from 'react'
import { Flex } from '@rebass/grid'
import {
  getTodos,
  createTodo,
  deleteTodo,
  toggleTodo,
} from 'redux/modules/todos/actions'
import { connect } from 'react-redux'
import Header from 'components/Header/index'
import TodoList from 'components/TodoList'
import Container from 'components/Container'
import Loading from 'components/Loading'
import TodoForm from 'forms/TodoForm'

const TodosPage = ({
  user,
  todos,
  isLoading,
  createTodo,
  deleteTodo,
  toggleTodo,
  getTodos,
}) => {
  useEffect(() => {
    getTodos(user)
  }, [])

  return (
    <React.Fragment>
      <Header />
      <Flex flexDirection="column">
        <Container as="main" px={2} pt={3} maxWidth="500px">
          <Loading isLoading={isLoading} />
          <TodoForm createTodo={createTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </Container>
      </Flex>
    </React.Fragment>
  )
}

export default connect(
  ({ todos, auth }) => ({
    todos: todos.all,
    user: auth.current,
    isLoading: todos.isLoading,
  }),
  {
    getTodos,
    createTodo,
    toggleTodo,
    deleteTodo,
  },
)(TodosPage)
