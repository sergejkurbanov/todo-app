import * as types from './types'

const defaultState = {
  all: [],
}

const todosReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.CREATE_TODO: {
      const newTodo = {
        text: payload.text,
        isCompleted: false,
      }

      return {
        ...state,
        all: [...state.all, newTodo],
      }
    }

    case types.DELETE_TODO: {
      const newTodos = [...state.all]

      newTodos.splice(payload.index, 1)

      return { ...state, all: newTodos }
    }

    case types.COMPLETE_TODO: {
      const newTodos = [...state.all]
      const { index } = payload

      newTodos[index].isCompleted = !newTodos[index].isCompleted

      return { ...state, all: newTodos }
    }

    case types.GET_TODOS_SUCCESS: {
      const { data } = payload

      return { ...state, all: data }
    }

    default:
      return state
  }
}

export default todosReducer
