import * as types from './types'

export const createTodo = text => ({
  type: types.CREATE_TODO,
  payload: { text },
})

export const deleteTodo = index => ({
  type: types.DELETE_TODO,
  payload: { index },
})

export const completeTodo = index => ({
  type: types.COMPLETE_TODO,
  payload: { index },
})

export const getTodos = () => ({ type: types.GET_TODOS })
