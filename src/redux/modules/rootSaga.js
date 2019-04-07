import { all, fork } from 'redux-saga/effects'
import todoSagas from './todos/sagas'

export default function* rootSaga() {
  yield all([...todoSagas].map(fork))
}
