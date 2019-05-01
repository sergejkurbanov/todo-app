import { put, call } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import usersApi from 'api/users'
import * as types from './types'

export function* createUser({ payload }) {
  try {
    yield call(() => usersApi.createUser(payload))
    toast.success('User successfully created. Proceed to log in.')
    yield put({ type: types.CREATE_USER_SUCCESS })
  } catch (error) {
    toast.error(error.message || 'Error creating account.')
    yield put({ type: types.CREATE_USER_ERROR, payload: { error } })
  }
}

export function* loginUser({ payload }) {
  try {
    const response = yield call(() => usersApi.loginUser(payload))

    yield put({
      type: types.LOGIN_USER_SUCCESS,
      payload: { user: response.user.uid },
    })
  } catch (error) {
    toast.error(error.message || 'Error signing in user.')
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
