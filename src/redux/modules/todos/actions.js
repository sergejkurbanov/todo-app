import * as types from './types'

export const createTodo = text => ({
  type: types.CREATE_TODO,
  payload: { text },
})

export const completeTodo = ({ id, isCompleted }) => ({
  type: types.COMPLETE_TODO,
  payload: { id, isCompleted },
})

export const deleteTodo = id => ({ type: types.DELETE_TODO, payload: { id } })

export const getTodos = () => ({ type: types.GET_TODOS })
