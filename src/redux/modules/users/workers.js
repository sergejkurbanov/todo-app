import { put, call } from 'redux-saga/effects'
import usersApi from 'api/users'
import * as types from './types'

export function* createUser({ payload }) {
  const { email, password } = payload

  try {
    yield call(() => usersApi.createUser({ email, password }))
    yield put({ type: types.CREATE_USER_SUCCESS })
  } catch (error) {
    yield put({ type: types.CREATE_USER_ERROR, payload: { error } })
  }
}

export function* loginUser({ payload }) {
  const { email, password } = payload

  try {
    const response = yield call(() => usersApi.loginUser({ email, password }))

    yield put({
      type: types.LOGIN_USER_SUCCESS,
      payload: { user: response.user },
    })
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, payload: { error } })
  }
}

export function* logoutUser() {
  try {
    yield call(() => usersApi.logoutUser())
    yield put({ type: types.LOGOUT_USER_SUCCESS })
  } catch (error) {
    yield put({ type: types.LOGOUT_USER_ERROR, payload: { error } })
  }
}
