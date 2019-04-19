import * as types from './types'

const defaultState = {
  current: null,
}

const todosReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_USER_SUCCESS: {
      return { ...state, current: payload.user }
    }

    case types.LOGOUT_USER_SUCCESS: {
      return { ...state, current: null }
    }

    default:
      return state
  }
}

export default todosReducer
