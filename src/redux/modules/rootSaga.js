import { all, fork } from 'redux-saga/effects'
import todoSagas from './todos/watchers'

export default function* rootSaga() {
  yield all([...todoSagas].map(fork))
}
