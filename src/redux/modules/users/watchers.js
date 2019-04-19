import { takeEvery } from 'redux-saga/effects'
import * as types from './types'
import * as workers from './workers'

function* watchCreateUser() {
  yield takeEvery(types.CREATE_USER, workers.createUser)
}

function* watchLoginUser() {
  yield takeEvery(types.LOGIN_USER, workers.loginUser)
}

function* watchLogoutUser() {
  yield takeEvery(types.LOGOUT_USER, workers.logoutUser)
}

const userSagas = [watchCreateUser, watchLoginUser, watchLogoutUser]

export default userSagas
