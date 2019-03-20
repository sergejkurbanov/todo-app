import types from './types'

const defaultState = {
  all: [
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: true,
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false,
    },
  ],
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

      return {
        ...state,
        all: newTodos,
      }
    }

    case types.COMPLETE_TODO: {
      const { index } = payload
      const newTodos = [...state.all]

      newTodos[index].isCompleted = !newTodos[index].isCompleted

      return {
        ...state,
        all: newTodos,
      }
    }

    default:
      return state
  }
}

export default todosReducer
