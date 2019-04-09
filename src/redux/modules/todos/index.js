import * as types from './types'

const defaultState = {
  all: [],
}

const todosReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.GET_TODOS_SUCCESS: {
      const { data } = payload

      return { ...state, all: data }
    }

    default:
      return state
  }
}

export default todosReducer
