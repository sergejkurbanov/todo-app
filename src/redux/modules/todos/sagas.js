import { takeEvery, put } from 'redux-saga/effects'
import { GET_TODOS, GET_TODOS_SUCCESS } from './types'

export function* getTodos() {
  const data = [
    {
      text: 'Walk my cats',
      isCompleted: false,
    },
    {
      text: 'Meet girlfriend for breakfast',
      isCompleted: true,
    },
    {
      text: 'Build a really cool todo app',
      isCompleted: false,
    },
  ]

  yield put({ type: GET_TODOS_SUCCESS, payload: { data } })
}

export function* watchGetTodos() {
  yield takeEvery(GET_TODOS, getTodos)
}

const todoSagas = [watchGetTodos]

export default todoSagas
