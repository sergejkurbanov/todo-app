import { all, fork } from 'redux-saga/effects'
import todoSagas from './todos/watchers'
import userSagas from './users/watchers'

export default function* rootSaga() {
  yield all([...todoSagas, ...userSagas].map(fork))
}
