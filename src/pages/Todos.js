import React from 'react'
import { Flex, Box } from '@rebass/grid'
import Header from 'components/Header'
import TodoList from 'containers/TodoList'

const Todos = () => (
  <Flex flexDirection="column">
    <Box>
      <Header />
    </Box>
    <Box>
      <TodoList />
    </Box>
  </Flex>
)

export default Todos
