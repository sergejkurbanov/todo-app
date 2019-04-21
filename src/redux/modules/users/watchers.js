import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as types from './types'
import * as workers from './workers'

function* watchCreateUser() {
  yield takeEvery(types.CREATE_USER, workers.createUser)
}

function* watchLoginUser() {
  yield takeLatest(types.LOGIN_USER, workers.loginUser)
}

function* watchLogoutUser() {
  yield takeLatest(types.LOGOUT_USER, workers.logoutUser)
}

const userSagas = [watchCreateUser, watchLoginUser, watchLogoutUser]

export default userSagas
